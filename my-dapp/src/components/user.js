import Gun from "gun";
import "gun/sea";
import "gun/axe";
import { writable } from "svelte/store";

//database
export const db = Gun();

//Gun user
export const user = db.user().recall({ sessionStorage: true });

//current user username
export const username = writable("");

//as in username
user.get("alias").on((v) => username.set(v));

db.on("auth", async (event) => {
  const alias = await user.get("alias");
  username.set(alias);

  console.log(`signed in as ${alias}`);
});
