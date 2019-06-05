export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';
// created a string const TOGGLE_MESSAGE to protect code: if mistype happens elsewhere app won't run
// leaving as a string means app will run but toggle won't work...

export function toggleMessage() {
  return {
    type: 'TOGGLE_MESSAGE',
  };
}
