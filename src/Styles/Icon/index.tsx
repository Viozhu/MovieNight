import { useState } from "react";

type Props = {
  name: string;
  size?: number;
  color?: string;
  hover?: boolean;
};

const Icon = ({ name, size, color, hover }: Props) => {
  const [iconName, setIconName] = useState(name);

  return (
    <img
      src={`https://icongr.am/entypo/${iconName}.svg?size=${size}&color=${color}`}
      onMouseOver={() => {
        hover && setIconName(name.replace("-outlined", ""));
      }}
      onMouseOut={() => {
        hover && setIconName(name);
      }}
      alt="Imagen"
    />
  );
};

Icon.defaultProps = {
  size: 24,
  color: "D9BDAB",
  name: "home",
  hover: false,
};

export default Icon;
