import { Link } from "react-router-dom";



const SubMenuRightCard = ({ linkURI, textInfo, }) => {
  return (
    <li>
      <Link to={linkURI} alt={textInfo}>
          {textInfo}
      </Link>
    </li>
  )
}

export default SubMenuRightCard
