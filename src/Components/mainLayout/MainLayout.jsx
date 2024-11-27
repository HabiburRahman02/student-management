import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NavbarLatest from "../Navbar/NavbarLatest";


const MainLayout = () => {
    return (
        <div>
            {/* navnar */}
            <div>
                <Navbar></Navbar>
                <NavbarLatest></NavbarLatest>
            </div>
            {/* outlet */}
            <div className='min-h-[calc(100vh-350px)]' >
                <Outlet ></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;