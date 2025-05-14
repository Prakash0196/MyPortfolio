// components/ServiceCard.jsx
import React from "react";
import { Icons } from "./Icons";

export const ServiceCard = ({ icon, title, description, animation }) => {
  return (
    <div className="col-lg-4 mb-3 scale">
      <div className="card text-center py-3" data-aos={animation}>
        <div className="card-body">
          <div className="circle">
            <span>
              <Icons icon={icon} />
            </span>
          </div>
          <h4 className="font-weight-bold pb-3">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
