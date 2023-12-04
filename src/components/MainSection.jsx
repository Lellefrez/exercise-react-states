import { useState } from "react";
import "./MainSection.css";

const MainSection = () => {
  const [volume, setVolume] = useState("50");
  const [isMuted, setIsMuted] = useState(false);
  return (
    <main>
      <div>
        <h1>REGISTRATI PER IL CONCERTO</h1>
        <div className="container-p">
          <p>
            Ascolta la nuova canzone di Ultimo, dopodichè inserisci il tuo nome
            e la tua età e registrati
          </p>
          <p>
            Puoi vincere dei <span>Fantastici</span> premi, tra cui 2 biglietti
            per il concetro di Ultimo con Vip Pass. Affrettati, il tempo è
            limitato, non preoccuparti se non vinci, ci sarà un ripescaggio ed
            ugualmente fantastici premi!
          </p>
        </div>
        <img
          src="https://inchiostrosonoroblog.files.wordpress.com/2023/11/ultimo-occhi-lucidi.jpg?w=730"
          alt="Ultimo"
        />
        <section className="volumeContainer">
          <p>Volume:</p>
          <input
            type="range"
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              if (isMuted) {
                setIsMuted(false);
                setVolume(0);
                return;
              }
              setVolume(e.target.value);
            }}
          />{" "}
          {isMuted ? "MUTE" : volume}
          <div>
            <button
              className="btn-volume"
              onClick={() => {
                setIsMuted(!isMuted);
              }}
            >
              {isMuted ? "Unmute" : "Mute"}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};
export default MainSection;
