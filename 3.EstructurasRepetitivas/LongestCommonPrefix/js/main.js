/**
 * Finds the longest common prefix among an array of strings.
 * @param {string[]} strs - An array of strings.
 * @return {string} - The longest common prefix as a string.
 */
var longestCommonPrefix = function(strs) {
    // Enable strict mode to enforce cleaner coding practices
    'use strict';

    // Check if the input array is undefined or empty
    if (strs === undefined || strs.length === 0) {
        // If so, return an empty string since there are no strings to compare
        return '';
    }
    
    // Use the reduce() method to iterate over the array of strings and find the common prefix
    return strs.reduce((prev, next) => {
        // Initialize a variable to track the index of characters being compared
        let i = 0;

        // Compare characters of the current string with the previous string until a mismatch is found or one of the strings ends
        while (prev[i] && next[i] && prev[i] === next[i]) {
            i++;
        }

        // Return the portion of the previous string that matches the current string
        return prev.slice(0, i);
    });
};