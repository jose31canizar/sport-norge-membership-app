import { auth } from "./index";

export const getId = () => auth.currentUser.uid;
