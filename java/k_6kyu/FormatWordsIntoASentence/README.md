# [Format words into a sentence](https://www.codewars.com/kata/format-words-into-a-sentence)

## Description
    Complete the method so that it formats the words into a single comma separated value. 
    The last word should be separated by the word 'and' instead of a comma. 
    The method takes in an array of strings and returns a single formatted string. 
    Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.
## Example:
```
Kata.formatWords(new String[] {"ninja", "samurai", "ronin"}) => "ninja, samurai and ronin"
Kata.formatWords(new String[] {"ninja", "", "ronin"}) => "ninja and ronin"
Kata.formatWords(new String[] {}) => ""
```
