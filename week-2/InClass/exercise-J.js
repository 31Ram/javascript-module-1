function secondMatchesAmy(array) {
  if (array[1]==="amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
}

const names = ["daniel","amy","wiston","yerly","vanessa"];

console.log(secondMatchesAmy(names));