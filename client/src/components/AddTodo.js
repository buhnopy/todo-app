import { useState, useEffect, useRef } from 'react';
import './styles/AddTodo.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  }); //첫렌더링시 오토포커스...그냥 속성에 autoFocus 쓰는게 나음

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
      ref={inputFocus}
      autoFocus
      />
      <button onClick={onButtonClick}><FontAwesomeIcon icon={faPlus} /></button>
    </div>
    </>
  );
};

export default AddTodo;