import React from "react";
import Card from "../cards/card";

const Team = (props) => {
  return (
    <div classNameNameName="width-300 bg-gray-50 flex flex-wrap justify-center gap-8 our-team py-8">
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Meet Our Team
          </h2>
          <p className="text-gray-300">
            Passionate people working together to create unforgettable
            experiences.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 pb-8">
        <Card
          img={props.img}
          user={props.user}
          designation={props.designation}
          location={props.location}
          exp={props.exp}
        />
        <Card
          img={props.img}
          user={props.user}
          designation={props.designation}
          location={props.location}
          exp={props.exp}
        />
        <Card
          img={props.img}
          user={props.user}
          designation={props.designation}
          location={props.location}
          exp={props.exp}
        />
        <Card
          img={props.img}
          user={props.user}
          designation={props.designation}
          location={props.location}
          exp={props.exp}
        />
      </div>
    </div>
  );
};

export default Team;
