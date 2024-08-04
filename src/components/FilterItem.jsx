import removeIcon from "../assets/images/icon-remove.svg";

export default function FilterItem({ text, removeFilter }) {
    return(
        <div className="flex flex-wrap bg-Cyan-filter text-center rounded-sm">
                <p className="text-[13px] text-Desaturated-Dark-Cyan p-1 font-semibold">{text}</p>
                <button onClick={() => removeFilter(text)} className="bg-Desaturated-Dark-Cyan p-2 rounded-e-sm hover:bg-Very-Dark-Grayish-Cyan">
                    <img src={removeIcon} alt="remove icon" />
                </button>
            </div>
    )
}