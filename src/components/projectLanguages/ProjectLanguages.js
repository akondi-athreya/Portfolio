import React, { Component } from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class ProjectLanguages extends Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons-languages">
            {this.props.logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.name}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.name}</strong>
                    </Tooltip>
                  }
                >
                  <li
                    className="software-skill-inline-languages"
                    name={logo.skillName}
                  >
                    {/* Use your own SVG icon by providing svgPath in logo object */}
                    {logo.svgPath ? (<img
                      src={logo.svgPath}
                      alt={logo.name}
                      className="my-custom-svg"
                      style={{ width: 50, height: 50 }}
                    />) : (
                    <span
                      className="iconify"
                      data-icon={logo.iconifyClass}
                      data-inline="false"
                    ></span>
                    )}
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectLanguages;
