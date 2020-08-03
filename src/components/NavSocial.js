import React from "react";
import { Link } from "gatsby";

const NavSocial = ({ url, icon, name, ...rest }) => (
  <span>
    {url ? (
      <Link to={url} target="blank">
        {icon} {name}
      </Link>
    ) : (
      <a href={rest.href} target="blank">
        {icon} {name}
      </a>
    )}
  </span>
);

export default NavSocial;