import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavbarLatest from "../Navbar/NavbarLatest";


const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('registrations') ||
        location.pathname.includes('login')
    return (
        <div>

            <div className="">
                {noHeaderFooter || <NavbarLatest></NavbarLatest>}
            </div>

            <div className='max-w-[1400px] mx-auto' >
                <Outlet ></Outlet>
            </div>

            <div>
                {noHeaderFooter || <Footer></Footer>}
            </div>
        </div>
    );
};

export default MainLayout;