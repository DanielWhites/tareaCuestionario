let totalPoll = (document.getElementById("pollTotal").innerHTML = polls.length);
document.getElementById("second").innerHTML = polls.length;
let i = 0;

let resultPoll = [];

function startPoll(username) {
  if (typeof username === "string" && username.trim().length === 0) {
    alert("Es necesario que indique su nombre");
  }
  //result.push(username);
  checkPolls(1, 0, 0, 0);
}

function checkPolls(id, idquestion, question, selection) {
  checkNumber(id);

  resultPoll.push({
    id: id,
    idquestion: idquestion,
    question: question,
    selection: selection,
  });

  //al iniciar, ocultamos el mensaje de bienvenida
  document.getElementById("welcome").style.display = "none";
  if (id === 0) {
    //sí es 0 se finaliza el proceso
    finished();
  } else if (id === 100) {
    //llegó al final de las preguntas
    endPoll();
  }

  polls
    .filter((city) => city.id === id)
    .map((resultPoll) => {
      document.getElementById("option").innerHTML = "";
      document.getElementById("question").innerHTML = resultPoll.question;
      options = resultPoll.aswer;
      options.forEach((option) => {
        //Recorremos para imprimir las opcinoes
        const node = document.createElement("li");
        node.setAttribute(
          `onclick`,
          `checkPolls(${option.election}, ${resultPoll.id}, '${resultPoll.question}', '${option.response}')`
        );
        const textnode = document.createTextNode(option.response);
        node.appendChild(textnode);
        document.getElementById("option").appendChild(node);
      });
    });
}

function finished() {
  //al iniciar, ocultamos el mensaje de bienvenida
  document.getElementById("question").style.display = "none";
  document.getElementById("option").innerHTML = "";
  document.getElementById("titleResult").innerHTML =
    "Ha dado por finalizada nuestra encuesta, gracias por su respuesta";
  //console.log(resultPoll);
  optionSelected();
  //showLastPoll()
}

function endPoll() {
  document.getElementById("question").style.display = "none";
  document.getElementById("option").innerHTML = "";
  document.getElementById("titleResult").innerHTML =
    "Gracias por responder nuestra encuesta";

  //console.log(resultPoll);
  optionSelected();
  //showLastPoll()
}

function checkNumber(number) {
  res = number;
  if (res === 100) {
    res = 20;
  }
  return (document.getElementById("first").innerHTML = `${res} de `);
}

function optionSelected() {
  let username = document.getElementById("username").value;
  //console.log(resultPoll);

  //checkAswers
  const checkAswersNode = document.createElement("h5");
  const textCheckAswersNode = document.createTextNode(
    `Gracias por responder ${username} tus respuestas fueron: Detalle:`
  );
  checkAswersNode.appendChild(textCheckAswersNode);
  document.getElementById("checkAswers").appendChild(checkAswersNode);

  resultPoll.forEach((element) => {
    const node = document.createElement("li");
    const textnode = document.createTextNode(
      `${element.question} - ${element.selection}`
    );
    node.appendChild(textnode);
    document.getElementById("resultList").appendChild(node);
  });

  //salvamos

  localStorage.setItem(username, JSON.stringify(resultPoll));

  //...
  var storedNames = JSON.parse(localStorage.getItem(username)); 
  showLastPoll();
}

function showLastPoll() {
  for (let [key, value] of Object.entries(localStorage)) {
    //lastUsername

    let response = JSON.parse(value);
    response.forEach((item) => {
      if (item.id != 1) {
        if (i === 0) {
          const lastUsername = document.createElement("li");
          lastUsername.classList.add("usernameList");
          const valueLastUsername = document.createTextNode(
            `El usuario ${key} respondio:`
          );
          lastUsername.appendChild(valueLastUsername);
          document.getElementById("resultList").appendChild(lastUsername);
        }
        i++;

        const lastUname = document.createElement("li");
        const valueLastUname = document.createTextNode(
          `${item.question} ${item.selection}`
        );
        lastUname.appendChild(valueLastUname);
        document.getElementById("resultList").appendChild(lastUname);
      }
    });
    i = 0;
  }
}

