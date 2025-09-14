import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceSection extends Component {
  render() {
    const theme = this.props.theme;
    
    return (
      <div className="experience-section">
        {this.props.sections.map((section, idx) => {
          return (
            <div key={idx} className="section-container">
              <div 
                className="section-header"
                style={{
                  backgroundColor: theme.headerColor || "#1589b0",
                  color: "white"
                }}
              >
                <h2 className="section-title">{section.title}</h2>
              </div>
              
              <div 
                className="section-content"
                style={{
                  backgroundColor: theme.body || "#ffffff"
                }}
              >
                {section.experiences.map((experience, index) => {
                  return (
                    <ExperienceCard
                      key={index}
                      index={index}
                      totalCards={section.experiences.length}
                      experience={experience}
                      theme={theme}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceSection;