const CustomButton = ({ btnName, handleClick }) => {
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
      >
        {btnName}
      </button>
    </div>
  );
};

export default CustomButton;
