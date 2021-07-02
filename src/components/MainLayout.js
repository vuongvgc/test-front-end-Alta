import Header from "./Header";
import Footer from "./Footer";
function MainLayout(props) {
  return (
    <>
      <Header />
      <div className="ui container">{props.children}</div>
      <Footer />
    </>
  );
}
export default MainLayout;
