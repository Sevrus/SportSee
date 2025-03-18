import "./Sidebar.css";
import IconNav from "../../components/IconNav/IconNav.jsx";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="navigation">
                <IconNav />
            </div>
            <footer className="sidebar-footer">
                <p>Copyright, SportSee 2020</p>
            </footer>
        </aside>
    );
};

export default Sidebar;
