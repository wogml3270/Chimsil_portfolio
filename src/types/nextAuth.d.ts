import NextAuth, { SessionBase } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends SessionBase {
    user: {
      id: string;
      email: string;
    };
  }
}

export default NextAuth;
