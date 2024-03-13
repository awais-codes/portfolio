import { default as CodeBracketIcon } from './CodeBracket'
import { default as HandWaveOutlinedIcon } from './HandWaveOutlined'
import { default as AcademicHatOulinedIcon } from './AcademicHatOutlined'
import { default as ChevronUpOutlinedIcon } from './ChevronUpOutlined'
import { default as DashboardOutlinedIcon } from './DashboardOutlined'
import { default as GithubIcon } from './Github'
import { default as LinkedInIcon } from './LinkedIn'
import { default as MailSolidIcon } from './MailSolid'

const Icons = {
  CodeBracketIcon,
  HandWaveOutlinedIcon,
  AcademicHatOulinedIcon,
  ChevronUpOutlinedIcon,
  DashboardOutlinedIcon,
  GithubIcon,
  MailSolidIcon,
  LinkedInIcon,
} as const

type IconName = keyof typeof Icons

export type { IconName }

export { CodeBracketIcon, HandWaveOutlinedIcon }
