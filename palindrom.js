function isPalindrome(str) {
    // স্ট্রিংকে ছোট হাতের অক্ষরে রূপান্তর করা
    str = str.toLowerCase();
    
    // স্ট্রিংয়ের উল্টা অংশ তৈরি করা
    let reversedStr = str.split('').reverse().join('');
    
    // মূল স্ট্রিং এবং উল্টা স্ট্রিং তুলনা করা
    return str === reversedStr;
}

// উদাহরণ:
console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("Hello")); // false