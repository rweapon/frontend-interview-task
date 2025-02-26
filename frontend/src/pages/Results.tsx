import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useFetch } from "../hooks/useFetch";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import type { Test } from "../types/test";

export function Results() {
  const { testId } = useParams<{ testId: string }>();
  const { data: test, isLoading, isError } = useFetch<Test>(`/tests/${testId}`);

  if (isLoading) return <Loader />;
  if (isError || !test) return <ErrorMessage message={isError || "Тест не найден"} />;

  return (
    <div className="h-lvh flex flex-col px-8 py-8">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-900">Results</h1>
        <h2 className="mt-1 text-lg text-gray-600">{test.name}</h2>
      </div>
      <Link to="/" className="inline-flex items-center text-lg text-gray-500 hover:text-gray-700">
        <ChevronLeft className="size-6 mr-1" />
        Back
      </Link>
    </div>
  );
}
