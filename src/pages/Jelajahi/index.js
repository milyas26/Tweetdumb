import React from "react";
import Gap from "../../components/atoms/Gap";
import Sidebar from "../../components/molecules/Sidebar";

import TrendItem from "../../components/atoms/TrendItem";
import UntukDiikuti from "../../components/molecules/UntukDiikuti";
import Search from "../../components/atoms/Search";
import "./Jelajahi.css";

const Jelajahi = () => {
  return (
    <div className="homepage jelajahi-page">
      <div className="left">
        <Sidebar jelajahi />
      </div>
      <div className="middle">
        <div className="search-wrapper">
          <Search />
        </div>
        <div className="title">
          <p>Trend Untuk Anda</p>
        </div>

        <div className="trend-items">
          <TrendItem label="Muhammad Ibnu" />
          <TrendItem label="Sriwijaya Air" />
          <TrendItem label="Dumbways Indonesia" />
          <TrendItem label="React Js" />
          <TrendItem label="Fullstack Developer" />
          <TrendItem label="#TeamCSSMurni" />
          <TrendItem label="#BuburTidakDiaduk" />
          <TrendItem label="Cintai Anya" />
        </div>

        <div className="more">
          <p>Tampilkan lainnya</p>
        </div>
      </div>
      <div className="right">
        <Gap height={10} />
        <UntukDiikuti />
      </div>
    </div>
  );
};

export default Jelajahi;
