import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/works";
import "./scripts/popup-menu";
import "./scripts/parallax-baloon";
import "./scripts/parallax-buddha";
import "./scripts/review";