import './Header.css'

export default function Header({ profile }) {
  const { greetings, avatar, name } = profile;

  return (
    <div className="header">
      <div className="profile-inner">
        <div className="profile-text">
          <h1 id="greetings">Muito prazer!</h1>
          <p>{greetings}</p>
        </div>
        <div className="profile-image">
          <picture>
            <img width="500" height="500" src={avatar} alt={name} />
          </picture>
        </div>
      </div>
    </div>
  );
}
