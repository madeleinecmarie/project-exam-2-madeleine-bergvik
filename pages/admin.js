import Image from "next/image";
import Head from "next/head";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Tabs } from "@mantine/core";
import { parseCookies } from "nookies";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

// Components
import { Nav } from "../components/layout/Nav";
import AddHotelsModal from "../components/modal/AddHotelsModal";
import DeleteModal from "../components/modal/DeleteModal";
import DeleteEnqueryModal from "../components/modal/DeleteEnquieryModal";
import DeleteMessageModal from "../components/modal/DeleteMessageModal";

// API Call
import { BaseURL } from "../lib/apiUrl";

const Admin = ({ user, hotels, enquiries, messages, JWT }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  // Delete hotels
  const [isDelete, setIsDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();

  // Delete enquries
  const [isDeleteEnquery, setIsDeleteEnquery] = useState(false);
  const [deleteEnquieryId, setDeleteEnquieryId] = useState();

  // Delete messages
  const [isDeleteMessage, setIsDeleteMessage] = useState(false);
  const [deleteMessageId, setDeleteMessageId] = useState();

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
          content="Holidaze admin page - a place where you can read messages and enquiries from customers, add and delete hotels."
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
                            featured_img,
                            price,
                            alt_featured_img,
                          }) => {
                            const myLoader = ({
                              width = 150,
                              quality = 50,
                            }) => {
                              return `${featured_img}?w=${width}&q=${
                                quality || 75
                              }
                              `;
                            };

                            return (
                              <tr key={id} className="admin__tr-body">
                                <td className="admin__td admin__td-id">{id}</td>
                                <td className="admin__td admin__td-img">
                                  <Image
                                    alt={alt_featured_img}
                                    src={featured_img}
                                    height={200}
                                    width={300}
                                    loader={myLoader}
                                    className="admin__img"
                                  ></Image>
                                </td>
                                <td className="admin__td admin__td-name">
                                  {name}
                                </td>
                                <td className="admin__td">{price} NOK</td>
                                <td className="admin__td admin__td-description">
                                  {short_description}
                                </td>
                                <td className="admin__td admin__td-delete">
                                  <Icon
                                    icon="cil:trash"
                                    color="#1d282e"
                                    height={22}
                                    onClick={() => {
                                      setIsDelete(true), setDeleteId(id);
                                    }}
                                  />
                                  {isDelete && (
                                    <DeleteModal
                                      setIsDelete={setIsDelete}
                                      deleteId={deleteId}
                                      JWT={JWT}
                                    />
                                  )}
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
                              <td className="admin__td">{message}</td>
                              <td className="admin__td">
                                <Icon
                                  icon="cil:trash"
                                  color="#1d282e"
                                  height={22}
                                  onClick={() => {
                                    setIsDeleteEnquery(true);
                                    setDeleteEnquieryId(id);
                                  }}
                                />
                                {isDeleteEnquery && (
                                  <DeleteEnqueryModal
                                    setIsDeleteEnquery={setIsDeleteEnquery}
                                    deleteEnquieryId={deleteEnquieryId}
                                    JWT={JWT}
                                  />
                                )}
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
                                  height={22}
                                  onClick={() => {
                                    setIsDeleteMessage(true),
                                      setDeleteMessageId(id);
                                  }}
                                />
                                {isDeleteMessage && (
                                  <DeleteMessageModal
                                    setIsDeleteMessage={setIsDeleteMessage}
                                    deleteMessageId={deleteMessageId}
                                    JWT={JWT}
                                  />
                                )}
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
              {isOpen && <AddHotelsModal JWT={JWT} setIsOpen={setIsOpen} />}
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
      const loginData = await axios.get(BaseURL + "users/me", {
        headers: {
          Authorization: `Bearer ${JWT}`,
        },
      });
      const hotelsData = await axios.get(BaseURL + "hotels");
      const contactData = await axios.get(BaseURL + "messages");
      const enquiryData = await axios.get(BaseURL + "enquiries");

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
