export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    // eslint-disable-line no-unused-vars
    task = true;
    // eslint-disable-line no-unused-vars
    task2 = false;
  }

  return [task, task2];
}
