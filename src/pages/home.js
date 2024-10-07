import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import "../styles/home.css";
import message from "../assets/icons/Message.svg";
import profileShare from "../assets/icons/profile-share.svg";
import grid from "../assets/icons/grid.svg";
import list from "../assets/icons/list.svg";
import chevronDown from "../assets/icons/chevron-down.svg";
import Notification from "../assets/icons/Notification.svg";
import share from "../assets/icons/share.svg";
import humburger from "../assets/icons/humburger.png";
import mobileProfile from "../assets/icons/mobile-profile.png";
import profile from "../assets/img/profile.png";
import CampaignCard from "../components/campain-card";
import CampaignModal from "../components/modal";
import { useCampaigns } from "../components/campaign-context";
import { RiSearch2Line } from "react-icons/ri";

export default function Home() {
  const [modalShow, setModalShow] = React.useState(false);
  const { campaigns, setCampaigns } = useCampaigns();
  const [showSideBar, setShowSideBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const claseTab = () => {
    if (window.innerWidth <= 425) {
      setShowSideBar(false);
    }
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };

  return (
    <div>
      <div className="mobile-sidebar">
        {showSideBar && (
          <Sidebar
            closeTab={window.innerWidth <= 425 ? claseTab : () => {}}
            setModal={() => setModalShow(true)}
          />
        )}
      </div>

      <div className="home-container">
        <div className="sidebar-container">
          <Sidebar
            closeTab={window.innerWidth <= 425 ? claseTab : () => {}}
            setModal={() => setModalShow(true)}
          />
        </div>
        <div className="main-container">
          <div className="mobile-profile-header">
            <figure>
              <img src={mobileProfile} alt="" />
            </figure>

            <p className="m-0">Micro Influx</p>
            <button onClick={() => setShowSideBar(true)}>
              <img src={humburger} alt="" />
            </button>
          </div>
          <div className="dash-heading">
            <p>Dashboard</p>
            <div className="dash-heading-right">
              <button onClick={() => setModalShow(true)}>
                <span>+</span> Create a New Campaign
              </button>
              <button>
                <figure>
                  <img src={message} alt="" />
                </figure>
              </button>
              <button>
                <figure>
                  <img src={Notification} alt="" />
                </figure>
              </button>
            </div>
          </div>

          <div className="dashboard-financials">
            <div className="financial-overview">
              <div className="financial-heading">
                <p>Financial Overview</p>
                <p>
                  View all campaigns <img src={share} alt="" />
                </p>
              </div>

              <div className="financial-details">
                <div className="financial-detail">
                  <p>Total Income</p>
                  <p>$62,932</p>
                </div>
                <div className="financial-detail">
                  <p>Funds In Escrow</p>
                  <p>$62,231</p>
                </div>
                <div className="financial-detail">
                  <p>Ave. Income Monthly</p>
                  <p>$3,542</p>
                </div>
              </div>

              <div>
                <div className="financial-summary">
                  <p>January Summary: </p>
                  <p>
                    <span>Total Fund in Escrow</span> • $350
                  </p>
                  <p>
                    <span>Total Income</span> • $ 850
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="profile-info-container">
                <div className="profile-heading">
                  <p>Profile Information</p>
                  <img src={profileShare} alt="" />
                </div>
                <div className="profle-info-box">
                  <div className="profile-info-img-box">
                    <figure>
                      <img src={profile} alt="" />
                    </figure>
                    <div>
                      <p>Olivia Jacobs Jacobs</p>
                      <div className="profile-range-box">
                        <div className="proflie-range">
                          <div className="proflie-range-percent"></div>
                        </div>
                        <p>15%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="complete-profile">
                    Complete your profile with details showcasing your skills
                    and personality. Stand out and attract more opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="explore-camp">
              <p>Explore Campaigns</p>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search Description"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button>
                  <RiSearch2Line />
                </button>
              </div>
            </div>
          </div>

          <div className="search-result-container">
            <p>
              Search results: <span>432 Blog post</span> campaigns
            </p>
            <div className="search-result-btns">
              <p className="m-0">Sort by:</p>
              <div className="search-result-sort">
                <div className="select-category">
                  Category <img src={chevronDown} alt="" />
                </div>
                <div className="d-flex items-center card-view">
                  <button>
                    <img src={grid} alt="" />
                  </button>
                  <button>
                    <img src={list} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <CampaignCard data={filteredCampaigns} />
          </div>
        </div>
      </div>

      <CampaignModal show={modalShow} closeModal={handleCloseModal} />
    </div>
  );
}
