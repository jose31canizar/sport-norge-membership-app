import Splash from "./login-splash";
import ByEmail from "./login-by-email";
import ByPhoneNumber from "./login-by-phone-number";
import Template from "./template";

// export const LoginSplash = Template(props => Splash, true);
export const LoginSplash = Template(Splash, true);
export const LoginByEmail = Template(ByEmail, true);
export const LoginByPhoneNumber = Template(ByPhoneNumber, true);
