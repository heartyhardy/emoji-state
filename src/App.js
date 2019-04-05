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
    emoji: initialState.iconsets.monkey[0]
  });

  return (
    <div className={styles.App}>
      <ToggleEmoji emoji={selectedSet.emoji} label="Current emoji">
        <ToggleControls>
          <ToggleButton icon="😻" label="Toggle emoji" />
          <ToggleButton icon="🐱" label="Toggle emoji" />
          <ToggleButton icon="🐵" label="Toggle emoji" />
        </ToggleControls>
      </ToggleEmoji>
    </div>
  );
}

export default App;
