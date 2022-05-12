import { destroyCookie } from "nookies";

export default async (req, res) => {
  destroyCookie({ res }, "jwt", {
    path: "/",
  });

  res.status(200).end();

  const router = useRouter();
  const {
    user: { email, username },
  } = props;

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };
};
