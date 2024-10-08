$(document).ready(function () {
  $("#agree-btn").click(function () {
    $("#quiz-form").removeClass("d-none");
    $("#terms").fadeOut();
  });

  $("#disagree-btn").click(function () {
    alert("You must agree to the terms to take the quiz.");
  });

  $("#quiz").submit(function (event) {
    event.preventDefault();
    let isValid = true;
    $("#quiz input").each(function () {
      if ($(this).val() === "") {
        isValid = false;
        $(this).addClass("is-invalid"); // Add Bootstrap validation class
      } else {
        $(this).removeClass("is-invalid"); // Remove validation class
      }
    });

    if (isValid) {
      const answers = $("#quiz").serializeArray();
      const notaGeral = answers.reduce((value, comb) => {}, 0);
      const notaA1 = answers.reduce((value, comb) => {}, 0);
      const notaA2 = answers.reduce((value, comb) => {}, 0);
      const notaA3 = answers.reduce((value, comb) => {}, 0);
      const notaA4 = answers.reduce((value, comb) => {}, 0);
      const notaA5 = answers.reduce((value, comb) => {}, 0);
      const notaA6 = answers.reduce((value, comb) => {}, 0);
      let resultMessage;

      if (answer === 4) {
        resultMessage = "Congratulations! You got the correct answer.";
      } else {
        resultMessage = "Sorry, that's incorrect. The correct answer is 4.";
      }

      $("#result-message").text(resultMessage);
      $("#quiz-form").fadeOut();
      $("#result-text").removeClass("d-none");
      const indentificacao = $("#personalinfo").val();
      const siape = $("siape").val();
      fetch(
        "https://script.google.com/macros/s/AKfycbzvDpIMseqqj6kADm-cMbFqCeat6ykQSYvqYOG-ILKlG_mZmcBGS8fBpw1105YRcPEWYg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            indentificacao,
            siape,
            notaGeral,
            notaA1,
            notaA2,
            notaA3,
            notaA4,
            notaA5,
            notaA6,
          ]),
        }
      )
        .then((response) => response.json())
        .then((data) => console.log("Success:", data))
        .catch((error) => console.error("Error:", error));
    }
  });
  teste();
});
function teste() {
  fetch(
    "https://script.google.com/macros/s/AKfycbzvDpIMseqqj6kADm-cMbFqCeat6ykQSYvqYOG-ILKlG_mZmcBGS8fBpw1105YRcPEWYg/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        Object.values({
          identificacao: "teste",
          SIAPE: "123456",
          total: 0,
          area1: 0,
          area2: 0,
          area3: 5,
          area4: 4,
          area5: 3,
          area6: 2,
        })
      ),
    }
  )
    .then((response) => console.log(response))
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
  fetch(
    "https://script.google.com/macros/s/AKfycbzvDpIMseqqj6kADm-cMbFqCeat6ykQSYvqYOG-ILKlG_mZmcBGS8fBpw1105YRcPEWYg/exec",
    {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => console.log(response))
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
}
