import './Header.css';

export default function Header(picture){
    return(
        <div className="header">
            <div className="profile-inner">
          <div className="profile-text">
            <h1 id="greetings">Muito prazer!</h1>
            <p>
              Meu nome é Júlio Queiroz e eu sou um desenvolvedor front-end!
            </p>
          </div>
          <div className="profile-image">
            <picture>
              <img
                width="500"
                height="500"
                src={picture}
                alt="profile picture"
              />
            </picture>
          </div>
        </div>
        </div>
    );
}