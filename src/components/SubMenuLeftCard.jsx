import { Link } from "react-router-dom";




const SubMenuLeftCard = ({ linkURI, iconURI, textInfo, subTextInfo, }) => {
  return (
    <Link to={linkURI} className="flex space-x-8 w-102.5">
        <div className="min-w-20 h-50 submenu-icon">
            <img src={iconURI} alt={textInfo} />
        </div>
        <div className="submenu-info">
            <h4>{textInfo}</h4>
            <p>{subTextInfo}</p>
        </div>
    </Link>
  )
}

export default SubMenuLeftCard
