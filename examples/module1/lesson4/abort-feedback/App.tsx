import { useUserClient } from './hooks/useUserClient';

const App = () => {
  const { users, getUsers, isLoading, errorMessage } = useUserClient();

  if (isLoading) return <p>is Loading.......</p>;

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <div className="flex flex-row items-center">
          <p className="mr-2">{errorMessage && errorMessage}</p>
          {errorMessage && (
            <button
              onClick={getUsers}
              className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4"
            >
              Try again
            </button>
          )}
        </div>
      </div>
      <ul className="space-y-2">
        {users.length > 0 &&
          users.map((user, index) => (
            <li
              className="bg-white p-4 rounded-md border border-gray-100"
              key={index}
            >
              {user.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
