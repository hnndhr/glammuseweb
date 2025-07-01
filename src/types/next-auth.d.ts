// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      subscriptionPlan: string;
      profilePicture: string;
      name: string;
      email: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    username: string;
    subscriptionPlan: string;
    profilePicture: string;
  }
}
