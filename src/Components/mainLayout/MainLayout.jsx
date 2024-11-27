import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NavbarLatest from "../Navbar/NavbarLatest";


const MainLayout = () => {
    return (
        <div>

            <div className="">
                {/* <Navbar></Navbar> */}
                <NavbarLatest></NavbarLatest>
            </div>

            <div className='max-w-[1400px] mx-auto' >
                <Outlet ></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;