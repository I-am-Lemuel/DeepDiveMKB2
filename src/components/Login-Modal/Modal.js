import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";

export default function LoginModal() {
  const { t } = useTranslation("common");
  //make a function to open and close the modal with useState
  const [showModal, setShowModal] = useState(false);

  function openAndCloseModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <button
        onClick={openAndCloseModal}
        className={
          showModal
            ? "btn btn-secondary text-dark rounded-pill shadow-sm login-btn"
            : "btn btn-secondary text-white rounded-pill shadow-sm login-btn"
        }
      >
        Login
      </button>
      {showModal ? (
        <div className="custom-modal-backdrop">
          <div className="custom-modal">
            <button onClick={openAndCloseModal} className="close-btn">
              X
            </button>
            <form>
              {" "}
              <br></br> <br></br>
              <div class="form-outline mb-4">
                <input type="email" id="form2Example1" class="form-control" />
                <label class="form-label" for="form2Example1">
                  {t("modal_mail")}
                </label>
              </div>
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example2"
                  class="form-control"
                />
                <label class="form-label" for="form2Example2">
                  {t("modal_password")}
                </label>
              </div>
              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                    />
                    <label class="form-check-label" for="form2Example31">
                      {" "}
                      {t("modal_remember")}{" "}
                    </label>
                  </div>
                </div>

                <div class="col">
                  <a href="#!">{t("modal_forgot")}</a>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-secondary  mb-4 "
                style={StyleSheet.button}
              >
                Log in
              </button>
              <div class="text-center">
                <p>
                  {t("modal_notamember")} <a href="#!">{t("modal_signup")}</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
