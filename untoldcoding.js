const text = ("My Dear Meowww<3 , Hii kaisii hoo I hope acchi ho healthy ho everything is fine uncle aunty bhaiya sb theek hai☺️  aaj 2nd june 2024 hmara aaj 1.5 years complete hogya relationship ka aur aaj se 1.6th year start horha🙈  Happy happy wishes aapko to you 😁🥰💖 Mere liye to Mera Babuu Tanishiii<3 hi ho aap😁. Pta hai without you it feels so lonely lonely idk it seems all the colours from my life has faded away just like my skin colour (all black me)👤. Tanishiii<3 every single day, night, hour ,minutes, seconds, milliseconds.... I miss you so much bhot ssaara and seriously most of the times I am found crying in my room, in my helmet while riding, under the shower, bethe bethe eshi tapak jata soch ke, bss pta hai kya dimaag me ata hai, kaise? Kyuu? Kaise hogya kya hogya ye sb  fir roke khud ko koslete hai fir jo kaam krna hai karte hai fir whi loop chlta hai. Bas lgta hai kaise b krke thik hojaye sb I am giving my best se bhi best to improve my behavior and to became a perfect man for you bs bhagwanji pe bharosa hai aur universe pe ki sab thik hojayega 💕  I know Tanishiii<3 aap merse pareshan ho hurt ho par hm whi sudharna chahte hai sb thik karna chahte hai ki aage se aappko hurt nahi ho hmko apne galti ka regret hai bhot regret hai I am ready to do anything for you Tanishiii<3 bs lgta hai kese b krke sb thik hojaye uske liye chahe hmko jo krna prre hm ready hai. Without you Tanishiii<3 even a minute feels like an hour, mere paas itni saaari baatein hai good news bad news sb btane ko aapki baatein sunn ne ko uncle aunty ki bhaiya ki tannu di qt ki basu shivam gabbu sb ki 😭😭😭😭 literally tarap rahe hai. Bas I am begging for a last chance so that I can correct my mistakes and live forever with you Tanishiii<3 ❤️ I lovee youuu bhot saaraaaa bhot bhot bhott infinite muchh Merii pyaari Tanishiii<3 Meowwww<3 Meri Babuuuu Tanishiii<3 Jaan Babyyy Babuuu Bacchaa Cutiiieeeee😚 Cutuuuu Guchu guchuuu Merii Jaaneman💓 aur Meowww<3 ke bina to Battak adhura haina meri Jaan!😭💝");

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();

