HTML

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./assets/images/favicon-32x32.png"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Frontend Mentor | Password generator app</title>
  </head>
  <body>
    <div class="main-container">
      <main class="generator">
        <h1 class="header">Password Generator</h1>

        <div class="password-container">
          <div id="password-input" class="active"></div>
          <img
            src="./assets/images/icon-copy.svg"
            class="copy-clipboard-icon"
          />
        </div>

        <div class="options-container">
          <form>
            <div class="column">
              <label class="length-text" for="password-length"
                >Character Length</label
              >
              <output class="output-value">0</output>
            </div>
            <input
              type="range"
              id="slider"
              name="password-length"
              value="0"
              min="0"
              max="20"
            />
            <div class="column">
              <input type="checkbox" id="uppercase" name="uppercase" />
              <label for="uppercase">Include Uppercase Letters</label>
            </div>

            <div class="column">
              <input type="checkbox" id="lowercase" name="lowercase" />
              <label for="lowercase">Include Lowercase Letters</label>
            </div>

            <div class="column">
              <input type="checkbox" id="numbers" name="numbers" />
              <label for="numbers">Include Numbers</label>
            </div>

            <div class="column">
              <input type="checkbox" id="symbols" name="symbols" />
              <label for="symbols">Include Symbols</label>
            </div>
          </form>

          <div class="strength-container column">
            <p class="strength-text">Strength</p>
            <p class="strength-value-text"></p>
            <div class="boxes column">
              <div class="strength-box"></div>
              <div class="strength-box"></div>
              <div class="strength-box"></div>
              <div class="strength-box"></div>
            </div>
          </div>
          <div class="container">
            <button class="generate">Generate</button>
            <img src="./assets/images/icon-arrow-right.svg" class="arrow" />
          </div>
        </div>
      </main>
      <div class="error-container">
        <div class="error-message">
          Please choose a length and character option
        </div>
        <div class="close">CLOSE</div>
      </div>
    </div>
  </body>
  <script src="main.js"></script>
</html>



CSS
/* RESETS */

*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul[role="list"],
ol[role="list"] {
  list-style: none;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
}

img,
video {
  max-width: 100%;
  /* height: auto; */
  display: block;
}

@font-face {
  font-family: "Jetbrains Mono Bold";
  src: url(/starter-code/assets/fonts/JetBrainsMono-VariableFont_wght.ttf);
  font-weight: bold;
}

@font-face {
  font-family: "Jetbrains Mono Italic";
  src: url(/starter-code/assets/fonts/JetBrainsMono-Italic-VariableFont_wght.ttf);
  font-weight: italic;
}

:root {
  /* COLORS */
  --clr-neutral-800: hsl(248, 15%, 11%);
  --clr-neutral-700: hsl(248, 10%, 15%);
  --clr-neutral-200: hsl(251, 9%, 53%);
  --clr-neutral-100: hsl(252, 11%, 91%);

  --clr-accent-600: hsl(0, 91%, 63%);
  --clr-accent-500: hsl(13, 95%, 66%);
  --clr-accent-400: hsl(42, 91%, 68%);
  --clr-accent-300: hsl(127, 100%, 82%);
}

/* GENERAL */

a:link,
a:visited,
a:hover,
a:active {
  color: #000;
  text-decoration: none;
  font-weight: bold;
}

footer {
  display: none;
}

.attribution a {
  color: white;
}

body {
  font-family: "Jetbrains Mono Bold", "Jetbrains Mono Italic", sans-serif;
  font-size: 16px;
  background-color: var(--clr-neutral-800);
  color: var(--clr-neutral-100);
  margin-top: 4.05em;
  margin-left: 2em;
}

.main-container {
  position: relative;
}

.generator {
  max-width: 343px;
  transition: all 0.8s ease;
}

.header {
  font-size: 1rem;
  color: var(--clr-neutral-200);
  text-align: center;
}

.password-container {
  position: relative;
  margin: 1em 0;
}

#password-input {
  background-color: var(--clr-neutral-700);
  height: 4rem;
  border: none;
  width: 100%;
  color: var(--clr-neutral-100);
  font-family: inherit;
  font-size: 1.5rem;
  padding-left: 0.6em;
  padding-top: 0.7em;
}

.copy-clipboard-icon {
  position: absolute;
  top: 1.4rem;
  right: 1em;
  width: 18px;
  cursor: pointer;
  opacity: 1;
}

.copy-clipboard-icon:hover {
  opacity: 0.8;
}

.copy-clipboard-icon:active {
  transform: scale(95%);
}

.options-container {
  background-color: var(--clr-neutral-700);
  padding: 0.95em 0.9em;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.column {
  display: flex;
  align-items: center;
  justify-content: center;
}

.column:first-of-type {
  width: 100%;
  justify-content: space-between;
  max-width: 99%;
}

.length-text {
  font-size: 1rem;
}

.output-value {
  color: var(--clr-accent-300);
  font-size: 1.5rem;
}
#slider {
  width: 100%;
  margin-top: 1.35em;
  margin-bottom: 3.2em;
}

#slider {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background-color: var(--clr-neutral-800);
  outline: none;
  cursor: pointer;
}

/* Chrome */
#slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  background-color: var(--clr-neutral-100);
  height: 30px;
  width: 30px;
  border-radius: 50%;
}

/* Firefox */

#slider::-moz-range-thumb {
  background-color: var(--clr-neutral-100);
  height: 30px;
  width: 30px;
  border-radius: 50%;
}

.column:not(:first-child):not(:last-child) {
  margin-bottom: 0.96em;
}

label:not(:first-child) {
  padding-left: 1.2em;
}

input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  border: 2px solid var(--clr-neutral-100);
  width: 20px;
  height: 20px;
}

input[type="checkbox"]:checked {
  background: url(./assets/images/icon-check.svg);
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  background-color: var(--clr-accent-300);
  width: 20px;
  height: 20px;
}

.strength-container {
  background-color: var(--clr-neutral-800);
  padding: 0.86em 1em;
  margin-top: 2em;
}

.strength-text {
  color: var(--clr-neutral-200);
  text-transform: uppercase;
}
.strength-value-text {
  font-size: 1.11rem;
  margin-top: 0.09em;
  margin-right: 0.3em;
  text-align: right;
  width: 100%;
}

.boxes.column {
  justify-content: end;
  gap: 0.4rem;
  max-width: 4.7rem;
}

.strength-box {
  width: 10px;
  height: 28px;
  border: 2px solid var(--clr-neutral-100);
  margin-right: 0.08em;
}

.container {
  position: relative;
}

.generate {
  text-transform: uppercase;
  padding: 1.1em 0;
  background-color: var(--clr-accent-300);
  border: none;
  width: 100%;
  padding-right: 1.8em;
  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.generate:active {
  transform: scale(95%);
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  right: 33%;
}

.error-container {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  min-width: 17rem;
  text-align: center;
  padding: 1.5em 0;
  background-color: var(--clr-accent-300);
  color: var(--clr-neutral-800);
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition-property: overlay display opacity;
  transition-duration: 0.8s;
  transition-behavior: allow-discrete;
}

.error-container.active {
  opacity: 1;
  display: flex;

  @starting-style {
    opacity: 0;
  }
}

.close {
  width: auto;
  background-color: var(--clr-neutral-800);
  margin-top: 0.7em;
  color: var(--clr-accent-300);
  padding: 0.5em 2em;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.close:active {
  transform: scale(95%);
}
