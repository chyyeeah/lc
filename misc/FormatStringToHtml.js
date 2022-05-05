/**
We have a string of text that we want to turn into formatted HTML.

Our function accepts an input string and a set of formats to apply to certain substrings. 
The formats are provided as a list of lists where each internal list has 3 values:

The format/tag name
The start index of the format
The end index of the format
The important thing to look out for is that tags in HTML can be nested, 
but cannot overlap: e.g. 
<b>Hello <i>this</b> is</i> a test is invalid but <b>Hello <i>World</i> test</b> 
is ok. For now, we can assume no formats will start and end at the same indices.

Example Input

string_to_format: "Hello this is a test string"
formats: [
    ['b', 6, 20],
    ['i', 16, 27],
    ['h1', 0, 5],
]
Example Output
<h1>Hello</h1> <b>this is a <i>test</i></b><i> string</i>

Hint: we suggest building the output string one character at a time

[execution time limit] 4 seconds (js)
 */
const stringToHTML = (string_to_format, formats) => {
  const openingHash = {};
  const closingHash = {};
  formats.forEach(f => {
    const tag = f[0];
    const start = f[1];
    const end = f[2];
    openingHash[start] = tag;
    closingHash[end] = tag;
  });
  let result = '';
  let limboTags = [];
  for (let i = 0; i < string_to_format.length + 1; i++) {
    const char = string_to_format[i];
    let temp = '';
    if (openingHash[i] != null) {
      limboTags.push(openingHash[i]);
      temp += `<${openingHash[i]}>`;
    }
    if (closingHash[i] != null) {
      const limboIdx = limboTags.indexOf(closingHash[i]);
      if (limboIdx === limboTags.length - 1) {
        limboTags.pop();
        temp += `</${closingHash[i]}>`;
      } else {
        console.log('before', limboTags, limboIdx)
        limboTags.splice(limboIdx, 1);
        console.log('after', limboTags)
        for (let j = limboTags.length - 1; j >= 0; j--) {
          const char = limboTags[j];
          temp += `</${char}>`;
        }
        temp += `</${closingHash[i]}>`;
        limboTags.forEach(lt => {
          temp += `<${lt}>`;
        });
      }
    }
    if (i < string_to_format.length) {
      temp += char;
    }
    result += temp;
  }
  return result;
};

// console.log(stringToHTML('Hello this is a test string', [
//     ['b', 6, 20],
//     ['i', 16, 27],
//     ['h1', 0, 5],
// ]));


string_to_format = "This is another test string with more words";
formats = [
  ['h1', 0, 27],
  ['h2', 5, 32],
  ['h3', 8, 43],
  ['h4', 16, 20],
]
console.log(stringToHTML(string_to_format, formats))
// This is another test string with more words
// <h1>This <h2>is <h3>another <h4>test string with more words

/*
<h1>Hello</h1> <b>this is a <i>test</i></b><i> string</i>
[
  ['i', 16, 27],
]
*/