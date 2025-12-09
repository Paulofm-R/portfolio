const Contact = () => {
  return (
    <div className="container-fluid" id="contact">
      <p id="contactTitle">Contact</p>
      <div className="row justify-content-around">
        <div className="col-4 align-self-center" id="contactText">
          <p>
            If you have any questions or project opportunities, please feel free
            to contact me!
          </p>
          <p>Response time may take up to 48 hours.</p>
        </div>
        <div className="col-4">
          <div className="ConctactCard">
            <i className="bi bi-envelope-at-fill"></i>
            <a
              href="mailto:@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              paulofiliperodrigues@outlook.pt
            </a>
          </div>
          <div className="ConctactCard">
            <i className="bi bi-linkedin"></i>
            <a
              href="https://linkedin.com/in/paulo-rodrigues-661414229"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/paulo-rodrigues-661414229
            </a>
          </div>
          <div className="ConctactCard">
            <i className="bi bi-geo-alt-fill"></i>
            <span>Porto, Portugal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
