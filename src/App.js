import React, { useState } from "react";
import classnames from "classnames";
import logo from "./logo.svg";
import { useStoreIndex, Suggester, StoreManager } from "idb-suggester";
import "./App.scss";
import "idb-suggester/themes/css/default-theme.css";
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

function Echoes({ echoes }) {
  return (
    <div className="echoes">
      {echoes.map(function (doc, i) {
        const { com, libelle } = doc;
        return (
          <div className={classnames("echo", { pair: i % 2 === 0 })} key={i}>
            <span className="code">{com}</span>
            <span className="libelle">{libelle}</span>
          </div>
        );
      })}
    </div>
  );
}

function App() {
  const [echoes, setEchoes] = useState([]);
  const store = useStoreIndex(COG_IDB_NAME, 1, COG_FIELDS);

  if (!store) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test in CRA app. French communes.</h1>
        <div style={{ width: "250px" }}>
          <Suggester
            store={store}
            placeHolder="Rechercher dans le COG."
            optionComponent={CustomCOGOption}
            displayPath="libelle"
            onSelect={function (item, options, query) {
              console.log("onSelect", item, options, query);
            }}
            onChange={function (q, suggestions) {
              setEchoes(suggestions);
            }}
          />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <Echoes echoes={echoes} />
        <div className="store-pane">
          <StoreManager
            name={COG_IDB_NAME}
            version={1}
            fields={COG_FIELDS}
            fetch={fetchCommunes}
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
