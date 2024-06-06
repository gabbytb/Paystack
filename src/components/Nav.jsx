import { Link } from "react-router-dom";
import { LogoIcon } from "../assets/icons";
import {
     menuOneFirst, menuOneSecond, menuOneThird,
     menuFourFirst, menuFourSecond,
     menuDevelopers,
     menuSupport,
} from "../constants";
import { 
    SubMenuLeftCard, SubMenuRightCard,
    ButtonLink, 
 } from "./";






const Nav = () => {


    return (
        <header className="header">
            {/* Topbar */}
            <div className="top_bar_wrapper">
              🎉 New: Paystack Virtual Terminal — accept blazing fast in-person payments at scale, with ZERO hardware costs.
            </div>
            {/* Topbar */}


            {/* Main Menu */}
            <nav className="flex justify-between py-4.8 px-19.6 nav-menu">
                <div className="flex items-center gap-x-10">
                    <Link to="/" alt="brand logo" className="brand">
                        <LogoIcon />
                    </Link>

                    <ul className="flex space-x-8 h-16">
                        {/* Menu 1 */}
                        <li className="menu-item relative">
                            <Link to="#" className="flex items-center">why paystack <span className="ml-1.8"></span></Link>
                            <div className="flex justify-between shadow-lg rounded-lg min-w-max min-h-max absolute top-14 left-0">
                                {/* Left Menu */}
                                <div className="bg-white px-10 py-14 flex flex-col gap-y-12 sub-menu">
                                    {
                                        menuOneFirst.map((item) => {
                                            return (
                                                <SubMenuLeftCard key={item.textInfo} {...item} />
                                            );
                                        })
                                    }
                                </div>
                                {/* Left Menu */}


                                {/* Right Menu */}
                                <div className="flex flex-col px-10 py-14 gap-y-12 bg-skin-light-gray sub-menu">
                                    <div>
                                        <p className="uppercase mb-5">your growth stage</p>
                                        <ul className="space-y-4">
                                            {
                                                menuOneSecond.map((item) => {
                                                    return (
                                                        <SubMenuRightCard key={item.textInfo} {...item} />
                                                    );
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="uppercase mb-5">your business type</p>
                                        <ul className="space-y-4">
                                            {
                                                menuOneThird.map((item) => {
                                                    return (
                                                        <SubMenuRightCard key={item.textInfo} {...item} />
                                                    );
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                {/* Right Menu */}
                            </div>
                        </li>
                        {/* Menu 1 */}


                        {/* Menu 2 */}
                        <li className="menu-item relative">
                            <Link to="http://paystack.com/wall-of-love" className="flex">customers</Link>
                        </li>
                        {/* Menu 2 */}


                        {/* Menu 3 */}
                        <li className="menu-item relative">
                            <Link to="http://paystack.com/pricing" className="flex">pricing</Link>
                        </li>
                        {/* Menu 3 */}


                        {/* Menu 4 */}
                        <li className="menu-item relative">
                            <Link to="#" className="flex items-center">learn <span className="ml-1.8"></span></Link>
                            <div className="flex justify-between shadow-lg rounded-lg min-w-max min-h-max absolute top-14 left-0">

                                {/* Left Menu */}
                                <div className="bg-white px-10 py-14 flex flex-col gap-y-12 sub-menu">
                                    {
                                        menuFourFirst.map((item) => {
                                            return (
                                                <SubMenuLeftCard key={item.textInfo} {...item} />
                                            );
                                        })
                                    }
                                </div>
                                {/* Left Menu */}


                                {/* Right Menu */}
                                <div className="flex flex-col px-10 py-14 bg-skin-light-gray sub-menu">
                                    <div>
                                        <p className="uppercase mb-5">your growth stage</p>
                                        <ul className="space-y-4">
                                            {
                                                menuFourSecond.map((item) => {
                                                    return (
                                                        <SubMenuRightCard key={item.textInfo} {...item} />
                                                    );
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                {/* Right Menu */}
                            </div>
                        </li>
                        {/* Menu 4 */}
                    </ul>
                </div>


                <div className="flex">
                    <ul className="flex space-x-8 h-16">
                        {/* Menu 5 */}
                        <li className="menu-item relative">
                            <Link to="#" className="flex items-center">developers <span className="ml-1.8"></span></Link>
                            <div className="shadow-lg rounded-lg absolute top-16 left-0 min-w-max">
                                <div className="flex flex-col p-8 space-y-4 bg-white sub-menu">
                                    {
                                        menuDevelopers.map((item) => {
                                            return (
                                                <SubMenuRightCard key={item.textInfo} {...item} />
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </li>
                        {/* Menu 5 */}


                        {/* Menu 6 */}
                        <li className="menu-item relative">
                            <Link to="#" className="flex items-center">support <span className="ml-1.8"></span></Link>
                            <div className="shadow-lg rounded-lg absolute top-16 left-0 min-w-max">
                                <div className="flex flex-col p-8 space-y-4 bg-white sub-menu">
                                    {
                                        menuSupport.map((item) => {
                                            return (
                                                <SubMenuRightCard key={item.textInfo} {...item} />
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </li>
                        {/* Menu 6 */}

                        
                        {/* Log-in */}
                        <li className="menu-item">
                            <Link to="https://dashboard.paystack.com/#/login">login</Link>
                        </li>
                        {/* Log-in */}


                        {/* Sign Up Button */}
                        <li className="menu-item">
                            <ButtonLink 
                                btnProps="bg-skin-light-green hover:bg-skin-light-green-hover text-white font-semibold font-graphik px-6 py-5 rounded-lg"
                                btnLink="https://dashboard.paystack.com/#/dashboard"
                                btnText="Create free account"
                            />
                        </li>
                        {/* Sign Up Button */}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Nav
