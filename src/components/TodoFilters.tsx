import { TodoFilters as TodoFiltersType } from '../types/todo';

type TodoFiltersProps = {
  filters: TodoFiltersType;
  onFilterChange: (filters: TodoFiltersType) => void;
};

export function TodoFiltersComponent({ filters, onFilterChange }: TodoFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 bg-white p-4 rounded-lg shadow-md">
      <select
        value={filters.status}
        onChange={(e) => onFilterChange({ ...filters, status: e.target.value as TodoFiltersType['status'] })}
        className="px-3 py-1.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>

      <select
        value={filters.priority}
        onChange={(e) => onFilterChange({ ...filters, priority: e.target.value as TodoFiltersType['priority'] })}
        className="px-3 py-1.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="all">All Priorities</option>
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
    </div>
  );
}