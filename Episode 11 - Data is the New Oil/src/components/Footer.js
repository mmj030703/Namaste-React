import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Footer = () => {
    const {loggedInUsername, surname} = useContext(UserContext);

    return (
        <footer className="bg-black mt-7">
        <p className="text-center text-white text-lg pt-10 pb-2">©2024-2025 NamasteFood | All Rights Reserved</p>
        <p className="font-bold text-white text-center">Made by {loggedInUsername} {surname}</p>
        </footer>
    );
}
export default Footer;