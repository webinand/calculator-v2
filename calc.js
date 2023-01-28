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
    screen.textContent += btntext;
  });
}

function sin() {
  screen.textContent = Math.sin(screen.textContent);
}
function per() {
  screen.textContent = screen.textContent / 100;
}

function cos() {
  screen.textContent = Math.cos(screen.textContent);
}

function tan() {
  screen.textContent = Math.tan(screen.textContent);
}

function pow() {
  screen.textContent = Math.pow(screen.textContent, 2);
}

function sqrt() {
  screen.textContent = Math.sqrt(screen.textContent, 2);
}

function log() {
  screen.textContent = Math.log(screen.textContent);
}

function pi() {
  screen.textContent = 3.14159265359;
}

function e() {
  screen.textContent = 2.71828182846;
}

function fact() {
  var i, num, f;
  f = 1;
  num = screen.textContent;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  i = i - 1;

  screen.textContent = f;
}

function backspc() {
  screen.textContent = screen.textContent.substr(
    0,
    screen.textContent.length - 1
  );
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
    // console.log(input);
    document.getElementById("screen").textContent = input;
    setTimeout(function () {
      evaluate(input);
    }, 2000);
    microphone.classList.remove("record");
  };
};
function evaluate(input) {
  try {
    var result = eval(input);
    document.getElementById("screen").textContent = result;
  } catch (e) {
    console.log(e);
    document.getElementById("screen").textContent = "";
  }
}

// END OF MICROPHONE
