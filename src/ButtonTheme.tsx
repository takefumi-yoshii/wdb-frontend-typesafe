import React from "react";
import styles from "./styles.module.css";

type Props = {
  theme: "dark" | "light";
  children: React.ReactNode;
};

export const Button = (props: Props) => {
  return <button className={styles[props.theme]}>{props.children}</button>;
};

export const ButtonContainer = () => (
  <>
    <Button theme="dark">+1</Button>
    <Button theme="light">+1</Button>
    {/* 未定義 theme の gray はエラー */}
    <Button theme="gray">+1</Button>
    ```
  </>
);
