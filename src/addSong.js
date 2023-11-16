import { useState } from "react";
import Sliders from "./components/sliders";
import "./addSong.css"

function AddSong() {
const [songName, setSongName] = useState("");
    const [artistName, setArtistName] = useState("");

    const handleSongNameChange = (e) => {
        setSongName(e.target.value);
    };

    const handleArtistNameChange = (e) => {
        setArtistName(e.target.value);
    };

    const handleSubmit = (happyValue, sadValue, energyValue, calmnessValue, danceabilityValue) => {
        const newLine = `${songName},${artistName},${happyValue},${sadValue},${energyValue},${calmnessValue},${danceabilityValue}`
        alert(newLine)
    }

    return(
        <div>
            <div className="container">
                <h1>Add a New Song</h1>
                <div className="song-inputs">
                    <label>Song Name:</label>
                    <input
                        type="text"
                        placeholder="Enter Song Name"
                        value={songName}
                        onChange={handleSongNameChange}
                    />
                    <label>Song Artist:</label>
                    <input
                        type="text"
                        placeholder="Enter Artist Name"
                        value={artistName}
                        onChange={handleArtistNameChange}
                    />
                </div>
            </div>
            <Sliders buttonName="SUBMIT SONG" handleSubmit={handleSubmit} height="69.74"/>
        </div>
    );
}

export default AddSong;