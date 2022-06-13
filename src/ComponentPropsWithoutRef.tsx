import React from "react";
import styles from "./styles.module.css";

type Props = {
  theme: "dark" | "light";
} & React.ComponentPropsWithoutRef<"button">;

export const Button = (props: Props) => {
  return <button {...props} className={styles[props.theme]} />;
};

export const ButtonContainer = () => (
  <>
    <Button
      theme="dark"
      onClick={() => {
        // onClick イベントハンドラー型定義は
        // React.ComponentPropsWithoutRef<"button"> に含まれる
      }}
    >
      +1
    </Button>
    ```
  </>
);
