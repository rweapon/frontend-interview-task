import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react";
import type { Test } from "../types/test";
import { formatSiteUrl } from "../utils/url";

interface TestTableProps {
  tests: (Test & { siteUrl: string })[];
  onSort: (column: keyof Test) => void;
  sortColumn: keyof Test | null;
  sortDirection: "asc" | "desc";
}

export function TestTable({
  tests,
  onSort,
  sortColumn,
  sortDirection,
}: TestTableProps) {
  const navigate = useNavigate();

  const getSortIcon = useCallback(
    (column: keyof Test) => {
      if (sortColumn !== column) return null;
      return sortDirection === "asc" ? (
        <ChevronUp className="inline-block h-4 w-4 ml-1" />
      ) : (
        <ChevronDown className="inline-block h-4 w-4 ml-1" />
      );
    },
    [sortColumn, sortDirection]
  );

  const getStatusColor = (status: string) => {
    if (status === "ONLINE") return "text-emerald-500";
    if (status === "PAUSED") return "text-orange-500";
    if (status === "STOPPED") return "text-red-500";
    return "text-gray-500";
  };

  const getRowColor = (status: string) => {
    if (status === "ONLINE") return "border-emerald-500";
    if (status === "PAUSED") return "border-orange-500";
    if (status === "STOPPED") return "border-red-500";
    if (status === "DRAFT") return "border-gray-500";
    return "";
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            {["name", "type", "status", "siteId"].map((column) => (
              <th
                key={column}
                scope="col"
                className="py-4 pl-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => onSort(column as keyof Test)}
              >
                {column.charAt(0).toUpperCase() + column.slice(1)}{" "}
                {getSortIcon(column as keyof Test)}
              </th>
            ))}
            <th scope="col" className="py-4"></th>
          </tr>
        </thead>
        <tbody className="divide-y-4 divide-white">
          {tests.map((test) => (
            <tr
              key={test.id}
              className="bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <td
                className={`py-4 pl-3 text-sm font-medium text-gray-900 rounded border-l-4 ${getRowColor(
                  test.status
                )}`}
              >
                {test.name}
              </td>
              <td className="py-4 text-sm text-gray-500">
                {test.type === "SERVER_SIDE"
                  ? "Server-side"
                  : test.type.charAt(0) + test.type.slice(1).toLowerCase()}
              </td>
              <td className="py-4 text-sm">
                <span className={getStatusColor(test.status)}>
                  {test.status.charAt(0) + test.status.slice(1).toLowerCase()}
                </span>
              </td>
              <td className="py-4 text-sm text-gray-500">
                {formatSiteUrl(test.siteUrl)}
              </td>
              <td className="py-4 text-right space-x-2">
                {test.status === "DRAFT" ? (
                  <button
                    onClick={() => navigate(`/finalize/${test.id}`)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Finalize
                  </button>
                ) : (
                  <button
                    onClick={() => navigate(`/results/${test.id}`)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    Results
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
