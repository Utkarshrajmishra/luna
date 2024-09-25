"use clinet";

const Input = () => {
  return (
    <textarea
      name="input"
      id="input"
      rows={4}
      placeholder="Custom Input"
      className="focus:outline-none max-w-[375px] border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white mt-2"
    ></textarea>
  );
};

export default Input;
