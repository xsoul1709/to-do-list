import { CheckIcon } from "./Icons";
import { Todo } from "../types";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="todo-list__item">
      <button
        onClick={() => onToggle(todo.id)}
        className={"todo-list__checkbox"}
      >
        {todo.completed && <CheckIcon className="w-4 h-4" />}
      </button>

      <span
        className={`todo-list__item-text ${
          todo.completed ? "line-through" : ""
        }`}
      >
        {todo.text}
      </span>

      <div className="delete-btn">
        <button onClick={() => onDelete(todo.id)}>X</button>
      </div>
    </div>
  );
}
