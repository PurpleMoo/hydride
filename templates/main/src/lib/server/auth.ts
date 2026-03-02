import "$lib/server/server-only";
import { db } from "$lib/server/db";
import { passkey } from "@better-auth/passkey";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { emailOTP } from "better-auth/plugins";

export const auth = betterAuth({
  baseURL: import.meta.env.VITE_APP_URL,
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        if (type === "sign-in") {
          console.log(">>>SIGN_IN", email, otp);
        }
      },
    }),
    passkey(),
  ],
});
