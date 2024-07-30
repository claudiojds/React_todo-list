import { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import styles from "./Header.module.css";
import { Input } from "../input/index";
import { Button } from "../button/index";

export const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const { dispatch } = useContext(TodoContext);

  // Criando uma nova tarefa
  const handleNewTask = () => {
    if (!inputValue) {
      alert("Digite um título para a nova tarefa");
      return;
    }

    dispatch({ type: "ADD", payload: { title: inputValue, isDone: false } });
    setInputValue("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.brandContainer}>
        <img src="/brand.png" alt="GRF Todo list" />
      </div>

      <div className={styles.newTaskContainer}>
        <div className={styles.newTaskInput}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <Button onClick={handleNewTask} />
      </div>
    </div>
  );
};
