/**
 * Function: display_ans()
 * This function does not take in any parameters and will update the html file in return
 * 
 * It creates an array, ans, that holds the magic 8 ball answer responses.
 * 
 * Then it creates a variable, rand_ans, that will store a random element of that array.
 * 
 * Logic:
 * 1. Use Math.random() to return a random number between 0 - 1
 * 2. Multiply that number by the length of the array: (Math.random() * ans.length)
 * 3. Use Math.floor() to round that number down: (Math.floor(Math.random() * ans.length))
 * 4. Use that value to get a random element of the array: ans[(Math.floor(Math.random() * ans.length))]
 * 5. Store the random element into the variable: const rand_ans = ans[(Math.floor(Math.random() * ans.length))];
 * 
 * Last it updates the html by getting the element by finding its matching id and updating it accordingly:
 * document.getElementById("answer").innerHTML = rand_ans;
 * This means it is finding the element in the html file with the id "answer" and updating it to the rand_ans text
 */

function display_ans() {
   const ans = ["It is certain", "Without a doubt", "Yes definitely",
               "Reply hazy, try again", "Ask again later", "Cannot predit",
               "Don't count on it", "My reply is no", "Very doubtful"];

   const rand_ans = ans[(Math.floor(Math.random() * ans.length))];
   document.getElementById("answer").innerHTML = rand_ans;
}