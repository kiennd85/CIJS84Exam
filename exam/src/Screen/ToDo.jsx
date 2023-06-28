import CustomButton from '../Components/CustomButton';
import CustomInput from '../Components/CustomInput';
import CustomList from '../Components/CustomList';
import './ToDo.css';
import useHook from './useHook';

const ToDo = () => {
  const { listTask, onChange, valueInput, onChangeInput, onClick, handleClick, btnRemove } = useHook();
  return (
    <>
      <div className="containerkn">
        <div>
          <div className="title">#todo</div>
          <div className="BoxButton">
            <CustomButton
              btnName="All"
              handleClick={(e) => {
                handleClick(e, 'All');
              }}
            ></CustomButton>
            <CustomButton
              btnName="Active"
              handleClick={(e) => {
                handleClick(e, 'Active');
              }}
            ></CustomButton>
            <CustomButton
              btnName="Completed"
              handleClick={(e) => {
                handleClick(e, 'Completed');
              }}
            ></CustomButton>
          </div>

          <div className="BoxInput">
            <div>
              <CustomInput
                valueInput={valueInput}
                onChangeInput={onChangeInput}
              ></CustomInput>
            </div>
            <div>
              <button
                className="ButtonAdd"
                type="button"
                onClick={onClick}
              >
                Add
              </button>
            </div>
          </div>

          <div>
            <CustomList
              listTask={listTask}
              onChange={onChange}
              btnRemove={btnRemove}
            ></CustomList>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
