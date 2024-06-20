import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, body, author };

    fetch('http://localhost:8000/tasks/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Task title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Task body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Task author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Task</button>
      </form>
    </div>
  );
}
 
export default Create;