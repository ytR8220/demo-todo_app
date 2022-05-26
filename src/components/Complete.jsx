export const Complete = (props) => {
  const { completeTodos, onChangeInComplete, onClickCompleteDelete } = props;
  const style = {
    textDecoration: 'line-through',
  };
  return (
    <div className='complete-area'>
      <h2 className='title'>完了TODO</h2>
      <ul>
        {completeTodos.map((value, index) => {
          return (
            <li key={index}>
              <div className='list-wrap'>
                <label className='list-row flex-item'>
                  <input
                    onChange={() => onChangeInComplete(index, value)}
                    className='checkbox'
                    type='checkbox'
                    checked={true}
                  />
                  <p style={style}>{value}</p>
                </label>
                <button
                  onClick={() => onClickCompleteDelete(index)}
                  className='flex-item'
                >
                  削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
