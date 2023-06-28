const CustomInput = ({ valueInput, onChangeInput }) => {
  return (
    <div>
      <div>
        <input
          style={{ width: '250px', height: '30px', marginRight: '10px', borderRadius: '5px' }}
          type="text"
          value={valueInput}
          onChange={onChangeInput}
        />
      </div>
    </div>
  );
};

export default CustomInput;
