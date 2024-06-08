import React from "react";

const UserList = ({users}) =>{
    return(<>
    <h1>User List</h1>
    <ul>
        {users.map((user)=>{
          return(
            <li key={user.id}>
              {user.name}
            </li>
          )
        })}
    </ul>
    </>)
}
export default UserList;