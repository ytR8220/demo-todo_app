export const InputArea = (props) => {
  const { onChangeText, todoText, onEnter, onClickAdd } = props;
  return (
    <div className='input-area'>
      <h2 className='title'>TODOの追加</h2>
      <input
        onChange={(e) => onChangeText(e)}
        id='input-text'
        type='text'
        placeholder='TODOを入力'
        value={todoText}
        onKeyPress={onEnter}
      />
      <button type='submit' onClick={onClickAdd}>
        追加
      </button>
    </div>
  );
};
