import styles from "./Button.module.css";
import AddIcon from "../../assets/add.svg?react";

type Props = {
  onClick: () => void;
};

export const Button = ({ onClick }: Props) => {
  return (
    <div>
      <button onClick={onClick} className={styles.container}>
        Criar <AddIcon />
      </button>
    </div>
  );
};
