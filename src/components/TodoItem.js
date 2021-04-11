import {useState} from 'react';

/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem( {item}  ) {
  const [check, setCheck] = useState(false);
  function changeTextColor(){
    setCheck(!check);
  }
  return (
    <label className="panel-block" class = {check ? 'has-text-grey-light' : ''}>
      <input type="checkbox" onChange={changeTextColor} />
      {item.text}
    </label>
  );
}

export default TodoItem;