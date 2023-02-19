import React from "react";
import * as styles from "./styles";
type Props = {
  label?: string;
  placeholder?: string;
  requeired?: boolean;
  type?: string;
  id?: string;
};

const Input = ({ label, placeholder, requeired, type, id }: Props) => {
  return (
    <div>
      {!!label && <label className={styles.LABEL}>First name</label>}
      <input
        type={type}
        id={id}
        className={styles.INPUT}
        placeholder={placeholder}
        required={requeired}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  id: "input",
  placeholder: "Input",
  required: false,
};

export default Input;
