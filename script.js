let fname = document.getElementById("name");
let fprofession = document.getElementById("profession");
let fage = document.getElementById("age");
let res = document.getElementById("res");

let users = [];
let count = document.getElementById("counter");
let message=document.getElementById("message")

function addUser() {
  res.innerHTML = "";
  let myname = fname.value;
  let myprof = fprofession.value;
  let myage = fage.value;
  if (myname == "" || myprof == "" || myage == "") {
    message.textContent =
      "Error:Please make sure all the fields are filled before adding an employe";
    message.style.color = "red";
    return;
  } else{
    message.textContent = "Success: Employee Added!";
    message.style.color = "green";
  }
  let obj = {
    name: myname,
    profession: myprof,
    age: myage,
  };

  users.push(obj);
  let ol = document.createElement("ol");
  res.appendChild(ol);

  users.forEach((item, i) => {
    let li = document.createElement("li");
    li.setAttribute("id", `li-${i}`);
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteUser(i));
    li.textContent = `${item.name}, ${item.profession}, ${item.age}`;
    li.appendChild(deleteBtn);
    // res.innerHTML +=`
    //     <p>${item.name} , ${item.profession} , ${item.age}</p>

    // `
    ol.appendChild(li);
  });
  count.textContent = `You have ${users.length} Employees`;
  fname.value=""
  fprofession.value=""
  fage.value=""
  fname.focus()
}

function deleteUser(i) {
  message.textContent=""
  res.innerHTML = "";
  users.splice(i, 1);
  let ol = document.createElement("ol");
  res.appendChild(ol);
  users.forEach((item, i) => {
    let li = document.createElement("li");
    li.setAttribute("id", `li-${i}`);
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteUser(i));
    li.textContent = `${item.name}, ${item.profession}, ${item.age}`;
    li.appendChild(deleteBtn);
    // res.innerHTML +=`
    //     <p>${item.name} , ${item.profession} , ${item.age}</p>

    // `
    ol.appendChild(li);
  });
  count.textContent = `You have ${users.length} Employees`;
}
