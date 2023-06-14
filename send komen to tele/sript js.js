function kirimKomentar() {
  var komentar = document.getElementById("comment").value;
  var chatID = "ID obrolan"; // Ganti dengan ID obrolan Telegram yang dituju
  var token = "6091331676:AAEIpP_HFdoKTP9sADc5TF28KA4jcaWq6MY"; // Ganti dengan token bot Telegram Anda
  
  var url = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatID + "&text=" + komentar;
  
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();
  
  alert("Komentar terkirim!");
}
