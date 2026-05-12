import {
  SiCplusplus,
  SiC,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiFirebase,
  SiGit,
  SiGithub,
  SiMysql,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'

const map = {
  'C++': SiCplusplus,
  C: SiC,
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Java: SiOpenjdk,
  SQL: SiMysql,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  Redux: SiRedux,
  TailwindCSS: SiTailwindcss,
  'Spring Boot': SiSpringboot,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  Firebase: SiFirebase,
  Git: SiGit,
  GitHub: SiGithub,
  AWS: FaAws,
}

const SkillIcon = ({ name, size = 16, className, style }) => {
  const Icon = map[name]
  if (!Icon) {
    return (
      <span
        className={className}
        style={{ ...style, width: size, height: size, display: 'inline-block' }}
      />
    )
  }
  return <Icon size={size} className={className} style={style} />
}

export default SkillIcon
