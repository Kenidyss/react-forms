import React from "react";
import Card from "../UI/Card";
import css from "./UsersList.module.css";
const UsersList = (props) => {
  return (
    <Card className={css.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
                {user.name} {user.age} years old.
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
