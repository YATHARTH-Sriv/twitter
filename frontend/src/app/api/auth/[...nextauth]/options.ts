import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID!,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
              }),
        ],
        callbacks: {
          // signIn, session callbacks
          async jwt({ token }) {
            // Persist the OAuth access_token to the token right after signin
            return token
        }
          
        },
    
}