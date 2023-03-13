import { createContext, useState } from "react";

export const UserInfoContext = createContext({})

function UserInfoProvider({ children }) {

    return (
        <UserInfoContext.Provider value={{ }}>
            {children}
        </UserInfoContext.Provider>
    )

}

export default UserInfoProvider