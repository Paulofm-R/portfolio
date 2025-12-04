import { useParams } from "react-router-dom";
import projectsList from "../data/projects.json";
import { useMemo, useState } from "react";
import { Modal, Button } from "react-bootstrap";

type Visual = {
  type: string;
  itens: string[];
};

type Project = {
  name: string;
  description: string;
  skills: string[];
  visual: Visual;
  logo: string;
  startDate: string;
  endDate: string;
};

type ProjectsList = {
  Acronym: string;
  Name: string;
  Degree: string;
  Course: string;
  ProjectsList: Project[];
};

const Projects = () => {
  const { acronym } = useParams<{ acronym?: string }>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");
  const [visualUrl, setVisualUrl] = useState<string>("");
  const [projectVisual, setProjectVisual] = useState<string[]>([]);
  const [, setCurrentIndex] = useState<number>(-1);
  const [visualType, setVisualType] = useState<string>("");

  const handleOpenModal = (visual: Visual, name: string) => {
    if (!visual) return;
        
    setVisualType(visual.type);
    setProjectVisual(visual.itens);
    setCurrentIndex(0);
    setVisualUrl(visual.itens[0]);
    setProjectName(name);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

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

  // se não passar sigla: mostrar instruções / Lista geral
  const project = useMemo(
    () =>
      acronym
        ? (projectsList as ProjectsList[]).find(
            (proj) => proj.Acronym.toLowerCase() === acronym.toLowerCase()
          )
        : undefined,
    [acronym]
  );

  return (
    <div className="container-fluid" id="projects">
      <h1>{acronym}</h1>
      <p>{project?.Name}</p>
      <p>
        {project?.Degree} in {project?.Course}
      </p>
      {project?.ProjectsList.map((proj, i) => (
        <div
          className="row projectRow"
          key={i}
          onClick={() => proj.visual && handleOpenModal(proj.visual, proj.name)}
        >
          <div className="col-3 d-flex align-items-center justify-content-center">
            {proj.logo != "" && <img src={proj.logo} className="img-thumbnail" alt="projectImg" />}
          </div>
          <div className="col">
            <p className="projectName">{proj.name}</p>
            <p>{proj.description}</p>
            <p>
              {proj.skills.map((skill, idx) => (
                <span key={idx}>{skill} | </span>
              ))}
            </p>
            <p>{proj.startDate} to {proj.endDate}</p>
          </div>
        </div>
      ))}

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
          {visualType == "video" && <video width="100%" controls autoPlay src={visualUrl} />}
          {visualType == "image" && <img src={visualUrl} className="img-fluid" alt="projectVisual" />}
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
    </div>
  );
};

export default Projects;
