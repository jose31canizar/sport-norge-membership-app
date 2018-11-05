import API from "../api";
import { Permissions, Notifications } from "expo";
import { AsyncStorage } from "react-native";
import { doUpdateUserField, doAddToken } from "../firebase/db";

export default async () => {
  let previousToken = await AsyncStorage.getItem("pushToken");

  if (previousToken) {
    return;
  } else {
    let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status !== "granted") {
      return;
    }

    let token = await Notifications.getExpoPushTokenAsync();

    return Promise.all([
      doAddToken(token),
      doUpdateUserField("push_notification_token", token)
    ]);

    AsyncStorage.setItem("pushToken", token);
  }
};
