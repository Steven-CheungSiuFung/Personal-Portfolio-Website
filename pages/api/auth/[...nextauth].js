import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/auth/auth";
import { getUser } from "../../../lib/db-utils/db-project";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const userEmail = credentials.email;
        const userPassword = credentials.password;

        const user = await getUser(userEmail);
        if (!user) {
          res.status(404).json({ message: "User not found!" });
          return;
        }

        const isVerified = await verifyPassword(userPassword, user.password);
        if (!isVerified) {
          res.status(403).json({ message: "Could not log you in!" });
          return;
        }

        return { email: user.email };
      },
    }),
  ],
};

export default NextAuth(authOptions);
