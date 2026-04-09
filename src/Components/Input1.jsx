import { useState } from "react";

const Input1 = () => {
  const [data, setData] = useState({
    name: "",
    number: "",
  });

  console.log(data);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleClear = () => {
    setData({
      name: "",
      number: "",
    });
  };

  return (
    <>
      <div className="flex justify-center p-10 gap-4">
        <input
          name="name"
          value={data.name}
          className="bg-white text-black"
          type="text"
          placeholder="enter name....."
          onChange={inputHandler}
        />
        <button className="bg-blue-500 py-2 px-4 rounded" onClick={handleClear}>
          Clear
        </button>
        <br />
        <br />
        <input
          name="number"
          value={data.number}
          className="bg-white text-black"
          type="number"
          placeholder="Enter number...."
          onChange={inputHandler}
        />
      </div>
      <div>
        <h1 className="text-4xl font-extrabold"></h1>
      </div>
    </>
  );
};

export default Input1;
