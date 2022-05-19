import Head from "next/head";
import { Nav } from "../components/layout/Nav";
import LoginComponent from "../components/login/LoginComponent";

export function LoginPage() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Login in to get access to the Holidaze admin page where you can add new, edit and delete hotels."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="hotels">
        <Nav />
      </header>
      <LoginComponent />
      <div></div>
    </div>
  );
}

// export const getServerSideProps = async (ctx) => {
//   const cookies = nookies.get(ctx);
//   let user = null;

//   if (cookies?.jwt) {
//     try {
//       const { data } = await axios.get("http://localhost:1337/users/me", {
//         headers: {
//           Authorization: `Bearer ${cookies.jwt}`,
//         },
//       });
//       user = data;
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   if (user) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/",
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };

export default LoginPage;
