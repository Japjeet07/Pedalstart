import { useHistory, useParams } from "react-router-dom";
import useFetch from "./usefetch";

const TaskDetails = () => {
  const { id } = useParams();
  const { data: task, error, isPending } = useFetch('http://localhost:8000/tasks/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/tasks/' + task.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="task-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { task && (
        <article>
          <h2>{ task.title }</h2>
          <p>Written by {task.author }</p>
          <div>{ task.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default TaskDetails;