import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import alexaImage from "./images/alexa.png";
import cortanaImage from "./images/cortana.png";
import siriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Title of the page</p>
          <p class="subtitle">Primary subtitle</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div class="columns">
            <div class="column is-2">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={alexaImage}
                description="Alexa was created by Amazon and helps you buy things"
              />
            </div>
            <div class="column is-2">
              <ProfileCard
                title="Cortana"
                handle="@cortana"
                image={cortanaImage}
                description="Cortana was made by Microsoft. Who knows what it does?"
              />
            </div>
            <div class="column is-2">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={siriImage}
                description="Siri was made by Apple and is being phase out"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
