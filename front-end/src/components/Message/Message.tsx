import React, { useContext, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Modal from "react-bootstrap/Modal";
import LoginForm from "../Form/LoginForm";
import RegisterForm from "../Form/RegisterForm";
import { AuthContext } from "../../context/auth-context";
import { setModal } from "../../features/GameSlice";
import { getAllScoreDispatch } from "../../features/PlayerSlice";
import classes from "./message.module.css";

const Message: React.FC = () => {
  const dispatch = useAppDispatch();
  const { showModal } = useAppSelector((state) => state.game);
  const { currentUser } = useContext(AuthContext);
  const [scoreSaved, setScoreSaved] = useState(false);

  const handleClose = () => dispatch(setModal(false));

  const handleSaveScore = () => {
    if (currentUser) {
      dispatch(getAllScoreDispatch());
    }
    setScoreSaved(true);
  };

  return currentUser ? (
    <div className={classes.modal_container}>
      <Modal show={showModal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>You did great job! </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {scoreSaved
            ? "Your score has been saved"
            : "Please save your score to see your position in the Leaderboard"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleSaveScore}>
            {scoreSaved ? "Score Saved" : "Save"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  ) : (
    <div className={classes.modal_container}>
      <Modal show={showModal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>You did great job! </Modal.Title>
        </Modal.Header>
        <Modal.Body>Login or register to join the leaderboard:</Modal.Body>
        <Modal.Footer>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Login">
              <LoginForm />
            </Tab>
            <Tab eventKey="profile" title="Register">
              {" "}
              <RegisterForm />
            </Tab>
          </Tabs>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Message;
