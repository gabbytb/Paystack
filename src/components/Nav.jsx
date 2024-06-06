import { Link } from "react-router-dom";
import { LogoIcon } from "../assets/icons";
import {
     menuOneFirst, menuOneSecond, menuOneThird,
     menuFourFirst, menuFourSecond,
     menuDevelopers,
     menuSupport,
} from "../constants";
import { SubMenuLeftCard, SubMenuRightCard } from "./";






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
                    <Link to="/" alt="brand logo" className="brand_logo">
                        <LogoIcon />
                    </Link>

                    <ul className="flex space-x-8 w-full">
                        {/* Menu 1 */}
                        <li className="menu-item h-16 relative">
                            <Link to="#" className="flex items-center">why paystack <span></span></Link>
                            <div className="flex justify-between shadow-lg rounded-lg min-w-max min-h-max absolute top-12 left-0">
                                {/* Left Menu */}
                                <div className="bg-green-700 p-8 flex flex-col gap-y-12 sub-menu">
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
                                <div className="flex flex-col gap-y-10 bg-skin-light-gray sub-menu">
                                    <div>
                                        <p className="uppercase mb-2">your growth stage</p>
                                        <ul>
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
                                        <p className="uppercase mb-2">your business type</p>
                                        <ul>
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
                        <li className="menu-item h-16 relative">
                            <Link to="http://paystack.com/wall-of-love" className="flex">customers</Link>
                        </li>
                        {/* Menu 2 */}


                        {/* Menu 3 */}
                        <li className="menu-item h-16 relative">
                            <Link to="http://paystack.com/pricing" className="flex">pricing</Link>
                        </li>
                        {/* Menu 3 */}


                        {/* Menu 4 */}
                        <li className="menu-item h-16 relative">
                            <Link to="#" className="flex items-center">learn <span></span></Link>
                            <div className="hidden justify-between shadow-lg rounded-lg min-w-max min-h-max absolute top-12 left-0">

                                {/* Left Menu */}
                                <div className="bg-white p-8 flex flex-col gap-y-12 sub-menu">
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
                                <div className="flex flex-col bg-skin-light-gray sub-menu">
                                    <div>
                                        <p className="uppercase mb-2">your growth stage</p>
                                        <ul>
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
                    <ul className="flex">
                        {/* Menu 5 */}
                        <li className="menu-item h-16 relative">
                            <Link to="#" className="flex items-center">developers <span></span></Link>
                            <div className="hidden shadow-lg rounded-lg absolute top-12 left-0">
                                <div className="bg-white p-8 flex flex-col sub-menu">
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
                        <li className="menu-item h-16 relative">
                            <Link to="#" className="flex items-center">support <span></span></Link>
                            <div className="hidden shadow-lg rounded-lg absolute top-12 left-0">
                                <div className="bg-white p-8 flex flex-col sub-menu">
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
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Nav
