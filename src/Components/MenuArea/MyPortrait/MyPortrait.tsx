import "./MyPortrait.css";
import myPic from '../../../Assets/Images/myPortrait-nobg.png';


function MyPortrait(): JSX.Element {
    return (
        <div className="MyPortrait">
            <img className="MyPortraitImg" src={myPic} alt="myPortrait" />

        </div>
    );
}

export default MyPortrait;
