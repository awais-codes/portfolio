import { SVGProps } from 'react'

const ChevronUpOutlined = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    {...props}>
    <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 15.75 7.5-7.5 7.5 7.5' />
  </svg>
)

export default ChevronUpOutlined
