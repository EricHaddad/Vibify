import Sliders from "./components/sliders";
import "./addSong.css"

function AddSong() {

    return(
        <div>
            <div className="container">
                <h1>Add a New Song</h1>
                <div className="song-inputs">
                    <label>Song Name:</label>
                    <input
                        type="text"
                        placeholder="Enter Song Name"
                        onChange={()=>{}}
                    />
                    <label>Song Artist:</label>
                    <input
                        type="text"
                        placeholder="Enter Song Name"
                        onChange={()=>{}}
                    />
                </div>
            </div>
            <Sliders buttonName="SUBMIT SONG"/>
        </div>
    );
}

export default AddSong;