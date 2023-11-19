let myRequest = new XMLHttpRequest();
myRequest.open("Get", "./../data.json", true);

myRequest.send();

console.log(myRequest);

var arr;
myRequest.onreadystatechange = function() {
  if (myRequest.status === 200 && myRequest.readyState === 4) {
    let jsData = JSON.parse(myRequest.responseText);
    console.log(jsData);
    arr = jsData;
    let div = document.getElementsByClassName("content")[0];
    for (let i = 0; i < jsData.length; i++) {
      div.innerHTML += `<div class="project-card" onclick="goTo()">
                                    <div class="project-image">
                                        <img src="${jsData[i].Images[0]}" />
                                    </div>
                                    <div class="project-info">
                                        <p class="project-category">${jsData[i]
                                          .Genre}</p>
                                        <strong class="project-title">
                                            <span>${jsData[i].Title}</span>
                                            <span>${jsData[i].imdbRating}</span>
                                            <button onclick="save(${i})" class="addtocart"><i class="fas fa-cart-plus"></i></button>
                                        </strong>
                                    </div>
                                </div>
                            
                            `;
    }
  }
};

function search() {
  var text = document.getElementById("ser").value;
  var div = document.getElementsByClassName("content")[0];
  div.innerHTML = "";

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].title.toLowerCase().indexOf(text.toLowerCase()) > -1) {
      div.innerHTML += `<div class="project-card" onclick="goTo()">
                                    <div class="project-image">
                                        <img src="${arr[i].thumbnail}" />
                                    </div>
                                    <div class="project-info">
                                        <p class="project-category">${arr[i]
                                          .brand}</p>
                                        <strong class="project-title">
                                            <span>${arr[i].title}</span>
                                            <span>${arr[i].price} $</span>
                                            <button onclick="save(${i})" class="addtocart"><i class="fas fa-cart-plus"></i></button>
                                        </strong>
                                    </div>
                                </div>
                            
                            `;
    }
  }
}

var cart = [];
function save(index) {
  cart.push(arr[index]);

  localStorage.setItem("cart", JSON.stringify(cart));
}

// window.addEventListener("load", () => {
//   const params = new URL(document.location).searchParams;
//   const email = params.get("email");
//   document.getElementById("showemail").innerHTML = email;
// });

function goTo() {
  location.href = "Seats.html";
  var nameAgain = document.getElementById("titleCal").value;
  var ch = 0;
}

///// LocalStorage For Registration
function AddData() {
  var userName = document.getElementById("userName").value;
  var userEmail = document.getElementById("userEmail").value;
  var pwd = document.getElementById("pass").value;
  var users = JSON.parse(localStorage.getItem("users"));

  if (users != null) {
    var flag = false;
    for (var index = 0; index < users.length; index++) {
      if (users[index].userEmail == userEmail) {
        flag = true;
      }
    }
  
    if (flag) {
      alert("this Email is already used");
    } else {
        users.push({
            "username": userName,
            "userEmail": userEmail,
            "password": pwd
          })
      localStorage.setItem(
        "users",
        JSON.stringify(users)
      );
      alert("done")
      goToLogin();
    }
}
else {
    var users = [];
    users.push({
        username: userName,
        userEmail: userEmail,
        password: pwd
      })
  localStorage.setItem(
    "users",
    JSON.stringify(users)
  );
      alert("done")
    //   var reName = document.getElementById("homy");
    //   reName.style.color = "red";
      goToLogin();
}
 

  //   userRecords = JSON.parse(localStorage.getItem("users"))
  //   if(userRecords.length >0)
  //   {
  //         if(!userRecords.has(userMail)){
  //             userRecords.add(userMail)
  //         }
  //   }
  //   if (
  //     userRecords.some(v => {
  //       return v.userMail == userMail;
  //     })
  //   )
  //     alert("Dup Data");

  //   else {
  //     userRecords.push({
  //       "email": userMail,
  //       "password": pwd
  //     });
  //     localStorage.setItem("users", JSON.stringify(userRecords));
  //   }

  // localStorage.setItem('userEmail',userMail);
  // localStorage.setItem('UserPassword',pwd);
}

function goToHis() {
  location.href = "History.html";
}

function goHome() {
  location.href = "index.html";
}
function goToWhatsapp() {
  location.href = "https://wa.me/qr/52SR46D2WJFRJ1";
}

function goToLogin() {
  location.href = "login.html";
}

function logFun() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Store user login information in local storage
//   localStorage.setItem(username, password);

  // Retrieve user login information from local storage
//   var users = localStorage.getItem("users");
  var users = JSON.parse(localStorage.getItem("users"));
var plag=false;
  for(var it=0;it<users.length;it++)
  {
    if(users[it].userEmail==username && users[it].password==password)
    {
        plag=true;
    }
  }
  if(plag)
  {
    goHome();
  }
  else
  {
    alert("Wrong mail or password")
  }
//   if (password === storedPassword) {
//     alert("Login successful");
//     goHome();
//     var reName = document.getElementById("picsy").value;
//     reName.style.color = "red";
//   } else {
//     alert("Incorrect username or password");
//   }
}
