
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDw-Lg1Fv5jCKRtdQ5298jKQ9BNhenEMVo",
      authDomain: "kwitter-76427.firebaseapp.com",
      databaseURL: "https://kwitter-76427-default-rtdb.firebaseio.com",
      projectId: "kwitter-76427",
      storageBucket: "kwitter-76427.appspot.com",
      messagingSenderId: "977528000612",
      appId: "1:977528000612:web:e5b8cc3f0d02dac56acf71"
    };
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    console.log(user_name);

function addRoom() {
      room_name = document.getElementById("room_name").value;
      console.log(room_name);
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name", room_name);      
      window.location = "kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name = " + room_name);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}