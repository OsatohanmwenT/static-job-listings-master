export default  function FilterButton({ text, filterSelect }) {    
    return(
        <button onClick={() =>filterSelect(text)} className="p-1 bg-Cyan-filter lg:hover:bg-Very-Dark-Grayish-Cyan rounded-sm">
            <p className="text-Desaturated-Dark-Cyan text-[13px] font-bold">{text}</p>
        </button>
    )
}