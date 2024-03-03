import { CSSProperties, ElementType, ReactNode } from 'react'

type Variant = 'display1' | 'display2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small'

interface TypographyProps {
  variant: Variant
  fontWeight?: Pick<CSSProperties, 'fontWeight'>
  color?: Pick<CSSProperties, 'color'>
  fontStyle?: Pick<CSSProperties, 'fontStyle'>
}

const TYPESCALE: Record<Variant, string> = {
  display1: 'text-[2.75rem] leading-[3.5rem]',
  display2: 'text-[2.5rem] leading-[3rem]',
  h1: 'text-[2.25rem] leading-[2.75rem]',
  h2: 'text-[2rem] leading-[2.5rem]',
  h3: 'text-[1.75rem] leading-[2.25rem]',
  h4: 'text-2xl leading-normal', // 2xl = 1.5rem, normal line-height = 1.5
  h5: 'text-xl leading-normal', // xl = 1.25rem, normal line-height = 1.5
  h6: 'text-base leading-normal', // base = 1rem, normal line-height = 1.5
  body: 'text-sm leading-snug', // sm = 0.875rem, snug line-height = 1.375
  small: 'text-xs leading-tight', // xs = 0.75rem, tight line-height = 1.25
}

const TYPESCALE_TO_ELEMENT: Record<Variant, ElementType> = {
  display1: 'h1',
  display2: 'h2',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  small: 'span',
}

const Typography = (props: TypographyProps, children: ReactNode) => {
  const { variant, ...style } = props
  const Element = TYPESCALE_TO_ELEMENT[variant]
  const classes = TYPESCALE[variant]
  return (
    <Element className={classes} style={style}>
      {children}
    </Element>
  )
}

export default Typography
