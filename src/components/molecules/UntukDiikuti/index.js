import React from "react";
import FollowItem from "../../atoms/FollowItem";
import User1 from "../../../assets/images/user1.png";
import User2 from "../../../assets/images/user2.jpg";

const UntukDiikuti = () => {
  return (
    <div className="trend">
      <div className="trend-header">
        <div className="trend-label">Untuk Diikuti</div>
      </div>
      <div className="trending-items">
        <FollowItem img={User1} name="KARIRFESS" username="karirfess" />
        <FollowItem img={User2} name="Kila" username="cilokciliq" />
      </div>
      <div className="more">
        <span>Tampilkan lebih banyak</span>
      </div>
    </div>
  );
};

export default UntukDiikuti;
