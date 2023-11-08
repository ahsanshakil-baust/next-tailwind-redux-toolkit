const TextInput = ({
  name,
  placeholder,
  value,
  onChangeHandler,
}: {
  name: string;
  placeholder: string;
  value: string;
  onChangeHandler: any;
}) => {
  return (
    <div className="p-2 w-[100%]">
      <input
        className="outline-none px-3 py-2 rounded-md border ring-1 ring-green-700 font-light w-[100%] text-xl"
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default TextInput;
