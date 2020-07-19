let text = "'I'm the cook,' he said, 'it's my job.'";
/* The regex looks for a quote which doesnt have a word character behind it.
The regex makes use of a negative look behind.*/
console.log(text.replace(/(?<!\w)'/g, '"')); // → "I'm the cook," he said, "it's my job."

/* The Second argument to the replace method is a string containing a double quote
to replace all the single quotes*/
