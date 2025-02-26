import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  totalTests: number;
}

export function SearchBar({
  searchTerm,
  onSearchChange,
  totalTests,
}: SearchBarProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200 sm:text-sm"
        placeholder="What test are you looking for?"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <span className="text-sm text-gray-400">{totalTests} tests</span>
      </div>
    </div>
  );
}
