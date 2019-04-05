import React, { useState } from 'react';
import styles from './App.module.css';
import ToggleEmoji from './components/toggle-emoji/ToggleEmoji';
import ToggleControls from './components/toggle-controls/ToggleControls';
import ToggleButton from './components/toggle-button/ToggleButton';

const App = () => {

  const [initialState, setInitialState] = useState({
    iconsets: {
      monkey: [
        '🐵', '🙈', '🙉', '🙊'
      ],
      cat: [
        '🐱', '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🙀'
      ]
    }
  });

  const [selectedSet, setSelectedSet] = useState({
    set: "monkey",
    index: 0
  });

  const getCurrentEmoji = () => selectedSet.set === "monkey" ?
    initialState.iconsets.monkey[selectedSet.index] :
    initialState.iconsets.cat[selectedSet.index];

  const toggleEmoji = () => {
    let currentIndex = selectedSet.index;
    let nextIndex = currentIndex;

    switch (selectedSet.set) {
      case "cat":
        nextIndex = ++nextIndex < initialState.iconsets.cat.length ? ++currentIndex : 0;
        setSelectedSet({ set: "cat", index: nextIndex });
        break;
      case "monkey":
        nextIndex = ++nextIndex < initialState.iconsets.monkey.length ? ++currentIndex : 0;
        setSelectedSet({ set: "monkey", index: nextIndex });
        break;
    }
  }

  const selectSet = (event) => {
    let set = event.target.getAttribute("set");
    if(set)
    {
      setSelectedSet({set, index:0});
    }
  }

  return (
    <div className={styles.App}>
      <ToggleEmoji emoji={getCurrentEmoji()} label="Current emoji">
        <ToggleControls>
          <ToggleButton icon="😻" label="Toggle emoji" click={toggleEmoji} set="" />
          <ToggleButton icon="🐱" label="Select Cat set" click={selectSet} set="cat" />
          <ToggleButton icon="🐵" label="Select Monkey set" click={selectSet} set="monkey" />
        </ToggleControls>
      </ToggleEmoji>
    </div>
  );
}

export default App;
