import footeLogo from "../assets/Logo.png"
const Footer = () => {
    return (
        <div>
            <div className="flex justify-between px-6 py-4">
               <img src={footeLogo} alt="" />
               <p className="text-white">Copyright © 2023 Wizia.. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer; 