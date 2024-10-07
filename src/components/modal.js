import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/modal.css";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import arrowBack from "../assets/icons/arrow-back.svg";
import { Alert } from "react-bootstrap";
import { useCampaigns } from "./campaign-context";
import insta from "../assets/icons/g-insta.svg";
import tiktok from "../assets/icons/g-tiktok.svg";
import youtube from "../assets/icons/g-youtube.svg";
import twitter from "../assets/icons/g-twitter.svg";
import facebook from "../assets/icons/g-facebook.svg";

export default function CampaignModal({ show, closeModal }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const { campaigns, setCampaigns } = useCampaigns();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 800);
  const [socials, setSocials] = useState([
    { image: insta },
    { image: tiktok },
    { image: youtube },
    { image: facebook },
  ]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 425);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [categories, setCategories] = useState([
    { id: "1", cat: "Entertainment" },
    { id: "2", cat: "Movie" },
    { id: "3", cat: "Game" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !type || !category || !description) {
      setError("All fields are required!");
      return;
    }

    setError("");

    const newCampaign = {
      name: name,
      type: type,
      category: category,
      description: description,
    };

    setCampaigns((prevCampaigns) => [...prevCampaigns, newCampaign]);

    closeModal();
    setName("");
    setType("");
    setCategory("");
    setDescription("");
  };
  return (
    <Modal
      show={show}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdropClassName="custom-backdrop"
    >
      <Modal.Header closeButton={isDesktop}>
        <Modal.Title id="contained-modal-title-vcenter">
          <p className="create-campain-heading m-0"> Create Campaign</p>

          <p className="m-0 mobile-modal-head" onClick={closeModal}>
            {" "}
            <img src={arrowBack} alt="" />
            Create Campaign{" "}
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Campaign Name</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter your campaign title here"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Campaign Type</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter your campaign type here"
              onChange={(e) => setType(e.target.value)}
              value={type}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
            <Form.Label>Campaign Category</Form.Label>
            <Form.Select
              size="lg"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select</option>
              {categories &&
                categories.map((cat) => (
                  <option value={cat.cat} key={cat.id}>
                    {cat.cat}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Campaign Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter your campaign description here"
              rows={5}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
            <Form.Label>Select preferred channels</Form.Label>
            <div className="modal-soclals">
              {socials &&
                socials.map((img) => (
                  <button>
                    <img src={img.image} alt="" />
                  </button>
                ))}
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Campaign Budget</Form.Label>
            <Form.Control
              size="lg"
              type="number"
              placeholder="Enter your campaign budget"
            />
          </Form.Group>
          <div className="create-campaign-btn">
            <Button className="create-campaign" type="submit">
              Create New Campaign
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
