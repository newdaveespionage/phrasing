// manage one or more oscillators, their tuning, and starting and stopping their sound
import Tone from "tone";

const Perform = {
  initialize() {
    console.log("Perform:initialize");
    this.isPlaying = false;
    const widener = new Tone.StereoWidener(0.8);
    const pingpong = new Tone.PingPongDelay("8t", 0.8).toMaster();
    this.synth = new Tone.PolySynth(4, Tone.Synth)
      .connect(pingpong)
      .chain(widener, Tone.Master);
    this.synth.set({
      volume: -10,
      envelope: { attack: 0.3, sustain: 0.2, release: 0.2 }
    });
  },
  convertToNotes(letters) {
    // figure out note from letter, duration from word length.
    letters.replace(/[\n]/g, "<br/>");
    const now = Tone.now();
    let phrases = letters.split("<br/>");
    let arrangement = [];
    let lineRests = 0;
    phrases.forEach((phrase, index) => {
      let currentPhrase = phrase.split(" ");
      let rests = 0;
      currentPhrase.forEach((word, wordIndex) => {
        let baseDuration = now + lineRests + rests;
        lineRests = 0;
        let noteDefinition = {
          duration: word.length - 0.5,
          timing: baseDuration + index + wordIndex,
          note: word.charCodeAt(0) * 10
        };
        arrangement.push(noteDefinition);
        // add a breath
        arrangement.push({
          duration: 0.5,
          timing: noteDefinition.timing + 0.5,
          note: 0
        });
        rests = 1;
      });
      lineRests = 1;
    });
    return arrangement;
  },
  play(letters) {
    console.log("Perform:play", letters);
    var that = this;
    let arrangement = this.convertToNotes(letters);
    console.log("Perform:play arrangement", arrangement);
    if (arrangement.length) {
      arrangement.forEach((noteDefinition, index) => {
        that.synth.triggerAttackRelease(
          noteDefinition.note,
          noteDefinition.duration,
          noteDefinition.timing
        );
      });
    }
    this.isPlaying = true;
    return true;
  },
  stop() {
    console.log("Perform:stop");
    this.synth.triggerRelease();
    this.isPlaying = false;
  }
};

export default Perform;
