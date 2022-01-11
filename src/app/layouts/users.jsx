/* eslint-disable multiline-ternary */
import React from "react";
import { useParams } from "react-router";
import UsersListPage from "../components/page/usersListPage";
import UserPage from "../components/page/userPage";
import UserProvider from "../hooks/useUsers";
import EditUserPage from "../components/page/editUserPage";
const Users = () => {
    const params = useParams();
    const { userId, edit } = params;
    return (
        <UserProvider>
            {userId ? (
                edit ? (
                    <EditUserPage />
                ) : (
                    <UserPage userId={userId} />
                )
            ) : (
                <UsersListPage />
            )}
        </UserProvider>
    );
};

export default Users;
