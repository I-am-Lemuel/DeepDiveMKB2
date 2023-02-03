import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Method() {
  const router = useRouter();
  const { method } = router.query;
  const { t } = useTranslation("methods");

  return (
    <div className="d-flex h-screen">
      <div className="w-50">
        <button onClick={() => router.push("/products")}>Back</button> 
        <h1 className="display-1 fw-bold">{t(`${method}.title`)}</h1>
        <h4>{t(`${method}.description`)}</h4> <br></br>
        <h5>Cost paying method</h5>
        <small className="fw-bold">{t(`${method}.price`)} </small>
      </div>
      <div className="w-50 d-flex justify-content-center">
        <div className="w-50 d-flex  justify-content-center flex-column align-items-center" id={t(`${method}`)} >
          <h1>{method}</h1>
          <Image  
            src={`/images/${method}.svg`}
            width={200}
            height={200}
            alt={t(`${method}.title`)}
          />
        </div>
      </div>
    </div>
  );
}
