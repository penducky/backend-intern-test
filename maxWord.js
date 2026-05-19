/**
 * Direction:
 * Find maximum number of words from given sentences.
 *
 * Expected:
 * 23
 */
const sentences = [
  'Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.',
  'Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.',
  'Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.',
];

function result(sentences) {
  // Return 0 if the sentences variable is empty or falsy
  if (!sentences) return 0

  // Set a variable to store the maximum word count value
  let wordCount = 0

  // Iterate through every sentence in the array
  for (let sentence of sentences) {
    // Split the sentence into word and count the words in each sentence
    let words = sentence.split(" ")

  // Update the variable if higher word count is found
    if (words.length > wordCount) {
      wordCount = words.length
    }
  }
  // Return the variable
  return wordCount
}

console.log(result(sentences));
