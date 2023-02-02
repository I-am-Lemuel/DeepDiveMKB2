import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

export default function Method() {
  const router = useRouter();
  const { method } = router.query;
  const { t } = useTranslation("methods");

  return (
    <div>
      <div>
        <button onClick={() => router.push("/products")}>Back</button>
        <h1>{t(`${method}.title`)}</h1>
        <p>{t(`${method}.description`)}</p>
      </div>
      <div>
        {/* <Image
          src="/images/${method}.jpg"`}
          width={500}
          height={500}
          alt={t(`${method}.title`)}
        /> */}
      </div>
    </div>
  );
}
