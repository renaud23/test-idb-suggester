import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { createStore, Suggester, StoreManager } from "idb-suggester";
import "./App.scss";
import "./custom-option.scss";

const COG_IDB_NAME = "TEST/COG";
const COG_FIELDS = [{ name: "libelle" }, { name: "com" }, { name: "nccenr" }];

function CustomCOGOption({ suggestion }) {
  const { com, libelle } = suggestion;
  return (
    <div className="custom-cog-option">
      <span className="com">{com}</span>
      <span className="libelle">{libelle}</span>
    </div>
  );
}

async function fetchCommunes() {
  const communes = await fetch(
    "/test-idb-suggester/communes-2019.json"
  ).then((data) => data.json());
  return communes.map(function (commune, i) {
    const { com } = commune;
    return { ...commune, id: `COM-${i}-${com}` };
  });
}

function App() {
  const [store, setStore] = useState(undefined);
  useEffect(function () {
    async function init() {
      setStore(await createStore(COG_IDB_NAME, 1, COG_FIELDS));
    }

    init();
  }, []);
  if (!store) {
    return null;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div style={{ width: "250px" }}>
          <StoreManager
            name={COG_IDB_NAME}
            version={1}
            fields={COG_FIELDS}
            fetch={fetchCommunes}
          />
          <Suggester
            store={store}
            placeHolder="Rechercher dans le COG."
            optionComponent={CustomCOGOption}
            displayPath="libelle"
            onSelect={function (item) {
              console.log("onSelect", item);
            }}
          />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
