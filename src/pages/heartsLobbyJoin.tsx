import Banner from '../components/Banner'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function HeartsLobbyJoin(){
    // TODO: have some sort of heartbeat with the server so that we can tell if it is up or down
    let downloadsPages = ["Home", "Downloads", "HeartsLobbyJoin", "GamesList"]

    const navigate = useNavigate();
    // TODO: Obviously, we will need to get actual user credentials here in the future
    var username = "user";
    var password = "password"
    var basicAuthHeader = 'Basic ' + btoa(username + ':' + password);

    async function createGame() {
        console.log("Create Game Button clicked");
        axios.post("http://localhost:8080/games/creategame/hearts", {}, {
            headers: {Authorization: basicAuthHeader}
        }).then((response)=>{
            console.log("Game starting");
            console.log("GameId: " + response.data);
            var gameId = response.data;
            navigate(`/heartsLobby/${gameId}`)
        }).catch((error) => {
            console.error("Error creating game:", error);
        });
    }

    return (
        <>
            <h1><Banner pages={downloadsPages} activePage="HeartsLobbyJoin" /></h1>
            <div className="content-area p-3">
                <div className="wrapper">
                    <p>
                        Landing page for creating a hearts lobby
                    </p>
                    <div className="gameCreator">
                        <p>
                            TODO is to add an interface for rules selection
                        </p>
                        <button onClick={createGame}>
                            Create Game
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeartsLobbyJoin;