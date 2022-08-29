let url = 'http://127.0.0.1:5501/'
patient_id = 1;

async function getData() {
  let response = await fetch(url);
  let resp = await response.json();
  console.log(resp.message);
  // let disp_pat = document.getElementById("table1");
  let t_body = document.getElementById("tableBody");
  t_body.innerHTML = ''
  for (i = 0; i < resp.message.length; i++) {
    t_body.innerHTML += '<tr>' +
      '<td>' + resp.message[i][0] + '</td>' +
      '<td>' + resp.message[i][1] + '</td>' +
      '<td>' + resp.message[i][2] + '</td>' +
      '<td>' + resp.message[i][3] + '</td>' +
      '<td>' + resp.message[i][4] + '</td>';
  }
  document.getElementById("table1").appendChild(t_body);

}

async function sendData() {
  let firstname = document.getElementById("fname").value;
  let lastname = document.getElementById("lname").value;
  let gender = document.getElementById("gender").value;
  let age = document.getElementById("age").value;
  document.getElementById("fname").innerText = "";
  document.getElementById("lname").innerText = "";
  document.getElementById("gender").innerText = "";
  document.getElementById("age").innerText = "";

  let inputdata = {
    patient_id: patient_id,
    firstname: firstname,
    lastname: lastname,
    gender: gender,
    age: age,
  };

  let response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputdata),
  });
  patient_id += 1;
  let respdata = await response.text();
  console.log(respdata);

  let elem = document.getElementById("op");
  elem.innerHTML = respdata;
  document.elem.appendChild(elem);
}

document.querySelector("#getdata").addEventListener("click", getData);
document.querySelector("#savedata").addEventListener("click", sendData);