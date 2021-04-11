import {useState} from 'react';

/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem( {item, onCheck}  ) {
  const [check, setCheck] = useState(false);
  function changeTextColor(){
    onCheck(item);
  }
  return (
    <label className="panel-block" class = {item.done ? 'has-text-grey-light' : ''}>
      <input type="checkbox" onChange={changeTextColor} />
      {item.text}
    </label>
  );
}

export default TodoItem;