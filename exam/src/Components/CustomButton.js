const CustomButton = ({ btnName, handleClick }) => {
  return (
    <div>
      <button
        style={{ width: '80px', backgroundColor: 'white', border: 'white' }}
        type="button"
        onClick={handleClick}
      >
        {btnName}
      </button>
    </div>
  );
};

export default CustomButton;
