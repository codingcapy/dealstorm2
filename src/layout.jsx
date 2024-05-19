

import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./ScrollToTop";
import Header from "./components/Header";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">

            <ScrollToTop />
            <Header />
            <Outlet />

        </div>
    )
}
