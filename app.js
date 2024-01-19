const button = document.getElementById("button");
let cookies = 0; // start cookies count at zero
setInterval(function () {
  cookies = cookies + 1;
  console.log("cookies", cookies);
}, 1000); // 1000 milliseconds == 1 second
const counter = document.getElementById("counter");
