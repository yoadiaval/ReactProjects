import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers, addUser } from "../store";
import { useThunk } from "../hook/use-thunk";
import Button from "./Button";
import Skeleton from "./Skeleton";
import UsersListItems from "./UsersListItems";



function UserList() {
  //const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  //const [loadingUsersError, setLoadingUsersError] = useState(null);
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  //const [isCreatingUser, setIsCreatingUser] = useState(null);
  //const [creatingUserError, setCreatingUserError] = useState(null);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUser();
  };


  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  }else if(loadingUsersError){
     content = <div>Error fetching data...</div>;
  } else{
    content = data.map((user) => {
    return (
      <UsersListItems key={user.id} user={user} />
      
    );
  });
  }

  
  return (
    <div>
      <div className="flex flex-row items-center justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>

        {creatingUserError && "Error creating user..."}
      </div>
      {content}
    </div>
  );
}

export default UserList;
