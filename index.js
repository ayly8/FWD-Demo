function display_ans() {
   const ans = ["It is certain", "Without a doubt", "Yes definitely",
               "Reply hazy, try again", "Ask again later", "Cannot predit",
               "Don't count on it", "My reply is no", "Very doubtful"];

   const rand_ans = ans[(Math.floor(Math.random() * ans.length))];
   document.getElementById("answer").innerHTML = rand_ans;
}