/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter( {value, onChange} ) {
  function handleClick(key, evt){
    evt.preventDefault();
    onChange(key);
  }
  return (
    <div className="panel-tabs">
      <a href='#' onClick={handleClick.bind(null, 'ALL')} class={value === 'ALL' ? 'is-active' : ''}>全て</a>
      <a href='#' onClick={handleClick.bind(null, 'TODO')} class={value === 'TODO' ? 'is-active' : ''}>未完了</a>
      <a href='#' onClick={handleClick.bind(null, 'DONE')} class={value === 'DONE' ? 'is-active' : ''}>完了済み</a>
    </div>
  );
}

export default Filter