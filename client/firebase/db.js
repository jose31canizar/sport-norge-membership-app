import { db } from "./index";
import { getId } from "./auth";

export const doUpdateUserField = (field, value) =>
  db.ref(`users/${getId()}`).update({
    [field]: value
  });

export const doAddToken = token =>
  db.ref("tokens").update({
    token: token
  });

export const doCreateUser = (id, name, email) =>
  db.ref(`users/${id}`).set({
    name,
    email
  });
