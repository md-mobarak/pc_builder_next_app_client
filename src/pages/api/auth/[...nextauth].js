import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Providers.Credentials({
    //   credentials: {
    //     username: { label: "Email", type: "text" },
    //     password: {  label: "Password", type: "password" }
    //   },
    //   authorize: async (credentials) => {
    //     // Add your custom authentication logic here
    //     const { username, password } = credentials;
    //     if (username === 'user@example.com' && password === 'password') {
    //       return Promise.resolve({ id: 1, name: 'User', email: 'user@example.com' });
    //     } else {
    //       return Promise.resolve(null);
    //     }
    //   },
    // }),


  ],
  pages: {
    signIn:'/login'
  }
};

export default NextAuth(authOptions);
