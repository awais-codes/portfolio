import { default as CodeBracketIcon } from './CodeBracket'
import { default as HandWaveOutlinedIcon } from './HandWaveOutlined'

const Icons = {
  CodeBracketIcon,
  HandWaveOutlinedIcon,
} as const

type IconName = keyof typeof Icons
type IconProps = (typeof Icons)[IconName]

export type { IconName, IconProps }

export { CodeBracketIcon, HandWaveOutlinedIcon }
