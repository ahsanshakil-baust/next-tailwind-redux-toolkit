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
    <div>
      <input
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
