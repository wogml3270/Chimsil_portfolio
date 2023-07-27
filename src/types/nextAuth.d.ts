import NextAuth, { SessionBase } from 'next-auth';

declare module 'next-auth' {
  
  interface Session extends SessionBase {
    user: {
      id: string;
      email: string;
    };
  }
}

export default NextAuth;
