// card for contaning the big question!
import "./CardQuestion.css";

export const CardQuestion = ({ onYesClick }) => {
  return (
    <div className="card-section">
      <h3>¿Te gustaría salir conmigo?</h3>
      <div className="question-card">
        <button className="yes-button" onClick={onYesClick}>Sí</button>
        <button className="no-button">No</button>
      </div>
    </div>
  );
};
