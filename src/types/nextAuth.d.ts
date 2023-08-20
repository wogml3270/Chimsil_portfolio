import { SessionBase, DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session extends SessionBase {
    user: {
      id: string;
      email: string;
    } & DefaultSession['user'];
  }
}
