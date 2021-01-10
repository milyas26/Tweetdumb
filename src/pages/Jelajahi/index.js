import React from "react";
import Gap from "../../components/atoms/Gap";
import Sidebar from "../../components/molecules/Sidebar";

// AVATAR
import TrendItem from "../../components/atoms/TrendItem";
import Header from "../../components/molecules/Header";
import TrendingTopic from "../../components/molecules/TrendingTopic";
import Photo from "../../components/atoms/Photo";
import RelatedPerson from "../../components/molecules/RelatedPerson";
import UntukDiikuti from "../../components/molecules/UntukDiikuti";
import Search from "../../components/atoms/Search";

const Jelajahi = () => {
  return (
    <div className="homepage detail-page">
      <div className="left">
        <Sidebar jelajahi />
      </div>
      <div className="middle">
        <Header label="Tweet" isIcon />
      </div>
      <div className="right">
        <Gap height={10} />
        <UntukDiikuti />
      </div>
    </div>
  );
};

export default Jelajahi;
