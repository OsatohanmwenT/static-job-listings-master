import FilterButton from "./FilterButton";

export default function JobCard({
  logo,
  company,
  info,
  featured,
  position,
  role,
  contract,
  location,
  languages,
  postedAt,
  level,
  tools,
  filterSelect,
  filter,
}) {
  return (
    <div
      className={`flex flex-1 flex-wrap relative justify-between items-center max-sm:flex-col max-sm:items-start  max-sm:gap-4 w-full p-6 max-sm:p-4 max-sm:pt-8 ${
        info && featured ? "border-l-[3px] border-Desaturated-Dark-Cyan" : ""
      }
           bg-white mt-6 max-sm:mt-10 rounded-sm shadow-3xl`}
    >
      <div className="flex gap-4 items-center ">
        <div className="max-sm:absolute -top-6">
          <img src={logo} alt="company logo" width={55} height={55} />
        </div>
        <div>
          <div className="flex flex-1 items-center gap-2">
            <p className="text-Desaturated-Dark-Cyan text-sm font-bold">
              {company}
            </p>
            {info && (
              <div className="bg-Desaturated-Dark-Cyan text-center py-[3px] px-2 rounded-2xl">
                <p className="text-white text-[12px] font-semibold">NEW!</p>
              </div>
            )}

            {featured && (
              <div className="bg-Very-Dark-Grayish-Cyan text-center py-[3px] px-2 rounded-2xl">
                <p className="text-white text-[12px] font-semibold">FEATURED</p>
              </div>
            )}
          </div>
          <p className="text-Very-Dark-Grayish-Cyan font-bold">{position}</p>
          <div className="flex items-center justify-between">
            <p className="text-Dark-Grayish-Cyan text-[13px]">{postedAt}</p>
            <div className="w-[2px] h-[2px] rounded-full bg-Dark-Grayish-Cyan"></div>
            <p className="text-Dark-Grayish-Cyan text-[13px]">{contract}</p>
            <div className="w-[2px] h-[2px] rounded-full bg-Dark-Grayish-Cyan"></div>
            <p className="text-Dark-Grayish-Cyan text-[13px]">{location}</p>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-Dark-Grayish-Cyan sm:hidden"></div>
      <div className="flex gap-2 flex-wrap items-center">
        <FilterButton text={role} filterSelect={filterSelect} />
        <FilterButton text={level} filterSelect={filterSelect} />
        {languages.map((language, index) => (
          <FilterButton
            key={index}
            text={language}
            filterSelect={filterSelect}
          />
        ))}
        {tools.map((tool, index) => (
          <FilterButton key={index} text={tool} filterSelect={filterSelect} />
        ))}
      </div>
    </div>
  );
}
