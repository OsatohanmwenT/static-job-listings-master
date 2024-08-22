import React, { useState, useEffect, useCallback } from "react";
import JobList from "./components/JobList";
import useMappedData from "./hooks/mappedData";

export default function App() {
  const [filter, setFilter] = useState([]);

  const mappedData = useMappedData();

  const filteredList = useMemo(() => {
    if (filter.length === 0) {
      return mappedData;
    } else {
      return mappedData.filter((job) => {
        const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
        return filter.some((f) => jobTags.includes(f.text));
      });
    }
  }, [filter, mappedData]);

  const filterSelect = useCallback((text) => {
    setFilter((prevFilter) => {
      const inList = prevFilter.find((item) => item.text === text);
      if (inList) {
        return prevFilter;
      } else {
        return [...prevFilter, { text }];
      }
    });
  }, []);

  const removeFilter = useCallback((text) => {
    setFilter((prevFilter) => {
      return prevFilter.filter((item) => item.text !== text);
    });
  }, []);

  const clearFilters = useCallback(() => {
    setFilter([]);
  }, []);

  return (
    <>
      <div className="bg-Desaturated-Dark-Cyan w-full h-1/6 absolute top-0 bg-hero max-sm:bg-mobile bg-top bg-no-repeat bg-cover"></div>
      <main className="max-container mt-40 max-sm:mt-32 p-4 max-sm:pt-8">
        <JobList
          mappedData={filteredList}
          filterSelect={filterSelect}
          filter={filter}
          clearFilters={clearFilters}
          removeFilter={removeFilter}
        />
      </main>
    </>
  );
}
