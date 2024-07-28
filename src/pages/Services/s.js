import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import Services2D from './Services2D/Services';
import Services from './Services3D/Services';
import "./services.scss";

const Sss = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modeSwitch, setModeSwitch] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    const toggleMode = () => {
        setModeSwitch(!modeSwitch);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
            <Navbar toggle={toggleSidebar} />
            
     

            {modeSwitch ? <Services modeSwitch={modeSwitch} toggleMode={toggleMode} /> : <Services2D modeSwitch={modeSwitch} toggleMode={toggleMode} />}
        </>
    );
}

export default Sss;
