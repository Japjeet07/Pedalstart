import TaskList from "./TaskList";
import useFetch from "./usefetch.js";

const Home = () => {
  const { error, isPending, data: tasks } = useFetch('http://localhost:8000/tasks')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { tasks && <TaskList tasks={tasks} /> }
    </div>
  );
}
 
export default Home;
