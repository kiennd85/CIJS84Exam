const CustomInput = ({ valueInput, onChangeInput }) => {
  return (
    <div>
      <div>
        <input
          type="text"
          value={valueInput}
          onChange={onChangeInput}
        />
      </div>
    </div>
  );
};

export default CustomInput;
