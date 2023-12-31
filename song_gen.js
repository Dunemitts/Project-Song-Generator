const themeSet = () => {
    let themeChoose = document.getElementById("chosen_thematics").value;
    console.log(themeChoose)
    if (themeChoose == "upbeat"){
        document.getElementById("wrapper").style.backgroundColor = "#F2B279";
        document.getElementById("wrapper").style.color = "black";
        document.getElementById("Song").style.backgroundColor = "#F2D272";
    } else if (themeChoose == "melancholy"){
        document.getElementById("wrapper").style.backgroundColor = "#5D75A6";
        document.getElementById("wrapper").style.color = "#F2E8C9";
        document.getElementById("Song").style.backgroundColor = "#B9B4D9";
    } else if (themeChoose == "original"){
      document.getElementById("wrapper").style.backgroundColor = "#3C7DA6";
      document.getElementById("wrapper").style.color = "black";
      document.getElementById("Song").style.backgroundColor = "#96D2D9";
  }
}
let songName = '';
let artistNameVar = '';

const titleSong = () => {
  songName = $("#id_receiverName").val();
  console.log(songName)
  displaySong();
};

const artistName = () => {
  artistNameVar = $("#id_senderName").val();
  console.log(artistNameVar)
  displaySong();
};

const displaySong = () => {
  if (songName && artistNameVar) {
    let songStr = `<h3>${songName} - ${artistNameVar}</h3>`;
    console.log(songStr)
    $("#Song").html(songStr);
  }
};
  function createParagraph() {
    let matchedSetParagraphs = $("#Song p");
    let paragraphNumber = parseInt($("#id_paragraphNumToCreate").val());
    let paragraphContent = $("#id_freeform").val();
    let para = $(`<p>${paragraphContent}</p>`);
    if (matchedSetParagraphs.length == 0 || paragraphNumber > matchedSetParagraphs.length){
        para.appendTo($("#Song"));
  }
  }
  