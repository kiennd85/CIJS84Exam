const CustomList = ({ listTask, onChange, btnRemove }) => {
  return (
    <div>
      {listTask.map((item) => (
        <div
          key={item?.id}
          className="TaskList"
        >
          <input
            type="checkbox"
            value={item?.value}
            onChange={(e) => {
              onChange(e, item?.id);
            }}
            checked={item?.isCheck}
          ></input>
          <label>{item?.name}</label>

          <div style={{ marginLeft: '50px' }}>
            <button
              onClick={(event) => {
                btnRemove(event, item?.id);
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomList;
