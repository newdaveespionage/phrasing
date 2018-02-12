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
    let phrases = letters.split('<br/>');
    let arrangement = [];
    let rests = 0;
    phrases.forEach(function(phrase, index) {
      let currentPhrase = phrase.split(' ');
      currentPhrase.forEach(function(word, wordIndex) {
        let noteDefinition = {
          duration: word.length + 'n',
          timing: index + wordIndex + rests,
          note: word.charCodeAt(0) * 100
        };
        arrangement.push(noteDefinition);
        rests++;
      });
      rests++;
    });
    return arrangement;
  },
  play(letters) {
    console.log('Perform:play', letters);
    var that = this;
    let arrangement = this.convertToNotes(letters);
    if (arrangement.length) {
      arrangement.forEach(function(noteDefinition, index) {
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
