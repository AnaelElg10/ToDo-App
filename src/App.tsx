import { useState } from 'react';
import { CheckSquare } from 'lucide-react';
import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';
import { useTodos } from './hooks/useTodos';
import { TodoFiltersComponent } from './components/TodoFilters';
import { TodoFilters as TodoFiltersType } from './types/todo';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, updateTodo } = useTodos();
  const [filters, setFilters] = useState<TodoFiltersType>({
    status: 'all',
    priority: 'all',
    category: '',
  });
  const filteredTodos = todos.filter(todo => {
    const statusMatch =
      filters.status === 'all' ||
      (filters.status === 'completed' && todo.completed) ||
      (filters.status === 'active' && !todo.completed);
    const priorityMatch =
      filters.priority === 'all' || todo.priority === filters.priority;
    const categoryMatch =
      !filters.category || todo.category === filters.category;
    return statusMatch && priorityMatch && categoryMatch;
  });
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex items-center justify-center gap-3 mb-8">
          <CheckSquare className="w-8 h-8 text-blue-500" />
          <h1 className="text-3xl font-bold text-gray-800">Todo App</h1>
        </div>
        <div className="space-y-6">
          <TodoForm onSubmit={addTodo} />
          
          <TodoFiltersComponent
            filters={filters}
            onFilterChange={setFilters}
          />
          <div className="space-y-4">
            {filteredTodos.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No todos found. Add some tasks to get started!
              </div>
            ) : (
              filteredTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                  onEdit={updateTodo}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;