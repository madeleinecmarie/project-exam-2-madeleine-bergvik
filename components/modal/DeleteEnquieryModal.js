import { Icon } from "@iconify/react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { BaseURL } from "../../lib/apiUrl";

const DeleteEnqueryModal = ({ setIsDeleteEnquery, JWT, deleteEnquieryId }) => {
  const [enqueryDelete, setEnqueryDelete] = useState(false);
  const router = useRouter();

  async function handleEnquieryDelete() {
    try {
      let res = await axios.delete(`${BaseURL}/enquiries/${deleteEnquieryId}`, {
        headers: {
          Authorization: `Bearer ${JWT}`,
        },
      });
      console.log("res", res);
      setEnqueryDelete(true);
    } catch (err) {
      console.log(err);
      setEnqueryDelete(false);
    } finally {
      setTimeout(() => {
        router.replace(router.asPath);
        setIsDeleteEnquery(false);
      }, 3000);
    }
  }

  return (
    <>
      <div onClick={() => setIsDeleteEnquery(false)} />
      <div className="modal-opacity-bgd">
        <div className="modal deleteModal">
          <button
            className="modal__close-btn"
            onClick={() => setIsDeleteEnquery(false)}
          >
            <Icon icon="ci:close-small" color="#f3ae54" height={46} />
          </button>

          {enqueryDelete ? (
            <div className="modal__content">
              <Icon
                icon="akar-icons:check-box-fill"
                color="#f3ae54"
                height={90}
              />
              <div className="modal__content-text">
                <h3>The enquiery is now deleted</h3>
                <p>
                  The action can not be undone, the enquiery is now gone forever
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
                <h3>You sure you want to delete the enquiery?</h3>
                <p className="modal__bodytext">
                  This means that you will delete all the data and it can not be
                  undone
                </p>
              </div>
              <div className="modal__deleteBtn">
                <button
                  className="formBtn"
                  onClick={() => handleEnquieryDelete()}
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

export default DeleteEnqueryModal;
