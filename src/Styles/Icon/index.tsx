import { useState } from 'react'

type Props = {
  name: string
  size?: number
  color?: string
  hover?: boolean
  onClick?: () => void
  style?: string
}

function Icon({ name, size, color, hover, onClick, style }: Props) {
  const [iconName, setIconName] = useState(name)

  return (
    <img
      src={`https://icongr.am/entypo/${iconName}.svg?size=${size}&color=${color}`}
      onMouseOver={() => {
        hover && setIconName(name.replace('-outlined', ''))
      }}
      onMouseOut={() => {
        hover && setIconName(name)
      }}
      onClick={() => onClick()}
      alt='Imagen'
      className={style}
    />
  )
}

Icon.defaultProps = {
  size: 24,
  color: 'D9BDAB',
  name: 'home',
  hover: false,
  style: '',
  onClick: () => {
    console.log('test')
  },
}

export default Icon
