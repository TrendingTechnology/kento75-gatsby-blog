import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="about-wrapper">
            <img
              src={config.userAvatar}
              className="about-img"
              alt={config.userName}
            />
            <CardText>
              <p className="about-text md-body-1">
                {/* 改行コードごとにbrタグを生成 */}
                {config.userDescription.split("\n").map((message, rowNo) => (
                  <span key={rowNo}>
                    {message}
                    <br />
                  </span>
                ))
              }
              </p>
            </CardText>
          </div>
        </Card>
      </div>
    );
  }
}

export default About;
