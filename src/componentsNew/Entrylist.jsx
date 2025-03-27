import { loadEntries } from "./Storage.jsx";

const Entrylist = ({ filter }) => {
  const entries = loadEntries() || [];

  return (
    <>
      {entries
        .filter((e) => !filter || e.date === filter)
        .map(({ date, title, image, content }, index, filteredArray) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "bg-[#A25E9B]" : "bg-[#5C6BBE]"
            } rounded-[15px] mx-1 shadow-[9px_9px_35px] ${
              index === filteredArray.length - 1 ? "mb-0" : "mb-5"
            }`}
          >
            <img
              className="w-[100%] max-h-[35vh] rounded-t-xl object-cover"
              src={image}
              alt="day at the beach"
            />
            <div className="px-[35px] py-[35px]">
              <p className="text-[#F5F6FB] text-sm font-bold">{date}</p>
              <h2 className="mb-2.5">{title}</h2>
              <p className="text-white">{content}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Entrylist;
