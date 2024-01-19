import { FaPhoneAlt,FaFacebookF, FaTwitter,FaGooglePlusG,FaUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
const Contact = () => {
    const user = null;
    return (
       <div className=" bg-green-600  text-white px-2 md:px-4 lg:px-8 hidden md:block">
         <div className="mx-3 flex justify-between md:py-2">
            {/* phone number and email part */}
           <div className="md:flex gap-5">
            <div className="flex gap-2">
                <div className="w-8 h-8 p-2  bg-white rounded-full">
                <FaPhoneAlt style={{color: "green"}} />
                </div>
                <h4>+880 1987391793 </h4>
            </div>
            <div className="flex gap-2">
                <div className="w-8 h-8 p-2  bg-white rounded-full">
                <MdOutlineMail style={{color: "green"}} />
                </div>
                <h4>sumiya.akhi793@gmail.com </h4>
            </div>
            
           </div>
            
            {/* facebook, Twitter and Google logo part */}
            <div className="md:flex gap-2">
            <div className="flex gap-1">
            <div className="w-8 h-8 p-2  bg-black opacity-50 rounded-full">
               <Link href={""}><FaFacebookF  style={{color: "white"}}/></Link> 
                </div>
                <div className="w-8 h-8 p-2  bg-black opacity-50 rounded-full">
                <FaTwitter  style={{color: "white"}}/>
                </div>
                <div className="w-8 h-8 p-2  bg-black opacity-50 rounded-full">
                <FaGooglePlusG style={{color: "white"}}/>
                </div> 
            </div>
            {/* login ,registration button part */}
            <div className="flex">
            <div className="divider lg:divider-horizontal"></div>
                {
                    user? <> <div className="avatar">
                    <div className="w-12">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div></>:  <div className="px-2 py-1">
                    <FaUser style={{}} />
                    </div>
                }
               
           <div>
            <Link className="font-sans font-semibold">Login</Link>
           </div>
            </div>
            </div>
            
        </div>
       </div>
    );
};

export default Contact;