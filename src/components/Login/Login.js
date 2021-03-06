import { Button } from "@material-ui/core";
import logo from "../../assets/logo.png";
import { useLocalContext } from "../../Context/Context";
import "./style.css";
const Login = () => {
  const { login, loggedInUser } = useLocalContext();

  console.log(loggedInUser);
  return (
    <div className="login">
      <img className="login__logo" src={logo} alt="Classroom" />

      <Button variant="contained" color="default" onClick={() => login()}>
        Login Now!
      </Button>
    </div>
  );
};

export default Login;