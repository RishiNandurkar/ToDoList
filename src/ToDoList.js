// ToDoList.js

import React, { useState } from 'react';


export default function ToDoList() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  function addActivity() {
    setlistData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity('');
      return updatedList;
    });
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => i !== id);
    console.log(updatedListData);
    setlistData(updatedListData);
  }

  function removeAll() {
    setlistData([]);
  }

  return (
    <>
      <div className='container'>
        <div className='header'>TODO LIST</div>
        <input
          type='text'
          placeholder='Add Activity'
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className='List-heading'>Here is your list:</p>
        {listData.length > 0 &&
          listData.map((data, i) => (
            <div key={i} className='listItem'>
              <div className='listData'>{data}</div>
              <div className='btn-position'>
                <button onClick={() => removeActivity(i)}>Remove(-)</button>
              </div>
            </div>
          ))}
        {listData.length > 0 && (
          <div className='removeAllContainer'>
            <button onClick={removeAll}>Remove All</button>
          </div>
        )}
      </div>
    </>
  );
}
