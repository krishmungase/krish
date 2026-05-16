import { useEffect, useRef, useState } from 'react'

const API_BASE = 'https://alfa-leetcode-api.onrender.com'
const CACHE_TTL_MS = 6 * 60 * 60 * 1000
const cacheKey = (handle) => `leetcode-stats:${handle}`

const readCache = (handle) => {
  try {
    const raw = localStorage.getItem(cacheKey(handle))
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed.fetchedAt !== 'number') return null
    return parsed
  } catch {
    return null
  }
}

const writeCache = (handle, payload) => {
  try {
    localStorage.setItem(cacheKey(handle), JSON.stringify(payload))
  } catch {
    // storage full / disabled — silently skip
  }
}

const fetchJson = async (path, signal) => {
  const res = await fetch(`${API_BASE}${path}`, { signal })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

const useLeetCodeStats = (handle) => {
  const cached = useRef(readCache(handle))
  const [data, setData] = useState(cached.current?.data ?? null)
  const [fetchedAt, setFetchedAt] = useState(cached.current?.fetchedAt ?? null)
  const [status, setStatus] = useState(
    cached.current ? 'cached' : 'loading'
  )

  useEffect(() => {
    if (!handle) return

    const fresh =
      cached.current &&
      Date.now() - cached.current.fetchedAt < CACHE_TTL_MS
    if (fresh) {
      setStatus('live')
      return
    }

    const controller = new AbortController()
    ;(async () => {
      try {
        const [solved, contest, badgesRes] = await Promise.all([
          fetchJson(`/${handle}/solved`, controller.signal),
          fetchJson(`/${handle}/contest`, controller.signal),
          fetchJson(`/${handle}/badges`, controller.signal).catch(() => null),
        ])

        const next = {
          totalSolved: solved.solvedProblem ?? solved.totalSolved ?? null,
          easy: solved.easySolved ?? null,
          medium: solved.mediumSolved ?? null,
          hard: solved.hardSolved ?? null,
          rating: Math.round(contest?.contestRating ?? 0) || null,
          contestsAttended: contest?.contestAttend ?? null,
          globalRank: contest?.contestGlobalRanking
            ? `~ ${Math.round(contest.contestGlobalRanking / 1000)}k`
            : null,
          badges:
            badgesRes?.badges
              ?.map((b) => b.displayName || b.name)
              .filter(Boolean) ?? null,
        }

        const now = Date.now()
        setData(next)
        setFetchedAt(now)
        setStatus('live')
        writeCache(handle, { data: next, fetchedAt: now })
      } catch (err) {
        if (err.name !== 'AbortError') setStatus('error')
      }
    })()

    return () => controller.abort()
  }, [handle])

  return { data, status, fetchedAt }
}

export default useLeetCodeStats
