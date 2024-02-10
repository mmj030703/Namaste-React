import { createContext } from "react";

const UserContext = createContext({
    loggedInUsername: "Default",
    surname: "Default"
});

export default UserContext;