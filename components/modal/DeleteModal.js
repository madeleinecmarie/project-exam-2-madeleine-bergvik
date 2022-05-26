import { Icon } from "@iconify/react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { BaseURL } from "../../lib/apiUrl";

const DeleteModal = ({ setIsDelete, deleteId, JWT }) => {
  const [didDelete, setDidDelete] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    try {
      let res = await axios.delete(`${BaseURL}/hotels/${deleteId}`, {
        headers: {
          Authorization: `Bearer ${JWT}`,
        },
      });
      console.log("res", res);
      setDidDelete(true);
    } catch (err) {
      console.log(err);
      setDidDelete(false);
    } finally {
      setTimeout(() => {
        router.replace(router.asPath);
        setIsDelete(false);
      }, 3000);
    }
  }

  return (
    <>
      <div onClick={() => setIsDelete(false)} />
      <div className="modal-opacity-bgd">
        <div className="modal deleteModal">
          <button
            className="modal__close-btn"
            onClick={() => setIsDelete(false)}
          >
            <Icon icon="ci:close-small" color="#f3ae54" height={46} />
          </button>

          {didDelete ? (
            <div className="modal__content">
              <Icon
                icon="akar-icons:check-box-fill"
                color="#f3ae54"
                height={90}
              />
              <div className="modal__content-text">
                <h3>The hotel is now deleted</h3>
                <p>
                  The action can not be undone, the hotel is now gone forever
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
                <h3>You sure you want to delete the hotel?</h3>
                <p className="modal__bodytext">
                  This means that you will delete all the data and it can not be
                  undone
                </p>
              </div>
              <div className="modal__deleteBtn">
                <button className="formBtn" onClick={() => handleDelete()}>
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

export default DeleteModal;
