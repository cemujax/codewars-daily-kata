# [Where my anagrams at](https://www.codewars.com/kata/where-my-anagrams-at)

## Description

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

> 'abba' & 'baab' == true
>
> 'abba' & 'bbaa' == true
>
> 'abba' & 'abbba' == false
>
> 'abba' & 'abca' == false

## Examples

```js
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
```
