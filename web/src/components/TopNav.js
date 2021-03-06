import React from "react";
import { Link } from "react-router-dom";

export default function TopNav({ nav }) {
  return (
    <div className="nav nav-horiz">
      <div className="content">
        <ul className="d-flex align-items-center space-around width-100 m-0">
          <li className={`cursor-pointer p-0 ph-1 height-100 d-flex align-items-center${nav === "search" ? " border-bottom-1" : ""}`}>
          </li>
          <li className={`cursor-pointer p-0 ph-1 height-100 d-flex align-items-center${nav === "downloads" ? " border-bottom-1" : ""}`}>
            <Link to="/download" className="height-100 d-flex align-items-center">
              <i className="h2 m-0 d-flex align-items-center">
                <ion-icon name="magnet" />
              </i>
              <span className="tablet-desktop-only ml-05">Leeching Page</span>
            </Link>
          </li>
          <li className={`cursor-pointer p-0 ph-1 height-100 d-flex align-items-center${nav === "drive" ? " border-bottom-1" : ""}`}>
            <Link to="/drive" className="height-100 d-flex align-items-center">
              <i className="h2 m-0 d-flex align-items-center">
                <ion-icon name="folder" />
              </i>
              <span className="tablet-desktop-only ml-05">Index Page</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
