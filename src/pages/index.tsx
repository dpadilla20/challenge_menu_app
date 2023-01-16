import HomeModule from "@/app/modules/home";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { data } = props;
  return <HomeModule data={data} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //   const props = await getHomeModuleProps(context)
  const domain = "http://localhost:3000";
  const url = "/api/navbar";
  const res = await fetch(`${domain}${url}`);

  return {
    props: {
      data: await res.json(),
    },
  };
};
