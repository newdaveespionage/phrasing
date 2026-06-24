# Phrasing

By David Cox-Espenlaub

__An experiment in turning words into sound.__

_also_

__An interactive experience through a medium of text.__

## What it does

Phrasing turns text into music. Write or paste a poem, hit **Play**, and each word becomes a synthesized tone — the first letter determines the pitch, the word length determines the duration. Spaces and line breaks become rests, so the natural rhythm of the writing shapes the sound.

- **Write** — give your piece a title and type (or paste) any text
- **Save** — persists your work locally in the browser so it's there when you come back
- **Play** — converts the text to a sequence of notes played through a polyphonic synth with stereo widening and ping-pong delay
- **Stop** — halts playback at any time

No account or install required — runs entirely in the browser.

## Live site

[newdaveespionage.github.io/phrasing](https://newdaveespionage.github.io/phrasing)

## Development

Requires [mise](https://mise.jdx.dev/) for tool management.

```bash
mise install       # installs Node as declared in .mise.toml
npm install
npm start
```

## Credits

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
