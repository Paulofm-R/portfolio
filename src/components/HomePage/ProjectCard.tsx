import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

type Props = {
  title: string;
  descrition: string;
  date: string;
  skillsList: string[];
  logo: string;
  visual: string[];
};

const ProjectCard = ({
  title,
  descrition,
  date,
  skillsList,
  logo,
  visual,
}: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");
  const [visualUrl, setVisualUrl] = useState<string>("");
  const [projectVisual, setProjectVisual] = useState<string[]>([]);
  const [, setCurrentIndex] = useState<number>(-1);

  const handleOpenModal = (visual: string[], name: string) => {
    if (!visual) return;

    setProjectVisual(visual);
    setVisualUrl(visual[0]);
    setCurrentIndex(0);
    setProjectName(name);
    setShowModal(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % projectVisual.length;
      setVisualUrl(projectVisual[next]);
      return next;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const prevIndex =
        (prev - 1 + projectVisual.length) % projectVisual.length;
      setVisualUrl(projectVisual[prevIndex]);
      return prevIndex;
    });
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="col-3 ProjectCard" onClick={() => handleOpenModal(visual, title)}>
        <p className="ProjectCardTitle">{title}</p>
        <div className="ProjectCardImg">
          <img
            src={logo}
            className="img-thumbnail"
            alt="projectImg"
          />
        </div>
        <p>{descrition}</p>
        <p>
          {skillsList.map((skill, idx) => (
            <span key={idx}>{skill} | </span>
          ))}
        </p>
        <p>{date}</p>
      </div>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        centered
        // aplica classes aos elementos internos sem quebrar o markup do bootstrap
        dialogClassName="custom-dialog" // para .modal-dialog
        contentClassName="custom-modal-bg" // para .modal-content
        backdropClassName="custom-backdrop" // para o backdrop se quiseres
      >
        <Modal.Header closeButton>
          <Modal.Title className="custom-modal-title">
            {projectName}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex justify-content-center">
          <video width="100%" controls autoPlay src={visualUrl} />
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between custom-modal-footer">
          <Button
            className="btn-primary"
            onClick={handlePrev}
            disabled={projectVisual.length <= 1}
          >
            ◀ Previous
          </Button>
          <Button
            className="btn-primary"
            onClick={handleNext}
            disabled={projectVisual.length <= 1}
          >
            Next ▶
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectCard;
