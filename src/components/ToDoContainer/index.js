import ToDoList from '../ToDoList';
import ToDoForm from '../ToDoForm';

const ToDoContainer = ({
  title,
  setTitle,
  user,
  setUser,
  status,
  setStatus,
  todos,
  setTodos,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { title, status, user, date: '2/6/22' }]);
    setTitle('');
    setStatus('');
    setUser('');
  };

  return (
    <div className='flex items-start justify-center flex-row'>
      <ToDoForm
        onSubmit={onSubmit}
        user={user}
        setUser={setUser}
        title={title}
        setTitle={setTitle}
        status={status}
        setStatus={setStatus}
      />
      <ToDoList todos={todos} />
    </div>
  );
};

export default ToDoContainer;
