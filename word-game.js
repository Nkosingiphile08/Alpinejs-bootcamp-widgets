function longestWord(str) {
    var words = str.split(" ")
       var longWord = ""
       for (const word of words) {
       if (word.length >= longWord.length) {
       longWord = word};
   
       if (!str) {
           return "Please Enter sentence"
       };
       } return 'The longest word is: ' + longWord 
   }

   function shortestWord(str) {
    var words = str.split(' ')
    var shortWord = words[0]
    for (const word of words) {
        if (word.length <= shortWord.length) {
        shortWord = word};
    
        if (!str) {
        return "Please Enter sentence"
        };
        } return 'The shortest word is: ' + shortWord
    }

    function wordLengths(str) {
        var sum = 0
           var lengths = str.split(' ').map(a=> a.length)
           for (var i=0; i<lengths.length; i++) {
           sum += lengths[i];
       
           if (!str) {
               return "Please Enter sentence"
           };
           } return 'Sum of the alphabets is: ' + sum
       }