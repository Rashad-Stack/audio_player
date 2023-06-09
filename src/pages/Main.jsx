import Top from "../components/main";
import Body from "../components/main/body";
import Statusbar from "../components/statusbar";
import Layout from "../utils/Layout";

export default function Main() {
  return (
    <Layout>
      <Top />
      <Statusbar />
      <Body />
    </Layout>
  );
}
