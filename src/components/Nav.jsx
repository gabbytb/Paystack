import { Link } from "react-router-dom";
import { LogoIcon } from "../assets/icons";
import {
     menuOneFirst, menuOneSecond, menuOneThird,
     menuFourFirst, menuFourSecond,
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



            <nav className="flex h-20 items-center nav-menu">
                <Link to="/" alt="brand logo">
                    <LogoIcon />
                </Link>

                <ul className="flex items-center space-x-8 nav-menu-items w-full">
                    <li className="menu-item relative">
                        <Link to="#">Why Paystack</Link>
                        <div className="flex flex-between shadow-lg rounded-lg min-w-max min-h-max absolute top-12 left-0">
                            <div className="bg-white p-8 flex flex-col gap-y-12 submenu-left">
                                {
                                    menuOneFirst.map((item) => {
                                        return (
                                            <SubMenuLeftCard key={item.textInfo} {...item} />
                                        );
                                    })
                                }
                            </div>
                            <div className="flex flex-col gap-y-10 bg-skin-light-gray submenu-right">
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
                        </div>
                    </li>


                    <li className="menu-item relative">
                        <Link to="#">learn</Link>
                        <div className="flex flex-between shadow-lg rounded-lg min-w-max min-h-max absolute top-12 left-0">
                            <div className="bg-white p-8 flex flex-col gap-y-12 submenu-left">
                                {
                                    menuFourFirst.map((item) => {
                                        return (
                                            <SubMenuLeftCard key={item.textInfo} {...item} />
                                        );
                                    })
                                }
                            </div>
                            <div className="flex flex-col bg-skin-light-gray submenu-right">
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
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav
