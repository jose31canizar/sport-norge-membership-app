import { db } from "./index";
import { getId } from "./auth";

export const doCreateUser = (id, name, email) =>
  db.ref(`users/${id}`).set({
    name,
    email
  });

export const doUpdateUserField = (field, folder, value, id) =>
  db
    .ref(`users/${id}`)
    .child(folder)
    .update({
      [field]: value
    });

export const loadUsers = () =>
  db
    .ref("users")
    .orderByChild(`entities/clubs/${10}`)
    .equalTo(true)
    .once("value")
    .then(function(snapshot) {
      if (snapshot.exists()) {
        return snapshot.val();
      }
    })
    .catch(err => console.log(err));

export const loadTokens = () =>
  db
    .ref("tokens")
    .once("value")
    .then(function(snapshot) {
      if (snapshot.exists()) {
        return snapshot.val();
      }
    })
    .catch(err => console.log(err));
