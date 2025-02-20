
import Header from "./header";
import Footer from "./Footer";
import UserPicture from "./image";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <img
        className="uwu"
        src="https://cdn.discordapp.com/attachments/1065689957525630997/1149555802684788737/KhOwney.gif"
        alt=""
      />
      <UserPicture></UserPicture>
      <Footer></Footer>
    </div>
  );
};

export default Home;
