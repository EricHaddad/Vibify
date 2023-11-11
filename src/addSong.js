import Sliders from "./components/sliders";
import "./addSong.css"

function AddSong() {

    return(
        <div className="container">
            <h1>Add a New Song</h1>
            <div className="song-inputs">
                <input></input>
                <input></input>
            </div>
            <Sliders />
        </div>
    );
}

export default AddSong;