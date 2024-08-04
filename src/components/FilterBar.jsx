import FilterItem from "./FilterItem";

export default function FilterBar({ clearFilters, filter, removeFilter }) {
    return(
        <div className="bg-white shadow-3xl mb-4 flex gap-2 justify-between p-4 rounded-sm">
            <div className="flex flex-wrap gap-2">
                {
                    filter.map((item, index) => (<FilterItem removeFilter={removeFilter} key={index} index={index} text={item.text} />))
                }
            </div>
            <div>
                <button onClick={clearFilters} className="underline text-Desaturated-Dark-Cyan font-semibold">Clear</button>
            </div>
        </div>
    )
}