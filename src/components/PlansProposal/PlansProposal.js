import "./PlansProposal.css"

export const PlansProposal = ({ onPlanClick }) => {
    const plans = [
        "Café + Parque cute + chisme ☕",
        "Bazar/Cafetería de ositos 🐻",
        "Cafetería/Panadería de gatitos 😺",
        "Acompañarme por mi ternurin de las Chivas 🐐",
        "Inaugurar la spooky season con un café de calabaza 🎃",
        "Patinar ⛸️",
        "Ir a dibujar 🖍️"
    ];

    return (
        <div className="container-AllPLans">
            <h1>Planes que hemos platicado: </h1>
            {plans.map((plan, index) => (
                <div className="card-plan" key={index}>
                    <button onClick={() => onPlanClick(plan)}>{plan}</button>
                </div>
            ))}
        </div>
    )
}