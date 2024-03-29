export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      console.log("user :", user);
      if (user) {
        token.id = user.id;
        token.isAdmin = user && user._doc && user._doc.isAdmin || false;
      }
      console.log("token :", token);
      return token;
    },
    async session({ session, token }) {
      console.log("start session :", session);
      console.log("session token :", token);
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      console.log("end session :", session);
      return session;
    },
    authorized({ auth, request }) {
      console.log("auth : ", auth);
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD

      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE

      if (isOnBlogPage && !user) {
        return false;
      }

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
