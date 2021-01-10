import React from "react";
import Gap from "../../components/atoms/Gap";
import Composs from "../../components/molecules/Composs";
import Sidebar from "../../components/molecules/Sidebar";
import Tweet from "../../components/molecules/Tweet";
import "./Homepage.css";

// AVATAR
import User1 from "../../assets/images/user1.png";
import User2 from "../../assets/images/user2.jpg";
import User3 from "../../assets/images/user3.jpg";
import User4 from "../../assets/images/user4.jpg";
import User5 from "../../assets/images/user5.jpg";

import Header from "../../components/molecules/Header";
import TrendingTopic from "../../components/molecules/TrendingTopic";
import UntukDiikuti from "../../components/molecules/UntukDiikuti";
import Search from "../../components/atoms/Search";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="left">
        <Sidebar beranda />
      </div>
      <div className="middle">
        <Header label="Beranda" />
        <div className="content-middle">
          <Composs />
          <Gap
            height={10}
            backgroundColor="#1b272e"
            borderBottom="1px solid #383e42"
          />
          <div className="tweet">
            <Tweet
              avatar={User1}
              name="manusia super"
              username="ternaklele"
              text="Ngga nikah-nikah, dikatain ngga laku. Buru-buru nikah, digosipin hamil lebih dulu. Udah nikah dan punya anak pun, masih suka direcokin sama komen kok begini kok begitu. Serba salah emang kalo selalu dengerin omongan orang lain tuh."
            />
            <Tweet
              avatar={User2}
              name="Hud"
              username="perogrammer"
              text="Bener, emang bisa, yang digambarin yang enaknya doang. Coba kaya gue waktu rilis, 3 hari kemudian user melonjak dari 100an ke 2000an, masuk deretan trending social media di playstore lebih dalam waktu kurang dari 5 hari, ya kalo ngga modal dari awal mati lah kehilangan momen."
            />
            <Tweet
              avatar={User3}
              name="txt dari HI"
              username="txtdariHI"
              text="Seandainya manusia mampu membangun peradaban di planet selain bumi. Apakah bisa jadi bagian dari subjek HI atau malah muncul disiplin ilmu Hubungan Antariksa/Galaksi?"
            />
            <Tweet
              avatar={User4}
              name="Chef"
              username="thiranosauruss"
              text="Anya geraldine naik sepeda jatoh mulu udah kayak maen downhill domination"
            />
            <Tweet
              avatar={User5}
              name="KARIRFESS | ON"
              username="workfess"
              text="Kr! Kalian pernah ga saking desperate karena udah lama nganggur terus kek iseng apply gitu gataunya dipanggil wawancara. Apply lamaran buat bikin hati lega doang tp gamau ngejalaninnya karena si perusahaan ini juga baru mulai dari 0 otomatis belom tegak banget (cont)"
            />
          </div>
        </div>
      </div>
      <div className="right">
        <Search />
        <Gap height={20} />
        <TrendingTopic />
        <Gap height={20} />

        <UntukDiikuti />
      </div>
    </div>
  );
};

export default Homepage;
