const CustomList = ({ listTask, onChange, btnRemove, filter }) => {
  return (
    <div>
      {listTask.map((item) => (
        <div
          key={item?.id}
          className="TaskList"
        >
          <div>
            <input
              type="checkbox"
              value={item?.value}
              onChange={(e) => {
                onChange(e, item?.id);
              }}
              checked={item?.isCheck}
            ></input>
            <label>{item?.name}</label>
          </div>
          {filter === 'Completed' && (
            <div style={{ marginLeft: '50px' }}>
              <button
                onClick={(event) => {
                  btnRemove(event, item?.id);
                }}
              >
                <i
                  className="fa-solid fa-trash"
                  style={{ color: 'red', border: 'white' }}
                ></i>
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomList;
