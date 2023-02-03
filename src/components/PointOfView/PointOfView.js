import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { Image } from "react-bootstrap";

export const PointOfView = () => {
  const { t } = useTranslation("home");
  return (
    <>
      <div className="container mt-5 justify-content-center mb-5">
        <div>
          <h2 className="text-center fw-bold mb-4">{t("pov")}</h2>
          {/* 3 Cards */}
          <div className="row row-cols-1 row-cols-md-3 g-3">
            <div className="col">
              <div className="card h-100 shadow-sm w-75 mx-auto pov-card-h">
                <Image
                  src="/images/transactions.png"
                  className="card-img-top"
                  alt="Transactions Image"
                  height={180}
                />
                <div className="card-body">
                  <h3 className="card-title fw-semibold">
                    {t("reducing_cost")}
                  </h3>
                  <p className="card-text">{t("reducing_cost_text")}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm w-75 mx-auto pov-card-h">
                <Image
                  src="/images/payment_method.png"
                  className="card-img-top"
                  alt="Payment method Image"
                  height={180}
                />
                <div className="card-body">
                  <h3 className="card-title fw-semibold">
                    {t("payment_ways")}
                  </h3>
                  <p className="card-text">{t("payment_ways_text")}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm w-75 mx-auto pov-card-h">
                <Image
                  src="/images/handshake.png"
                  className="card-img-top"
                  alt="Handshake Image"
                  height={180}
                />
                <div className="card-body">
                  <h3 className="card-title fw-semibold">{t("win_win")}</h3>
                  <p className="card-text">{t("win_win_text")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* Vision*/}
        <div className="row mt-5">
          <div className="col-md-6">
            <Image
              src="/images/transaction.png"
              className="card-img-top rounded rounded-4 shadow-sm "
              alt="Transactions Image"
              height={400}
            />
          </div>
          <div className="col-md-6 mt-4 d-flex row align-content-center">
            <h4 className="fw-semibold text-secondary">{t("what_we_do")}</h4>
            <h2 className="fw-semibold">{t("what_we_do_title")}</h2>
            <p className="mt-4">{t("what_we_do_text_1")}</p>
            <p className="">{t("what_we_do_text_2")}</p>
          </div>
        </div>
        {/* Call to action */}
        <div className="container">
          <div className="justify-content-end row mt-5 bg-secondary rounded rounded-5 shadow-sm mb-5">
            <div className="w-50">
              <h2 className="fw-semibold text-white mt-3">{t("cta_title")}</h2>
              <p className="text-white mt-3 mb-3">{t("cta_text_1")}</p>
              <p className="text-white mt-3 mb-3">{t("cta_text_2")}</p>
            </div>
            <div className="col-md-6 row justify-content-end p-2">
              <Link className="w-75 my-auto" href="/contact">
                <button className="btn btn-light ms-5 rounded-5 w-75 me-5 fw-semibold fs-4 px-3 py-3">
                  {t("cta_button")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
