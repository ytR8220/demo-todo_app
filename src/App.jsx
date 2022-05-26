import { useState } from 'react';
import './App.css';
import { Complete } from './components/Complete';
import { InComplete } from './components/InComplete';
import { InputArea } from './components/InputArea';

export const App = () => {
  const [inCompleteTodos, setInCompleteTodo] = useState([]);
  const [completeTodos, setCompleteTodo] = useState([]);
  const [todoText, setTodoText] = useState('');
  const onChangeText = (e) => {
    setTodoText(e.target.value);
  };
  const onClickAdd = () => {
    if (todoText === '') return;
    const newInCompleteTodos = [...inCompleteTodos, todoText];
    setInCompleteTodo(newInCompleteTodos);
    setTodoText('');
  };

  const onChangeComplete = (index, value) => {
    const newInCompleteTodos = [...inCompleteTodos];
    const newCompleteTodos = [...completeTodos, value];
    newInCompleteTodos.splice(index, 1);
    setInCompleteTodo(newInCompleteTodos);
    setCompleteTodo(newCompleteTodos);
  };

  const onChangeInComplete = (index, value) => {
    const newInCompleteTodos = [...inCompleteTodos, value];
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setInCompleteTodo(newInCompleteTodos);
    setCompleteTodo(newCompleteTodos);
  };

  const onClickInCompleteDelete = (value) => {
    const newInCompleteTodos = [...inCompleteTodos];
    newInCompleteTodos.splice(value, 1);
    setInCompleteTodo(newInCompleteTodos);
  };

  const onClickCompleteDelete = (value) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(value, 1);
    setCompleteTodo(newCompleteTodos);
  };

  //Enterキー押下で追加ボタンと同じ機能を持たせる
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onClickAdd();
    }
  };

  return (
    <>
      <h1>TODOアプリ for React</h1>
      <InputArea
        onChangeText={onChangeText}
        todoText={todoText}
        onEnter={onEnter}
        onClickAdd={onClickAdd}
      />
      <InComplete
        inCompleteTodos={inCompleteTodos}
        onChangeComplete={onChangeComplete}
        onClickInCompleteDelete={onClickInCompleteDelete}
      />
      <Complete
        completeTodos={completeTodos}
        onChangeInComplete={onChangeInComplete}
        onClickCompleteDelete={onClickCompleteDelete}
      />
    </>
  );
};
