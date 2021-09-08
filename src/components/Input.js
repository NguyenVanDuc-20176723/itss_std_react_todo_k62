import React, { useState } from 'react';
import {getKey} from '../lib/util'
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( {onAdd} ) {
  const [obj, setObj] = useState();
  
  function handleChange(evt){
    setObj({
      key: getKey(),
      text: evt.target.value,
      done: false
    })
  }
  
  function handleKeyDown(evt){
    if(evt.key == 'Enter')
      onAdd(obj);
  }
  
  return (
    <div className="panel-block">
      
      <input
        class = 'input'
        type = 'text'
        placeholder = 'Todoを入力してください'
        
        onChange = {handleChange}
        onKeyDown = {handleKeyDown}
        
      />
    
    </div>
  );
}

export default Input;
