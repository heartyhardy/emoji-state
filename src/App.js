import React, {useState} from 'react';
import styles from './App.module.css';
import ToggleEmoji from './components/toggle-emoji/ToggleEmoji';
import ToggleControls from './components/toggle-controls/ToggleControls';
import ToggleButton from './components/toggle-button/ToggleButton';

const App = () => {

    return (
      <div className={styles.App}>
        <ToggleEmoji emoji="🙈" label="Current emoji">
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
