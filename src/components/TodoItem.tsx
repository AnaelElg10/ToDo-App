import React from 'react';
import { Trash2, Edit2, CheckCircle, Circle } from 'lucide-react';
import { Todo } from '../types/todo';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, updates: Partial<Todo>) => void;
};

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <div className={`bg-white p-4 rounded-lg shadow-md transition-all ${
      todo.completed ? 'opacity-75' : ''
    }`}>
      <div className="flex items-start gap-4">
        <button
          onClick={() => onToggle(todo.id)}
          className="mt-1 text-gray-500 hover:text-blue-500 transition-colors"
        >
          {todo.completed ? (
            <CheckCircle className="w-6 h-6 text-green-500" />
          ) : (
            <Circle className="w-6 h-6" />
          )}
        </button>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className={`text-lg font-medium ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}>
              {todo.title}
            </h3>
            <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[todo.priority]}`}>
              {todo.priority}
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800">
              {todo.category}
            </span>
          </div>

          {todo.description && (
            <p className="mt-1 text-gray-600 text-sm">{todo.description}</p>
          )}

          {todo.dueDate && (
            <p className="mt-2 text-sm text-gray-500">
              Due: {new Date(todo.dueDate).toLocaleDateString()}
            </p>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onDelete(todo.id)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              const newTitle = prompt('Edit todo:', todo.title);
              if (newTitle) onEdit(todo.id, { title: newTitle });
            }}
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Edit2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}