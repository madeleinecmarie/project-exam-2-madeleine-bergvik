import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import nookies from "nookies";

const LoginComponent = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    identifier: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/login", { ...userData });
      router.push("/Admin");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="identifier"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  let user = null;

  if (cookies?.jwt) {
    try {
      const { data } = await axios.get("http://localhost:1337/users/me", {
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
      });
      user = data;
    } catch (e) {
      console.log(e);
    }
  }

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {
      user,
    },
  };
};
