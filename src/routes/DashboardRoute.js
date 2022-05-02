import { Navigate, Route, Routes } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import FormTravel from "../pages/FormTravel"
import Home from "../pages/Home"
import Travels from "../pages/Travels"

const DashboardRoute = () => {
    return (
        <>
            {/* <Header /> */}
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/travels" element={<Travels />} />
                <Route path="/form" element={<FormTravel />} />
                <Route path="*" element={<Navigate to='/' />} />
            </Routes>
            {/* <Footer /> */}
        </>
    )
}

export default DashboardRoute;