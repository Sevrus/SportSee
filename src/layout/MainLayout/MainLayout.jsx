import Header from "../Header/Header.jsx";
import Sidebar from "../SideBar/Sidebar.jsx";
import "./MainLayout.css";

const MainLayout = ({children}) => {
    return (
        <div className="app-container">
            <Header />
            <div className="main-layout">
                <Sidebar />
                <main className="content">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default MainLayout;
