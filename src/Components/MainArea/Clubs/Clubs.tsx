import "./Clubs.css";

function Clubs(): JSX.Element {
    // const clubs = ['Barcelona','Barcelona B','Barcelona C','Newell\'s Old Boys']
    const clubs = [{"id":1,"club":"Barcelona"},{"id":2,"club":"Barcelona B"},{"id":3,"club":"Barcelona C"},{"id":4,"club":"Newell\'s Old Boys"}];
    return (
        <div className="Clubs Box">
            <h2>Clubs</h2>
			{/* <span>Barcelona</span>
			<span>Barcelona B</span>
			<span>Barcelona C</span>
			<span>Newell's Old Boys</span> */}

            {/* {clubs.map(c=><span>{c},</span>)} */}
            {/* {clubs.map(c=><span>{c.club},</span>)} */}
            {clubs.map(c=><span key={c.id}>{c.club},</span>)}
        </div>
    );
}

export default Clubs;
