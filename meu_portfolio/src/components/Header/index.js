import "./Header.css";
import { profile } from "../../data/profile";

export default function Header() {
  return (
    <div className="header">
      <div className="profile-inner">
        {profile.map(person =>{
         return(
          <>
          <div className="profile-text">
          <h1 id="greetings">Muito prazer!</h1>
          <p>{person.greetings}</p>
        </div>
        <div className="profile-image">
          <picture>
            <img width="500" height="500" src= './src/images/profile.jpg' alt={person.name} />
          </picture>
        </div>
          </>
         ); 
        } )} 
      </div>
    </div>
  );
}
