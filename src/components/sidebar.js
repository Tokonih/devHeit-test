import "../styles/sidebar.css";
import profile from "../assets/img/profile.png";
import sort from "../assets/icons/sort.svg";
import house from "../assets/icons/house.svg";
import speaker from "../assets/icons/speaker.svg";
import chat from "../assets/icons/chat.svg";
import earning from "../assets/icons/earning.svg";
import notification from "../assets/icons/Notification.svg";
import settings from "../assets/icons/settings.svg";
import tech from "../assets/icons/tech.png";
import beauty from "../assets/icons/beauty.png";
import wander from "../assets/icons/wander.png";
import fitness from "../assets/icons/fitness.png";
import home from "../assets/icons/home.png";
import { FaChevronRight } from "react-icons/fa6";
import { useState } from "react";
import CircularProgress from "./circle-progress";

export default function Sidebar({ closeTab, setModal }) {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="sidebar-box">
      <div>
        <div className="micro-flux-container">
          <p className="micro-influx ">Micro-Influx</p>
          <figure>
            <img src={notification} alt="" />
          </figure>
        </div>
        <div className="profile-container">
          <div className="profile-name-and-img">
            <figure className="m-0 p-0">
              <img src={profile} alt="" />
            </figure>
            <div className="profle-name">
              <p className="m-0">Olivia Jacobs</p>
              <p className="m-0">Lifestyle Influncer</p>
            </div>
          </div>
          <figure>
            <img src={sort} alt="" />
          </figure>
        </div>
        <div className="sidebar-btns">
          <button
            onClick={() => {
              setActiveTab("dashboard");
              closeTab();
            }}
            className={`sidebar-btn ${
              activeTab === "dashboard" ? "active" : ""
            }`}
          >
            <img
              src={house}
              alt=""
              className={activeTab === "dashboard" ? "active-img" : ""}
            />
            Dashboard
          </button>

          <button
            onClick={() => {
              setActiveTab("campaigns");
              closeTab();
              setModal();
            }}
            className={activeTab === "campaigns" ? "active" : null}
          >
            <img
              src={speaker}
              alt=""
              className={activeTab === "campaigns" ? "active-img" : null}
            />
            Campaigns
          </button>
          <button
            onClick={() => {
              setActiveTab("messages");
              closeTab();
            }}
            className={activeTab === "messages" ? "active" : null}
          >
            <img
              src={chat}
              alt=""
              className={activeTab === "messages" ? "active-img" : null}
            />
            Messages
          </button>
          <button
            onClick={() => {
              setActiveTab("earnings");
              closeTab();
            }}
            className={activeTab === "earnings" ? "active" : null}
          >
            <img
              src={earning}
              alt=""
              className={activeTab === "earnings" ? "active-img" : null}
            />
            Earning History
          </button>
          <button
            onClick={() => {
              setActiveTab("settings");
              closeTab();
            }}
            className={activeTab === "settings" ? "active" : null}
          >
            <img
              src={settings}
              alt=""
              className={activeTab === "settings" ? "active-img" : null}
            />
            Settings
          </button>
        </div>
      </div>

      <div>
        <div className="profile-logs-container">
          <div>
            <CircularProgress percentage={75} />
          </div>
          <p className="m-0 proflie-log-info"></p>
          <p className="m-0 profile-log-entrance">
            Enhance your chances of selection by completing your profile – a
            fully detailed profile attracts more opportunities!
          </p>
          <button className="profile-complete">Complete my profile</button>
        </div>
      </div>
      <div className=" campaign-shortcuts-container ">
        <div className="campaign-shortcuts">
          Campaign Shortcuts <button>View all</button>
        </div>
        <div className="campaign-shorts">
          <button>
            <img src={tech} alt="" />
            <p> TechGuru Tech Review</p>
            <FaChevronRight />
          </button>
          <button>
            <img src={beauty} alt="" />
            <p> BeautyBlend Makeup...</p>
            <FaChevronRight />
          </button>

          <button>
            <img src={wander} alt="" />
            <p>Wanderlust Adventure...</p>
            <FaChevronRight />
          </button>
          <button>
            <img src={fitness} alt="" />
            <p> Fitness Fustion Work...</p>
            <FaChevronRight />
          </button>
          <button>
            <img src={home} alt="" />
            <p>Home Harmony DIY C...</p>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
