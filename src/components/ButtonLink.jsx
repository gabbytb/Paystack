import { Link } from "react-router-dom";

const ButtonLink = ({ btnLink, btnProps, btnText }) => {
  return (
    <Link to={btnLink} className={btnProps}>
        {btnText}
    </Link>
  );
};
export default ButtonLink;
