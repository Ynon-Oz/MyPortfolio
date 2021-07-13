import "./Total.css";

function Total(): JSX.Element {
    const numOfGoals = 748;
    return (
        <div className="Total Box">
			<h2>Total</h2>
            <p>Messi scored {numOfGoals} goals</p>
        </div>
    );
}

export default Total;
