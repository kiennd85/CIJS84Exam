import CustomButton from '../Components/CustomButton';
import CustomInput from '../Components/CustomInput';
import CustomList from '../Components/CustomList';
import './ToDo.css';
import useHook from './useHook';

const ToDo = () => {
  const { listTask, onChange, valueInput, onChangeInput, onClick, handleClick, btnRemove, filter, btnRemoveAll } = useHook();
  return (
    <>
      <div className="containerkn">
        <div style={{ width: '350px' }}>
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

          {filter != 'Completed' && (
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
          )}

          <div>
            <CustomList
              filter={filter}
              listTask={listTask}
              onChange={onChange}
              btnRemove={btnRemove}
            ></CustomList>
          </div>

          {filter === 'Completed' && (
            <div className="BtnRemoveAll">
              <button onClick={btnRemoveAll}>Delete all</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ToDo;
