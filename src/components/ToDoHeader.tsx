import React from "react";

type TodoHeaderProps = {
  newTodo: string;
  onNewTodoChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export function TodoHeader({
  newTodo,
  onNewTodoChange,
  onSubmit,
}: TodoHeaderProps) {
  return (
    <div className="todo-header">
      <h1>Todos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => onNewTodoChange(e.target.value)}
          placeholder="What needs to be done?"
          className="todo-header__input"
        />
      </form>
    </div>
  );
}
