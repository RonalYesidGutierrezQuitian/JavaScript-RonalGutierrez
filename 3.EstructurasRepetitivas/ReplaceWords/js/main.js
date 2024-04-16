/**
 * Replaces words in a sentence with their shortest root form found in a dictionary.
 * @param {string[]} dictionary - An array of root words.
 * @param {string} sentence - The sentence to be processed.
 * @return {string} - The sentence with root words replaced.
 */
var replaceWords = function(dictionary, sentence) {
    // Split the sentence into an array of words
    let wordArr = sentence.split(" ");
    
    // Map over each word in the array
    wordArr = wordArr.map(w => {
        // Iterate through the dictionary to find the shortest root word for the current word
        for(let i = 0; i <= dictionary.length - 1; i++) {
            // Check if the current word starts with a word from the dictionary
            if (w.indexOf(dictionary[i]) === 0) {
                // If so, replace the current word with the root word from the dictionary
                w = dictionary[i];
            }
        }
        // Return the modified word
        return w;
    });
    
    // Join the modified word array into a sentence and trim any trailing whitespace
    return wordArr.reduce((str, word) => str += `${word} `, "").trim();
};