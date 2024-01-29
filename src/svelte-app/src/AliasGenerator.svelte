<script>
  import { aliasCategories, verbs, objects, otherObjects } from './aliases.js';

  let keyCombination = '';
  let isKeySet = false;
  let displayContent = '';  // Content to display in the browser
  let saveContentText = ''; // Content to save as .cfg file
  let shakeInput = false;
  let showButtons = false;
  let animateInput = true; // Control input animation


  function handleKeyInput(event) {
    keyCombination = event.key.toUpperCase();
    isKeySet = true;
    shakeInput = false;
    showButtons = true; // Show buttons when a key is pressed
    animateInput = false;
    event.preventDefault();
  }

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function generateCS2Config(category) {
    if (!isKeySet) {
      shakeInput = true;
      return;
    }

    let aliasCommands = [];
    for (let i = 0; i < 30; i++) {
      const randomVerb = getRandomElement(verbs);
      const randomNoun = getRandomElement(objects);
      const randomObject = getRandomElement(otherObjects);

      const sentenceTemplate = getRandomElement(aliasCategories[category]);
      let command = `alias alias${i} "${sentenceTemplate
                     .replace('${randomVerb}', randomVerb)
                     .replace('${randomNoun}', randomNoun)
                     .replace('${randomNouns}', randomNoun)
                     .replace('${randomObject}', randomObject)}";`;
      aliasCommands.push(command);
    }

    displayContent = aliasCommands.join('<br>'); // Join with HTML line breaks for display
    saveContentText = `bind "${keyCombination}" "` + aliasCommands.join('\n') + '"';
  }

  function saveContent() {
    const blob = new Blob([saveContentText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'aliases.cfg';
    a.click();
    window.URL.revokeObjectURL(url);
  }
</script>
  
<style>
  .notepad {
    background-color: #fff;
    border: 2px solid #000;
    box-shadow: 3px 3px 0 #808080;
    font-family: 'Lucida Console', 'Courier New', monospace;
    margin-top: 10px;
    padding: 8px;
    height: 300px;
    overflow-y: auto;
  }

  .notepad-header {
    background-color: #000080;
    color: white;
    padding: 3px 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .notepad-title {
    font-weight: bold;
    font-size: 12px;
  }

  .window-buttons {
    display: flex;
    gap: 4px;
  }

  .window-button {
    width: 16px;
    height: 14px;
    border: 1px solid #fff;
    background-color: #c0c0c0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    cursor: pointer;
  }

  .window-button:hover {
    background-color: #999;
  }

  /* Menu Bar and Button Styles */
  .menu-bar {
    background-color: #c0c0c0;
    padding: 5px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  button {
    background-color: #c0c0c0;
    border: 1px solid #fff;
    border-bottom-color: #808080;
    border-right-color: #808080;
    font-family: 'MS Sans Serif', Geneva, sans-serif;
    font-size: 12px;
    padding: 2px 6px;
    cursor: pointer;
    display: none; /* Initially hide buttons */
  }

  button:active {
    border: 1px solid #fff;
    border-top-color: #808080;
    border-left-color: #808080;
    background-color: #e0e0e0;
  }

  .key-input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: moveInput 2s infinite alternate;
  }

  .key-input-icon {
    /* Use an emoji or font awesome icon */
    content: '⌨️';
  }

  /* Key Input Field Style */
  .key-input {
    width: 40px;
    height: 20px;
    text-align: center;
    font-weight: bold;
    border: 1px solid #ccc;
    padding: 2px;
    margin-right: 5px;
    display: inline-block;
    animation: moveInput 2s infinite alternate;
  }

  /* Shake Animation for Key Input */
  .shake {
    animation: shake 0.5s;
  }

  /* Show Buttons with Animation */
  .show-buttons button {
    display: inline-block;
    animation: bubbleUp 0.5s ease-out;
  }

  #whine-button::before { content: '😡 '; }
  #excuse-button::before { content: '🤥 '; }
  #funny-button::before { content: '😂 '; }
  #save-button::before { content: '💾 '; }

  @keyframes shake {
    0%, 100% { transform: translateX(0px); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }

  @keyframes moveInput {
  0% { transform: translateX(-10px); }
  100% { transform: translateX(10px); }
}

/* Button Appearance Animation */
@keyframes bubbleUp {
  0% { transform: scale(0); }
  100% { transform: scale(1); }
}
</style>
  
<div class="menu-bar">
  <div class="key-input-container {animateInput ? '' : 'animate-input'}">
    <span class="key-input-icon">⌨️</span>
    <input type="text" class="key-input" on:keydown={handleKeyInput} value={keyCombination} placeholder="Key" readonly />
  </div>

  {#if showButtons}
    <div class="show-buttons">
      <button id="whine-button" on:click={() => generateCS2Config('whine')} disabled={!isKeySet}>Generate whine</button>
      <button id="excuse-button" on:click={() => generateCS2Config('excuse')} disabled={!isKeySet}>Generate excuse</button>
      <button id="funny-button" on:click={() => generateCS2Config('funny')} disabled={!isKeySet}>Generate funny</button>
      <button id="save-button" on:click={saveContent} disabled={!isKeySet}>Download</button>
    </div>
  {/if}
</div>
  
  <div class="notepad">
    <div class="notepad-header">
      <span class="notepad-title">CS2 Config</span>
      <div class="window-buttons">
        <div class="window-button">_</div>
        <div class="window-button">X</div>
      </div>
    </div>
    <pre>{@html displayContent}</pre>
  </div>