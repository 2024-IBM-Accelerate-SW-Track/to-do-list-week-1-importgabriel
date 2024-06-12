import React, { Component } from 'react';

import "./About.css";

import profilePic from "../assets/profile_pic_name.jpg";


export default class About extends Component {
  render() {
    return (
      <div>
      <div className="split left">
        <div className="centered">
          <img
            className="profile_image"
            src={profilePic}
            alt="Profile Pic"
          />
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Miguel Gabriel Gutierrez</div>
          <div className="brief_description">
            Aspiring Software Engineer
          </div>
        </div>
      </div>
    </div>
    )
  }
}