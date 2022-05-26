export const InComplete = (props) => {
  const { inCompleteTodos, onChangeComplete, onClickInCompleteDelete } = props;
  return (
    <div className='incomplete-area'>
      <h2 className='title'>未完了TODO</h2>
      <ul>
        {inCompleteTodos.map((value, index) => {
          return (
            <li key={index}>
              <div className='list-wrap'>
                <label className='list-row flex-item'>
                  <input
                    onChange={() => onChangeComplete(index, value)}
                    className='checkbox'
                    type='checkbox'
                    checked={false}
                  />
                  <p>{value}</p>
                </label>
                <button
                  onClick={() => onClickInCompleteDelete(index)}
                  className=' flex-item'
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
