// manage one or more oscillators, their tuning, and starting and stopping their sound
import Tone from 'tone';

const Perform = {
  initialize() {
    console.log('Perform:initialize');
    this.isPlaying = false;
    this.synth = new Tone.Synth().toMaster();
  },
  convertToNotes(letters) {
    // figure out note from letter, duration from word length.
    letters.replace(/[\n]/g, '<br/>')
    const now = Tone.now()
    let phrases = letters.split('<br/>');
    let arrangement = [];
    let lineRests = 0;
    phrases.forEach((phrase, index) => {
      let currentPhrase = phrase.split(' ');
      let rests = 0;
      currentPhrase.forEach((word, wordIndex) => {
        let baseDuration = now + lineRests + rests;
        lineRests = 0
        let noteDefinition = {
          duration: word.length,
          timing: baseDuration + index + wordIndex,
          note: word.charCodeAt(0) * 10
        };
        arrangement.push(noteDefinition);
        rests = 1;
      });
      lineRests = 1;
    });
    return arrangement;
  },
  play(letters) {
    console.log('Perform:play', letters);
    var that = this;
    let arrangement = this.convertToNotes(letters);
    if (arrangement.length) {
      arrangement.forEach((noteDefinition, index) => {
        that.synth.triggerAttackRelease(noteDefinition.note, noteDefinition.duration, noteDefinition.timing);
      });
    }
    this.isPlaying = true;
    return true;
  },
  stop() {
    console.log('Perform:stop');
    this.synth.triggerRelease();
    this.isPlaying = false;
  }
}

export default Perform;
