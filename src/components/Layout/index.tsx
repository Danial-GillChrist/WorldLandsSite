import { Outlet } from "react-router";
import Footer from "../Footer";
import Header from "../Header";

const Layout = () =>{

    return(
        <div className="layoutWrapper">
           <Header/>
             <main>
                  <Outlet />
                  {/* Child routes will render here */}
              </main>
           <Footer/>
        </div>
    )
}

export default Layout;