import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID ?? '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.id = token.sub as string;
      // console.log("token", token);
      return session;
    },
  },
});
