import { useEffect, useState } from 'react';

let listTaskDefault = [
  { id: 1, name: 'Code Home work 1', isCheck: false },
  { id: 2, name: 'Code Home work 2', isCheck: false },
  { id: 3, name: 'Code Home work 3', isCheck: false },
];

const useHook = () => {
  const [listTask, setListTask] = useState(listTaskDefault);
  const [valueInput, setValueInput] = useState('');

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

    if (task.trim().length != 0) {
      const id = genId();
      const newTask = { id: id, name: task, isCheck: false };

      const listTaskClone = JSON.parse(JSON.stringify(listTask));
      listTaskClone.push(newTask);
      setListTask(listTaskClone);
    }
  };

  //Button filler
  const handleClick = (e, btnName) => {
    console.log(111);
  };

  //Button Remove
  const btnRemove = (e, itemId) => {
    const listTaskClone = JSON.parse(JSON.stringify(listTask));
    const newList = listTaskClone.filter((item) => item.id != itemId);
    setListTask(newList);
  };
  return { listTask, onChange, valueInput, onChangeInput, onClick, handleClick, btnRemove };
};

export default useHook;
