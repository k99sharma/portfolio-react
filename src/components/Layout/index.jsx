// importing components
import Navbar from "../Navbar";
import Footer from "../Footer";

// layout component
export default function Layout({ children }){
    return(
        <div className="layout">
            <div className="layout__navbar">
                <Navbar />
            </div>
            {
                children
            }
            <div className="layout__footer">
                <Footer />
            </div>
        </div>
    )
}