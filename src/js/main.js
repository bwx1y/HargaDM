const tomobolDwn = document.querySelector("#btnDwn");
const tomobolUp = document.querySelector("#btnUp");
const loding = document.querySelector("#loding");

$.getJSON("/src/data/main.json", (data) => {
  $.each(data.MobileLegend, (i, data) => {
    
    $("#mobileLegends").append("<tr><td>" + data.Diamond + " 💎</td><td>" + data.Harga + "</td></tr>");
  });
});
$.getJSON("/src/data/main.json", (data) => {
  $.each(data.FreeFire, (i, data) => {
    
    $("#freeFire").append("<tr><td>" + data.Diamond + " 💎</td><td>" + data.Harga + "</td></tr>");
  });
});
$.getJSON("/src/data/main.json", (data) => {
  $.each(data.Member, (i, data) => {
    $("#member").append(
      '<div class="col-md-4"><div class="card border-dark mb-3" width><h5 class="card-header">' + data.Data + '</h5><div class="card-body"><h5 class="card-title">' + data.Member + "💳</h5><p>" + data.Harga + "</p></div></div></div>"
    );
  });
});

$("#btnDwn").click((e) => {
  e.preventDefault();
  $("#btnDwn").toggleClass("d-none");
  $("#btnUp").toggleClass("d-none");
  setTimeout(() => {
    $("#loding").toggleClass("d-none");
    $("#list").toggleClass("d-none");
    $("#member").toggleClass("d-none");
  }, 3000);
  $("#loding").toggleClass("d-none");
});
$("#btnUp").click((e) => {
  e.preventDefault();
  $("#btnDwn").toggleClass("d-none");
  $("#btnUp").toggleClass("d-none");
  $("#list").toggleClass("d-none");
  $("#member").toggleClass("d-none");
});
