import { Avatar, ShellBar } from "@ui5/webcomponents-react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Homepage/Home";

export function MyApp() {

    return (
        <>
            <ShellBar primaryTitle="IT8010 Project"
                secondaryTitle="Building Application using Microservices Architecture"
                logo={<img src="../media/UC_Logo.jpg" />}
                profile={
                    <Avatar>
                        <img src="../media/My_Image.jpg" />
                    </Avatar>
                }
            >
            </ShellBar>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Navigate replace to="/home"/>}/>
            </Routes>

        </>
    );
};