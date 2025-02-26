import { useState } from "react";
import type { Test, Site } from "../types/test";
import { useFetch } from "../hooks/useFetch";
import { SearchBar } from "../components/SearchBar";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { TestTable } from "../components/TestTable";

const sortTests = (
  tests: Test[],
  column: keyof Test,
  direction: "asc" | "desc"
): Test[] => {
  const statusOrder = { ONLINE: 1, PAUSED: 2, STOPPED: 3, DRAFT: 4 };

  return [...tests].sort((a, b) => {
    if (column === "status") {
      return direction === "asc"
        ? statusOrder[a.status] - statusOrder[b.status]
        : statusOrder[b.status] - statusOrder[a.status];
    }
    return direction === "asc"
      ? String(a[column]).localeCompare(String(b[column]))
      : String(b[column]).localeCompare(String(a[column]));
  });
};

export function Dashboard() {
  const {
    data: tests,
    isLoading: isLoadingTests,
    isError: isErrorTests,
  } = useFetch<Test[]>("/tests");
  const {
    data: sites,
    isLoading: isLoadingSites,
    isError: isErrorSites,
  } = useFetch<Site[]>("/sites");

  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<keyof Test | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  if (isLoadingTests || isLoadingSites) return <Loader />;
  if (isErrorTests || isErrorSites)
    return <ErrorMessage message="Ошибка загрузки данных. Попробуйте позже." />;

  const handleSort = (column: keyof Test) => {
    setSortDirection(
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc"
    );
    setSortColumn(column);
  };

  const filteredTests = tests!.filter((test) =>
    test.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sortedTests = sortColumn
    ? sortTests(filteredTests, sortColumn, sortDirection)
    : filteredTests;

  const testsWithSites = sortedTests.map((test) => ({
    ...test,
    siteUrl: sites!.find((site) => site.id === test.siteId)?.url || "",
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

        <div className="mt-8">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            totalTests={tests!.length}
          />
        </div>

        {testsWithSites.length === 0 ? (
          <div className="mt-32 text-center">
            <p className="text-gray-900 text-lg font-medium mb-4">
              Your search did not match any results.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="px-6 py-2 text-sm font-medium text-white bg-emerald-500 rounded-lg hover:bg-emerald-600"
            >
              Reset
            </button>
          </div>
        ) : (
          <div className="mt-6">
            <TestTable
              tests={testsWithSites}
              onSort={handleSort}
              sortColumn={sortColumn}
              sortDirection={sortDirection}
            />
          </div>
        )}
      </div>
    </div>
  );
}
