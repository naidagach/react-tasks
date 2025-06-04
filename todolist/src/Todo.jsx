import { useState } from 'react'


function Todo() {
  const [text, setText] = useState('')
  const [arr, setArr] = useState([])

  function gonder() {
    setArr([...arr, text])
    setText('')
  }

  return (
    <div className="container">
        <h1>My ToDo List</h1>
        <section>
            <div id="todo">
                <h2>List</h2>
                <div className="elave">
                    <input value={text} onChange={(event) => {
                      setText(event.target.value)
                    }} type="text" placeholder="Add to list..." id="inp" />
                    <button onClick={gonder}>Add</button>
                </div>
                <div id="demo">
                      {arr.map((item, i)=> (
                    <div key={i} id="list">
                      <p>{item}</p>
                      <div>
                      <button>Edit</button>
                      <button>Remove</button>
                      </div>
                    </div>
                      ))}
                </div>
            </div>
            <div id="recycle">
                <h2>Recycle Bin</h2>
                <div id="demo2">

                </div>
            </div>
        </section>
      </div>
    )
}

export default Todo
