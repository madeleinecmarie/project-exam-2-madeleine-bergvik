import { Nav } from "../components/layout/Nav";
import Image from "next/image";
import Head from "next/head";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Tabs } from "@mantine/core";
import { parseCookies } from "nookies";

//API Call
import { getHotels } from "../lib/apiCall";
import { BaseURL } from "../lib/apiUrl";

export const getStaticProps = async () => {
  const res = await fetch(BaseURL + "/hotels");
  const data = await res.json();

  return {
    props: { hotel: data },
  };
};

const Admin = ({ hotel, id }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div key={id}>
      <Head>
        <title>Admin - Holidaze</title>
        <meta
          name="description"
          content="Holidaze admin page - a place where you can read messages and enquiries from customers, add, deleted and edit hotels. "
        />
      </Head>
      <header className="admin-header">
        <Nav />
      </header>

      <div className="admin">
        <div className="admin__headline-wrapper">
          <h1 className="admin__headline">Admin</h1>
        </div>

        <div>
          <Tabs
            color="dark"
            variant="pills"
            tabPadding="lg"
            active={activeTab}
            onTabChange={setActiveTab}
          >
            <Tabs.Tab label="Hotels">
              <div key={id} className="admin__wrapper">
                <table className="table-auto admin__table">
                  <thead>
                    <tr className="admin__tr">
                      <th className="admin__th">ID</th>
                      <th className="admin__th">Image</th>
                      <th className="admin__th">Hotels</th>
                      <th className="admin__th">Price</th>
                      <th className="admin__th">Edit</th>
                      <th className="admin__th">Delete</th>
                    </tr>
                  </thead>
                  <>
                    <tbody>
                      {hotel.map(
                        ({
                          id,
                          name,
                          short_description,
                          stars,
                          featured_img,
                          price,
                          amenities,
                          free_cancellation,
                          location,
                          alt_featured_img,
                        }) => {
                          return (
                            <tr key={id}>
                              <td className="admin__td">{id}</td>
                              <td className="admin__td">
                                <img
                                  alt={alt_featured_img}
                                  src={featured_img}
                                  height={120}
                                  width={120}
                                  className="admin__img"
                                ></img>
                              </td>
                              <td className="admin__td">{name}</td>
                              <td className="admin__td">{price}</td>
                              <td className="admin__td">
                                <Icon
                                  icon="akar-icons:edit"
                                  color="#1d282e"
                                  height={20}
                                />
                              </td>
                              <td className="admin__td">
                                <Icon
                                  icon="cil:trash"
                                  color="#1d282e"
                                  height={20}
                                />
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </>
                </table>
              </div>
            </Tabs.Tab>
            <Tabs.Tab label="Enquiries">
              <table className="table-auto admin__table">
                <thead>
                  <tr className="admin__tr">
                    <th className="admin__th">ID</th>
                    <th className="admin__th">Firstname</th>
                    <th className="admin__th">Lastname</th>
                    <th className="admin__th">Email</th>
                    <th className="admin__th">Subject</th>
                    <th className="admin__th">Edit</th>
                    <th className="admin__th">Delete</th>
                  </tr>
                </thead>
                <>
                  <tbody>
                    <tr key={id}>
                      <td className="admin__td"></td>
                      <td className="admin__td"></td>
                      <td className="admin__td"></td>
                      <td className="admin__td"></td>
                      <td className="admin__td"></td>
                      <td className="admin__td"></td>
                    </tr>
                  </tbody>
                </>
              </table>
            </Tabs.Tab>
            <Tabs.Tab label="Messages">Messages tab content</Tabs.Tab>
            <Tabs.Tab label="Add hotels"></Tabs.Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Admin;

// export const getServerSideProps = async (ctx) => {
//   let user = null;
//   let hotels = null;
//   let messages = null;
//   let enquiries = null;
//   const JWT = parseCookies(ctx).jwt;

//   if (JWT) {
//     try {
//       const loginData = await axios.get(BaseURL + "/users/me", {
//         headers: {
//           Authorization: `Bearer ${JWT}`,
//         },
//       });
//       const HotelsData = await axios.get(BaseURL + "/hotels");
//       const contactData = await axios.get(BaseURL + "/messages");
//       const enquiryData = await axios.get(BaseURL + "/enquiries/");

//       user = loginData.data;
//       cabins = HotelsData.data;
//       messages = contactData.data;
//       enquiries = enquiryData.data;
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   if (!user) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/",
//       },
//     };
//   }

//   return {
//     props: {
//       user,
//       hotels,
//       enquiries,
//       messages,
//       JWT,
//     },
//   };
// };
