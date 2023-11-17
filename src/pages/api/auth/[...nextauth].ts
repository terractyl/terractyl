import NextAuth from "next-auth/next";
import DiscordProvider from "next-auth/providers/discord";
import type { AuthOptions } from "next-auth";

// prisma
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import client from "@/utils/prismaClientConstructor";

// Export the authOptions for next-auth
export const authOptions: AuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      console.log(user)
      if (user) return "/dashboard";

      return true;
    },

    async redirect() {
      return `${process.env.NEXTAUTH_URL}/dashboard`;
    },

    async session({ session }) {
      return session;
    },

    async jwt({ token }) {
      return token;
    },
  },

  // TODO: \/ Below \/
  session: {
    strategy: "database", 
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },

  // A database is optional, but required to persist accounts in a database
  adapter: PrismaAdapter(client),
};

// Exporting the default NextAuth
export default NextAuth(authOptions);
