import { useRouter } from "next/router";
import DetailLayout from "../../components/DetailLayout";

import Layout from "../../components/Layout";

export default function Checkout() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <DetailLayout id={id} />
    </Layout>
  );
}
