import { Nav } from "../components/layout/Nav";
import Image from "next/image";
import Head from "next/head";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Tabs } from "@mantine/core";
import { parseCookies } from "nookies";
import axios from "axios";
import { useRouter } from "next/router";
import AddHotelsModal from "../components/modal/AddHotelsModal";

//API Call
import { BaseURL } from "../lib/apiUrl";

const Admin = ({
  user,
  hotels,
  enquiries,
  messages,
  JWT,
  openModal,
  onClose,
  id,
  openEnquiry,
  openMessage,
}) => {
  // const [hotel, setHotel] = useState();
  // const [message, setMessage] = useState();
  // const [enquiry, setEnquiry] = useState();
  const [activeTab, setActiveTab] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  // const [editModal, setEditModal] = useState(false);
  // const [addModal, setAddModal] = useState(false);
  // const [enquiryModal, setEnquiryModal] = useState(false);
  // const [messageModal, setMessageModal] = useState(false);

  const router = useRouter();
  const { email, username } = user;

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  console.log(hotels);
  return (
    <div>
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
          <div className="admin__logout">
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <button onClick={logout}>Logout</button>
          </div>
          <h1 className="admin__headline">Admin</h1>
        </div>

        <div>
          <div className="tabsWrapper">
            <Tabs
              color="dark"
              variant="pills"
              tabPadding="lg"
              active={activeTab}
              onTabChange={setActiveTab}
            >
              <Tabs.Tab label="Hotels">
                <div className="admin__wrapper">
                  <table className="table-auto admin__table">
                    <thead>
                      <tr className="admin__tr">
                        <th className="admin__th">ID</th>
                        <th className="admin__th">Image</th>
                        <th className="admin__th">Hotels</th>
                        <th className="admin__th">Price</th>
                        <th className="admin__th">Description</th>
                        {/* <th className="admin__th">Edit</th> */}
                        <th className="admin__th">Delete</th>
                      </tr>
                    </thead>
                    <>
                      <tbody>
                        {hotels.map(
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
                            elm,
                          }) => {
                            return (
                              <tr key={id} className="admin__tr-body">
                                <td className="admin__td admin__td-id">{id}</td>
                                <td className="admin__td admin__td-img">
                                  <img
                                    alt={alt_featured_img}
                                    src={featured_img}
                                    height={200}
                                    width={200}
                                    className="admin__img"
                                  ></img>
                                </td>
                                <td className="admin__td admin__td-name">
                                  {name}
                                </td>
                                <td className="admin__td">{price} NOK</td>
                                {/* <td className="admin__td">
                                <Icon
                                  icon="akar-icons:edit"
                                  color="#1d282e"
                                  height={20}
                                  onClick={() => setEditModal(true)}
                                />
                                {editModal && (
                                  <EditModal setEditModal={setEditModal} />
                                )}
                              </td> */}
                                <td className="admin__td admin__td-description">
                                  {short_description}
                                </td>
                                <td className="admin__td admin__td-delete">
                                  <Icon
                                    icon="cil:trash"
                                    color="#1d282e"
                                    height={22}
                                    onClick={() => {
                                      let deleteHotels = confirm(
                                        `Are you 100% sure you want to delete this hotel?`
                                      );
                                      if (deleteHotels) {
                                        async function deleteHotel() {
                                          let response = await axios.delete(
                                            `${BaseURL}/hotels/${id}`,
                                            {
                                              headers: {
                                                Authorization: `Bearer ${JWT}`,
                                              },
                                            }
                                          );
                                          router.replace(router.asPath);
                                          console.log(response);
                                        }
                                        deleteHotel();
                                      }
                                    }}
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
                      {/* <th className="admin__th">Edit</th> */}
                      <th className="admin__th">Message</th>
                      <th className="admin__th">Delete</th>
                    </tr>
                  </thead>
                  <>
                    <tbody>
                      {enquiries.map(
                        ({
                          id,
                          firstname,
                          lastname,
                          email,
                          subject,
                          message,
                        }) => {
                          return (
                            <tr key={id} className="admin__tr-body">
                              <td className="admin__td admin__td-id">{id}</td>
                              <td className="admin__td admin__td-names">
                                {firstname}
                              </td>
                              <td className="admin__td admin__td-names">
                                {lastname}
                              </td>
                              <td className="admin__td admin__td-email">
                                {email}
                              </td>
                              <td className="admin__td">{subject}</td>
                              {/* <td className="admin__td admin__td-edit">
                              <Icon
                                icon="akar-icons:edit"
                                color="#1d282e"
                                height={20}
                              />
                            </td> */}
                              <td className="admin__td">{message}</td>
                              <td className="admin__td">
                                <Icon
                                  icon="cil:trash"
                                  color="#1d282e"
                                  height={20}
                                  onClick={() => {
                                    let deleteEnqueries = confirm(
                                      `Are you 100% sure you want to delete this enquiery?`
                                    );
                                    if (deleteEnqueries) {
                                      async function deleteEnquery() {
                                        let response = await axios.delete(
                                          `${BaseURL}/enquiries/${id}`,
                                          {
                                            headers: {
                                              Authorization: `Bearer ${JWT}`,
                                            },
                                          }
                                        );
                                        router.replace(router.asPath);
                                        console.log(response);
                                      }
                                      deleteEnquery();
                                    }
                                  }}
                                />
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </>
                </table>
              </Tabs.Tab>
              <Tabs.Tab label="Messages">
                <table className="table-auto admin__table">
                  <thead>
                    <tr className="admin__tr">
                      <th className="admin__th">ID</th>
                      <th className="admin__th">Firstname</th>
                      <th className="admin__th">Lastname</th>
                      <th className="admin__th">Email</th>
                      <th className="admin__th">Subject</th>
                      <th className="admin__th">Message</th>
                      {/* <th className="admin__th">Edit</th> */}
                      <th className="admin__th">Delete</th>
                    </tr>
                  </thead>
                  <>
                    <tbody>
                      {messages.map(
                        ({
                          id,
                          firstname,
                          lastname,
                          email,
                          subject,
                          message,
                        }) => {
                          return (
                            <tr key={id} className="admin__tr-body">
                              <td className="admin__td admin__td-id">{id}</td>
                              <td className="admin__td admin__td-names">
                                {firstname}
                              </td>
                              <td className="admin__td admin__td-names">
                                {lastname}
                              </td>
                              <td className="admin__td admin__td-email">
                                {email}
                              </td>
                              <td className="admin__td">{subject}</td>
                              <td className="admin__td">{message}</td>
                              <td className="admin__td">
                                <Icon
                                  icon="cil:trash"
                                  color="#1d282e"
                                  height={25}
                                  onClick={() => {
                                    let deleteMessages = confirm(
                                      `Are you 100% sure you want to delete this message?`
                                    );
                                    if (deleteMessages) {
                                      async function deleteMessage() {
                                        let response = await axios.delete(
                                          `${BaseURL}/messages/${id}`,
                                          {
                                            headers: {
                                              Authorization: `Bearer ${JWT}`,
                                            },
                                          }
                                        );
                                        router.replace(router.asPath);
                                        console.log(response);
                                      }
                                      deleteMessage();
                                    }
                                  }}
                                />
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </>
                </table>
              </Tabs.Tab>
            </Tabs>
            <div className="admin__btn-wrapper">
              <button
                className="admin__addhotel-btn"
                label="Add hotels"
                onClick={() => setIsOpen(true)}
              >
                Add hotel
              </button>
              {isOpen && <AddHotelsModal setIsOpen={setIsOpen} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

export const getServerSideProps = async (ctx) => {
  let user = null;
  let hotels = null;
  let messages = null;
  let enquiries = null;
  const JWT = parseCookies(ctx).jwt;

  if (JWT) {
    try {
      const loginData = await axios.get(BaseURL + "/users/me", {
        headers: {
          Authorization: `Bearer ${JWT}`,
        },
      });
      const hotelsData = await axios.get(BaseURL + "/hotels");
      const contactData = await axios.get(BaseURL + "/messages");
      const enquiryData = await axios.get(BaseURL + "/enquiries");

      user = loginData.data;
      hotels = hotelsData.data;
      messages = contactData.data;
      enquiries = enquiryData.data;
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

  // if (JWT) {
  //   try {
  //     const loginData = await axios.get(BaseURL + "/users/me", {
  //       headers: {
  //         Authorization: `Bearer ${JWT}`,
  //       },
  //     });
  //     const HotelsData = await axios.get(BaseURL + "/hotels");
  //     const contactData = await axios.get(BaseURL + "/messages");
  //     const enquiryData = await axios.get(BaseURL + "/enquiries");

  //     user = loginData.data;
  //     cabins = HotelsData.data;
  //     messages = contactData.data;
  //     enquiries = enquiryData.data;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  return {
    props: {
      user,
      hotels,
      enquiries,
      messages,
      JWT,
    },
  };
};
