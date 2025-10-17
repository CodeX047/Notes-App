const Form = ({ handler, heading, details, setDetails, setHeading }) => {
  return (
    <form
      className="flex gap-4 lg:w-1/2 flex-col items-start p-10"
      onSubmit={handler}
    >
      <h1 className="text-3xl font-bold">Add Notes</h1>
      <input
        type="text"
        placeholder="Note Heading"
        className="px-5 w-full py-2 border-2 outline-none rounded-lg font-medium bg-[#2a2a2a]"
        value={heading}
        onChange={(e) => {
          setHeading(e.target.value);
        }}
      />
      <textarea
        placeholder="Enter Details"
        className="px-5 w-full h-32 py-2 border-2 outline-none rounded-lg font-medium bg-[#2a2a2a]"
        value={details}
        onChange={(e) => {
          setDetails(e.target.value);
        }}
      ></textarea>

      <button className="bg-[#d1d5db] hover:bg-white text-black px-5 py-2 w-full rounded-lg font-medium outline-none cursor-pointer">
        Add Note
      </button>
    </form>
  );
};

export default Form;
