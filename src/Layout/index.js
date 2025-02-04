import React, {useEffect, useState} from "react";
import Header from "./Header";
import {Route, Switch, useHistory} from "react-router-dom";
import NotFound from "./NotFound";
import Decks from "../components/Decks";
import DeckList from "../components/DeckList";
import {listDecks, readDeck} from "../utils/api";


export function getDeck(setDeck, deckId) {
    const abortController = new AbortController();
    async function getDeck() {
        const response = await readDeck(deckId, abortController.signal)
        setDeck(response)
    }
    getDeck();
}

function Layout() {
    const history = useHistory();
    const [decksList, setDecksList] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        listDecks(abortController.signal).then(r => setDecksList(r))
    }, [])
  return (
    <>
      <Header />
      <div className="container">
          <Switch>
              <Route exact path="/">
                  <button className="btn btn-primary " onClick={() => {
                      history.push("/decks/new")
                  }}>Create Deck</button>
                    <div style={{ marginBottom: '20px' }}></div>
                  <DeckList decksList={decksList} setDecksList={setDecksList} />
              </Route> 
              <Route path="/decks">
                  <Decks setDecksList={setDecksList} />
              </Route>
              <Route>
                  <NotFound />
              </Route>
          </Switch>
      </div>
    </>
  );
}

export default Layout;