<script>
  import { user } from "../user";

  let username;
  let password;
</script>

<label for="username">username</label>
<input name="username" bind:value={username} minlength="3" maxlength="16" />

<label for="password">password</label>
<input name="passwoed" bind:value={password} type="password" />

<button>Login</button>