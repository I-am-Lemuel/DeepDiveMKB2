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
        <h1>{t(`${method}.title`)}</h1>
        <p>{t(`${method}.description`)}</p>
      </div>
      <div className="w-50 d-flex justify-content-center">
        <div className="w-50 bg-dark d-flex justify-content-center flex-column align-items-center">
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
