import JobCard from "./JobCard";
import FilterBar from "./FilterBar"


export default function JobList({ mappedData, filterSelect, filter, clearFilters, removeFilter }) {

    return(
        <>
        {filter.length > 0 &&
            <FilterBar filter={filter} clearFilters={clearFilters} removeFilter={removeFilter} />
        }
        <div className="flex flex-col flex-1">
            {mappedData.map((job) => (
                <JobCard key={job.id}
                info={job.new}
                {...job}
                filterSelect={filterSelect}
                />
            ))}
        </div>
        </>
    )
}