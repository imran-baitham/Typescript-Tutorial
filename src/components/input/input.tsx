import React, { Dispatch, SetStateAction } from "react";

export enum InputVariants {
  LG = "large",
  MD = "Medium",
  SM = "Small",
}
interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => string;
  variant: InputVariants;
  label: string;
}
export const Input = (props: InputProps) => {
  const { onChange, variant, label } = props;

  const handleVariantPicker = () => {
    if (variant === InputVariants.LG) return "50px";
    if (variant === InputVariants.MD) return "30px";
    if (variant === InputVariants.SM) return "20px";
  };

  return (
    <>
      <label>{label}</label>
      <input
        type={"text"}
        onChange={onChange}
        style={{ fontSize: handleVariantPicker() }}
      />
    </>
  );
};

interface Sum {
  num: number;
  set: Dispatch<SetStateAction<number>>;
}

export const Button = (props: Sum) => {
  const { set, num } = props;

  return (
    <>
      <button onClick={() => set(num + 1)}>Add Both</button>
    </>
  );
};
