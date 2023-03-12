import { useState } from 'react';

interface Props {
  name: string;
  size?: number;
  color?: string;
  hover?: boolean;
  onClick?: () => void;
  style?: string;
}

function Icon({ name, size, color, hover, onClick, style }: Props) {
  const [iconName, setIconName] = useState(name);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/mouse-events-have-key-events
    <img
      src={`https://icongr.am/entypo/${iconName}.svg?size=${size}&color=${color}`}
      onMouseOver={() => {
        hover && setIconName(name.replace('-outlined', ''));
      }}
      onMouseOut={() => {
        hover && setIconName(name);
      }}
      onClick={onClick}
      alt="Imagen"
      className={style}
    />
  );
}

Icon.defaultProps = {
  size: 24,
  color: 'D9BDAB',
  hover: false,
  style: '',
  onClick: () => {},
};

export default Icon;
