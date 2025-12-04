import profilePicture from "../../assets/profile picture.png"

const Home = () => {
  return (
    <>
        <div className="container-fluid" id="home">
            <div className="row justify-content-around">
                <div className="col-5 align-self-center" id="homeText">
                    <p>Hello, I'm Paulo Rodrigues</p>
                    <p>I'm game & web developer</p>
                    <p>Welcome to my online portfolio</p>
                </div>
                <div className="col-5" id="homeImg">
                  <img src={profilePicture} alt="Foto de Perfil" className="img-fluid" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home