import footeLogo from "../assets/Logo.png"
const Footer = () => {
    return (
        <div className="bg-[#07292F]">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-end px-6 py-4">
               <img src={footeLogo} alt="" />
               <p className="text-white">Copyright © 2023 Wizia.. All rights reserved.</p>
            </div>
        </div>
    );
}; 

export default Footer;  