import {useHistory} from "react-router-dom";

function Deck({index, id, name, description, cardsLength, deleteDeck}) {
    const history = useHistory();
    return (
        <div className="decksList">
            <div>
                <h5>{name}</h5>
                <p>{cardsLength} cards</p>
            </div>
            <div>{description}</div>
            <div>
                <div>
                    <button className="btn btn-primary mr-2 mb-2" onClick={() => {
                        history.push(`/decks/${id}`)
                    }}>View</button>
                    &nbsp;
                    <button className="btn btn-primary mr-2 mb-2"  onClick={() => {
                        history.push(`/decks/${id}/study`)
                    }}>Study</button>
                </div>
                <button className="btn btn-danger mb-2" onClick={() => {
                    const answer = window.confirm("Delete this deck? \n \n You will not be able to recover it.")
                    answer && deleteDeck(index, name, description)
                }}>Delete</button>
            </div>
        </div>
    )
}

export default Deck;