import { useLocation, useNavigate } from "react-router";

const Backpage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tokenUser = sessionStorage.getItem("Token");

  if (location.pathname === "/") {
    navigate("/User/Login");
  } else if (tokenUser && "/") {
    navigate("/User/");
  }

  
};

export default Backpage;
