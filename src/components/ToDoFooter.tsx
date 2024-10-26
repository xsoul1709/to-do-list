// import React from 'react';
import { FilterStatus } from "../types";

type TodoFooterProps = {
  activeTodosCount: number;
  filter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
  onClearCompleted: () => void;
};

export function TodoFooter({
  activeTodosCount,
  onFilterChange,
  onClearCompleted,
}: TodoFooterProps) {
  return (
    <div>
      <span>{activeTodosCount} items left</span>

      <div>
        {(["all", "active", "completed"] as FilterStatus[]).map((f) => (
          <button key={f} onClick={() => onFilterChange(f)}>
            {f}
          </button>
        ))}
      </div>

      <div onClick={onClearCompleted} className="clear-btn">
        Clear completed
      </div>
    </div>
  );
}
