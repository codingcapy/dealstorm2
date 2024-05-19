
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./layout"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import BudgetPage from "./pages/BudgetPage"
import DashboardPage from "./pages/DashboardPage"
import LoadingPage from "./pages/LoadingPage"
import AddressPage from "./pages/AddressPage"
import AllSetPage from "./pages/AllSetPage"

export function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/budget" element={<BudgetPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/loading" element={<LoadingPage />} />
                <Route path="/address" element={<AddressPage />} />
                <Route path="/allset" element={<AllSetPage />} />
            </Route>
        )
    )
    return router
}