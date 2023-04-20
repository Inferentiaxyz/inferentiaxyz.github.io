let audio1 = new Audio(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3"
  );
  function chatOpen() {
    document.getElementById("chat-open").style.display = "none";
    document.getElementById("chat-close").style.display = "block";
    document.getElementById("chat-window1").style.display = "block";
  
    audio1.load();
    audio1.play();
  }
  function chatClose() {
    document.getElementById("chat-open").style.display = "block";
    document.getElementById("chat-close").style.display = "none";
    document.getElementById("chat-window1").style.display = "none";
    document.getElementById("chat-window2").style.display = "none";
  
    audio1.load();
    audio1.play();
  }
  function openConversation() {
    document.getElementById("chat-window2").style.display = "block";
    document.getElementById("chat-window1").style.display = "none";
  
    audio1.load();
    audio1.play();
  }
  
  //Gets the text from the input box(user)
  function userResponse() {
    console.log("response");
    let userText = document.getElementById("textInput").value;
  
    if (userText == "") {
      alert("Please type something!");
    } else {
      document.getElementById("messageBox").innerHTML += `<div class="first-chat">
        <p>${userText}</p>
        <div class="arrow"></div>
      </div>`;
      let audio3 = new Audio(
        "https://prodigits.co.uk/content/ringtones/tone/2020/alert/preview/4331e9c25345461.mp3"
      );
      audio3.load();
      audio3.play();
  
      document.getElementById("textInput").value = "";
      var objDiv = document.getElementById("messageBox");
      objDiv.scrollTop = objDiv.scrollHeight;
  
      setTimeout(() => {
        prova(userText);
      }, 1000);
    }
  }

  function prova(userText){
    var myHeaders = {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Methods": "*", 
      "Content-Type": "application/json"
    };
    //myHeaders.append();

    var raw = JSON.stringify({
      "message": userText
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      mode: "cors",
      body: raw,
      redirect: 'follow'
    };

    fetch("https://pvvcczqv7q7ivcdgbf4o7kujva0ltkts.lambda-url.eu-west-3.on.aws/", requestOptions)
    .then(response => response.text())
    .then((adviceData) => {
      let message = JSON.parse(adviceData).response;
      document.getElementById(
        "messageBox"
      ).innerHTML += `<div class="second-chat">
          <div class="circle" id="circle-mar"></div>
          <p>${message}</p>
          <div class="arrow"></div>
        </div>`;
      let audio3 = new Audio(
        "https://downloadwap.com/content2/mp3-ringtones/tone/2020/alert/preview/56de9c2d5169679.mp3"
      );
      audio3.load();
      audio3.play();

      var objDiv = document.getElementById("messageBox");
      objDiv.scrollTop = objDiv.scrollHeight;
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  //admin Respononse to user's message
  function adminResponse(userText) {
    fetch("https://pvvcczqv7q7ivcdgbf4o7kujva0ltkts.lambda-url.eu-west-3.on.aws/", {
      method: "POST",
      mode: 'no-cors',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ message: userText })
    })
      .then((response) => {
        console.log(response)
        return response
      })
      .then((adviceData) => {
        let message = adviceData;
        document.getElementById(
          "messageBox"
        ).innerHTML += `<div class="second-chat">
            <div class="circle" id="circle-mar"></div>
            <p>${message}</p>
            <div class="arrow"></div>
          </div>`;
        let audio3 = new Audio(
          "https://downloadwap.com/content2/mp3-ringtones/tone/2020/alert/preview/56de9c2d5169679.mp3"
        );
        audio3.load();
        audio3.play();
  
        var objDiv = document.getElementById("messageBox");
        objDiv.scrollTop = objDiv.scrollHeight;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  //press enter on keyboard and send message
  addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
      
      const e = document.getElementById("textInput");
      if (e === document.activeElement) {
        userResponse();
      }
    }
  });
  