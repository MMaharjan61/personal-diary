const ShowInfo = ({ onClick }) => {
  return (
    <div className="fixed inset-0 bg-[#d4a8b4] bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#082140] p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Info</h2>
        <p className="text-white">
          You have already added an entry for today. Please come back tomorrow
          to add a new entry!
        </p>
        <button
          className="mt-4 px-3 py-1 bg-[#c18234] text-white text-sm rounded outline-none hover:bg-[#F0A240]"
          onClick={onClick}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ShowInfo;
