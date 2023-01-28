var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;

    if (btntext == "×") {
      btntext = "*";
    }

    if (btntext == "÷") {
      btntext = "/";
    }
    screen.value += btntext;
  });
}

function sin() {
  screen.value = Math.sin(screen.value);
}

function cos() {
  screen.value = Math.cos(screen.value);
}

function tan() {
  screen.value = Math.tan(screen.value);
}

function pow() {
  screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}

function log() {
  screen.value = Math.log(screen.value);
}

function pi() {
  screen.value = 3.14159265359;
}

function e() {
  screen.value = 2.71828182846;
}

function fact() {
  var i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  i = i - 1;

  screen.value = f;
}

function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}
window.speechR;

// MICROPHONE
var microphone = document.getElementById("microphone");
microphone.onclick = function () {
  microphone.classList.add("record");
  var recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.start();
  operations = {
    plus: "+",
    minus: "-",
    multiply: "*",
    multiplied: "*",
    divide: "/",
    divided: "/",
    reminder: "%",
  };

  recognition.onresult = function (event) {
    var input = event.results[0][0].transcript;
    for (property in operations) {
      input = input.replace(property, operations[property]);
    }
    document.getElementById("screen").innerText = input;
    setTimeout(function () {
      evaluate(input);
    }, 2000);
    microphone.classList.remove("record");
  };
};
function evaluate(input) {
  try {
    var result = eval(input);
    document.getElementById("screen").innerText = result;
  } catch (e) {
    console.log(e);
    document.getElementById("screen").innerText = "";
  }
}

// END OF MICROPHONE
