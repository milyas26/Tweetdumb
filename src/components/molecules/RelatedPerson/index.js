import React from "react";
import "./RelatedPerson.css";
import FollowItem from "../../atoms/FollowItem";

import User1 from "../../../assets/images/user1.png";

const RelatedPerson = () => {
  return (
    <div className="related-person">
      <p>Orang yang Relevan</p>
      <FollowItem
        img={User1}
        name="Alexander Thian"
        username="amrazing"
        isFull
      />
    </div>
  );
};

export default RelatedPerson;
