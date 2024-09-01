import Google from "@auth/core/providers/google";
import GitHub from "@auth/core/providers/github";
import { convexAuth } from '@convex-dev/auth/server';
import { Password } from "@convex-dev/auth/providers/Password";

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [GitHub, Google, Password]
});
