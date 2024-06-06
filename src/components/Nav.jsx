import { Link } from "react-router-dom";
import { LogoIcon } from "../assets/icons";
import { menuOneFirst, menuOneSecond, menuOneThird } from "../constants";
import { SubMenuLeftCard, SubMenuRightCard } from "./";






const Nav = () => {


    return (
        <header>
            {/* Topbar */}
            <div className="top_bar_wrapper">
              🎉 New: Paystack Virtual Terminal — accept blazing fast in-person payments at scale, with ZERO hardware costs.
            </div>
            {/* Topbar */}



            <nav className="flex nav-menu">
                <Link to="/" alt="brand logo">
                    <LogoIcon />
                </Link>

                <ul className="nav-menu-items">
                    <li className="menu-item relative">
                        <p>Why Paystack</p>
                        <div className="flex flex-between shadow-lg rounded-lg min-w-max min-h-max absolute inset-12">
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
                </ul>
            </nav>
        </header>
    );
};

export default Nav
