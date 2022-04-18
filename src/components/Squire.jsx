
const Squire = ({ value, chooseSquare }) => {
  return (
    <div
      className="border rounded cursor-pointer active:bg-red-100 border-black w-[33%] text-7xl flex items-center justify-center"
      onClick={chooseSquare}
    >
      <h1>{value}</h1>
    </div>
  );
};

export default Squire;
