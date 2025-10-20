import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface IProps {
    children: ReactNode
}

const CommonLayout: React.FC<IProps> = ({children}) => {
    return (
        <div className="min-h-screen flex flex-col relative">
            <Navbar/>
            <div className="grow">
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default CommonLayout;