import { DefaultSession } from "next-auth";

type UserRole = string | null;

declare module "next-auth" {
  interface User {
    id: string;
    role?: UserRole;
  }

  interface Session {
    user: {
      id: string;
      role?: UserRole;
    } & DefaultSession["user"];
  }

  interface AdapterUser {
    id: string;
    role?: UserRole;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role?: UserRole;
  }
}
