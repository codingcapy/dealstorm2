
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
import SearchPage from "./pages/SearchPage"
import MyListPage from "./pages/MyListPage"
import CompletedPage from "./pages/CompletedPage"
import ProfilePage from "./pages/ProfilePage"

export function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/dealstorm2/" element={<HomePage />} />
                <Route path="/dealstorm2/login" element={<LoginPage />} />
                <Route path="/dealstorm2/signup" element={<SignupPage />} />
                <Route path="/dealstorm2/budget" element={<BudgetPage />} />
                <Route path="/dealstorm2/dashboard" element={<DashboardPage />} />
                <Route path="/dealstorm2/loading" element={<LoadingPage />} />
                <Route path="/dealstorm2/address" element={<AddressPage />} />
                <Route path="/dealstorm2/allset" element={<AllSetPage />} />
                <Route path="/dealstorm2/search" element={<SearchPage />} />
                <Route path="/dealstorm2/mylist" element={<MyListPage />} />
                <Route path="/dealstorm2/completed" element={<CompletedPage />} />
                <Route path="/dealstorm2/profile" element={<ProfilePage />} />
            </Route>
        )
    )
    return router
}