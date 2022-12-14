import { useState } from 'react';
import './styles/AddTodo.scss'

const AddTodo = ({ addItem }) => {
  // 사용자 입력을 저장할 객체
  // (id, title, done에 대한 정보를 저장해야해서 객체 형태로!!)
  const [todoItem, setTodoItem] = useState({
    title: '',
  });

  const onButtonClick = () => {
    if (todoItem.title.trim() === '') {
      alert('값을 입력해주세요');
    } else {
      // props로 받아온 addItem 함수 실행
      addItem(todoItem); // {title: 'input입력값}
      setTodoItem({title: ''}); // input초기화

    }
  };

  // Enter키 입력시 아이템 추가
  const onEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
        onButtonClick();
    }
  }

  return (
    <>
    {/* <h1 className='title'>Todo-APP</h1> */}
    <header>Todo-APP</header>
    <div className="AddTodo">
      <input
      type="text"
      placeholder="Add your new Todo!"
      value={todoItem.title}
      onChange={(e) => setTodoItem({title: e.target.value})}
      onKeyPress={onEnterKeyPress}
      />
      <button onClick={onButtonClick}>add</button>
    </div>
    </>
  );
};

export default AddTodo;