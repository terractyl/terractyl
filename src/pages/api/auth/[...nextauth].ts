import NextAuth from "next-auth/next";
import DiscordProvider from "next-auth/providers/discord";

// prisma
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl}) {
      return `${process.env.NEXTAUTH_URL}/dashboard`
    }
  },

  adapter: PrismaAdapter(prisma)
});
