// Libraries
import React, { FC, ReactElement } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
// Styles
import styles from "./input.module.css";
import "../../main.css";

interface Props {
  register: UseFormRegisterReturn;
  id: string;
  label: string;
  required: boolean;
  placeholder: string;
  type: string;
  errors: any; // Adjust the type accordingly
  [key: string]: any; // For additional props
}

const TextInput: FC<Props> = ({
  register,
  id,
  label,
  required,
  placeholder,
  type,
  errors,
  ...rest
}): ReactElement => {
  return (
    <div className="columns xs-txt semi-bold">
      <div className="rows" style={{ justifyContent: "space-between" }}>
        <label htmlFor={id}>
          {label} {required && <span className={styles.alert}>*</span>}
        </label>
        {errors && (
          <span className={styles.alert} style={{ textAlign: "right" }}>
            {errors.message}
          </span>
        )}
      </div>
      <input
        className={styles.input}
        {...register}
        id={id}
        placeholder={placeholder}
        type={type}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
