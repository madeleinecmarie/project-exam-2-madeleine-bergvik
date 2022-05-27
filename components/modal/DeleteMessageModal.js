import { Icon } from "@iconify/react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { BaseURL } from "../../lib/apiUrl";

const DeleteMessageModal = ({ setIsDeleteMessage, JWT, deleteMessageId }) => {
  const [messageDelete, setMessageDelete] = useState(false);
  const router = useRouter();

  async function handleMessageDelete() {
    try {
      let res = await axios.delete(`${BaseURL}messages/${deleteMessageId}`, {
        headers: {
          Authorization: `Bearer ${JWT}`,
        },
      });
      console.log("res", res);
      setMessageDelete(true);
    } catch (err) {
      console.log(err);
      setMessageDelete(false);
    } finally {
      setTimeout(() => {
        router.replace(router.asPath);
        setIsDeleteMessage(false);
      }, 3000);
    }
  }

  return (
    <>
      <div onClick={() => setIsDeleteMessage(false)} />
      <div className="modal-opacity-bgd">
        <div className="modal deleteModal">
          <button
            className="modal__close-btn"
            onClick={() => setIsDeleteMessage(false)}
          >
            <Icon icon="ci:close-small" color="#f3ae54" height={46} />
          </button>

          {messageDelete ? (
            <div className="modal__content">
              <Icon
                icon="akar-icons:check-box-fill"
                color="#f3ae54"
                height={90}
              />
              <div className="modal__content-text">
                <h3>The message is now deleted</h3>
                <p>
                  The action can not be undone, the message is now gone forever
                </p>
              </div>
            </div>
          ) : (
            <div className="modal__content">
              <div>
                <Icon
                  icon="ant-design:warning-filled"
                  color="#f3ae54"
                  height={90}
                />
              </div>
              <div className="modal__content-text">
                <h3>You sure you want to delete the message?</h3>
                <p className="modal__bodytext">
                  This means that you will delete all the data and it can not be
                  undone
                </p>
              </div>
              <div className="modal__deleteBtn">
                <button
                  className="formBtn"
                  onClick={() => handleMessageDelete()}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DeleteMessageModal;
