import axios from "axios";
import type { Test, Site } from "../types/test";

const API_URL = "http://localhost:3100";

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

const handleRequest = async <T>(request: Promise<{ data: T }>): Promise<T> => {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    console.error("API error:", error);
    throw new Error("Failed to fetch data");
  }
};

export const fetchTests = () => handleRequest<Test[]>(apiClient.get("/tests"));
export const fetchSites = () => handleRequest<Site[]>(apiClient.get("/sites"));
export const fetchTest = (id: number) =>
  handleRequest<Test>(apiClient.get(`/tests/${id}`));
export const fetchSite = (id: number) =>
  handleRequest<Site>(apiClient.get(`/sites/${id}`));
