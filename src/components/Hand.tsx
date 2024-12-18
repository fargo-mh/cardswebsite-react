import Card, { Suit } from '../components/Card'
import Draggable, {DraggableCore} from 'react-draggable';

// TODO: Either add useState call here to get hand contents, or make a PlayerView class that manages it

interface HandProps {
    cards: [rank: string, suit: Suit][]; 
    location: string;
    isPlayer: Boolean;
    onClick? : (event: React.MouseEvent<HTMLImageElement>) => void;
}

function showCard(suit: Suit, rank : string){
    console.log("card clicked: " + rank + suit);
}

function getStyle(padding : number, location: string){
    padding = padding * 30
    let cardStyle = {
        //marginLeft: padding,
        transform : `translateX(${(padding)}%)`
    }

    if (location == "Left" ||  location == "Right") {
        cardStyle = {
            transform: 'rotate(90deg)',
            marginLeft: '30px',
            marginTop: 200 + padding
        }
    }

    return cardStyle;
}

// Notice default onClick implementation is to just do nothing
function Hand( {cards, location, isPlayer, onClick = () =>{}} : HandProps){
    
    return (
            <div className="hand">
                  {cards.map( (card, index) =>
                      <div className={"cardHolder"} key={index} style={getStyle(index, location)}>
                            <Card rank={card[0]} suit={card[1]} isPlayer={isPlayer} onClick={onClick}/>
                      </div> )}
            </div>
        );
}

export default Hand;