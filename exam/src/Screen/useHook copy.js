import { useEffect, useState } from 'react';

const listTaskDefault = [
  { id: 1, name: 'Code Home work 1', isCheck: false },
  { id: 2, name: 'Code Home work 2', isCheck: false },
  { id: 3, name: 'Code Home work 3', isCheck: false },
];

const useHook = () => {
  const [listTask, setListTask] = useState(listTaskDefault);
  const [valueInput, setValueInput] = useState('');
  const [filter, setFilter] = useState('All');

  //Update task complete chưa
  const onChange = (e, itemId) => {
    const listTaskClone = JSON.parse(JSON.stringify(listTask));
    const newItem = listTaskClone.find((item) => {
      return item.id == itemId;
    });
    newItem.isCheck = e.target.checked;
    setListTask(listTaskClone);
  };

  //Nhập dữ liệu task đầu vào
  const onChangeInput = (e) => {
    setValueInput(e.target.value);
  };

  //Tạo ID ngẫu nhiên
  const genId = () => {
    const Id = Math.floor(Math.random() * 100);
    const check = listTask.find((item) => Id == item.id);
    if (check) {
      genId();
    }
    return Id;
  };

  //Button Add task
  const onClick = (e) => {
    const task = valueInput;
    console.log(task);
    if (task.trim().length != 0) {
      const id = genId();
      const newTask = { id: id, name: task, isCheck: false };
      console.log(newTask);
      const listTaskClone = JSON.parse(JSON.stringify(listTask));
      listTaskClone.push(newTask);
      setListTask(listTaskClone);
    }
  };

  useEffect(() => {
    if (filter === 'All') {
    }
  }, [filter]);

  //Button filler
  const handleClick = (e, btnName) => {
    setFilter(btnName);
    console.log(filter);
  };

  return { listTask, onChange, valueInput, onChangeInput, onClick, handleClick };
};

export default useHook;
