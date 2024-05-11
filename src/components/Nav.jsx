import { Link } from "react-router-dom"




const Nav = () => {
  return (
    <header className="header h-28">
        <Link to="https://www.paystack.com/terminal/">
            <div className="relative">
                <div className="absolute header-bg"></div>

                <div className="header-content">
                    <div className="header-text header-desktop-only">
                        🎉 New: Paystack Virtual Terminal — accept blazing fast in-person payments at scale, with ZERO hardware costs.
                    </div>
                    <div className="header-text header-mobile-only">
                        🎉 New: Paystack Virtual Terminal — accept blazing fast in-person payments at scale, with ZERO hardware costs.
                    </div>
                </div>
            </div>
        </Link>
    </header>
  )
}

export default Nav
