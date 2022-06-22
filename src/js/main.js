const tomobolDwn = document.querySelector("#btnDwn");
const tomobolUp = document.querySelector("#btnUp");
const loding = document.querySelector("#loding");

$.getJSON("/src/data/main.json", (data) => {
  $.each(data.MobileLegend, (i, data) => {
    console.log(data);
    $("#mobileLegends").append("<tr><td>" + data.Diamond + " 💎</td><td>" + data.Harga + "</td></tr>");
  });
});
$.getJSON("/src/data/main.json", (data) => {
  $.each(data.FreeFire, (i, data) => {
    console.log(data);
    $("#freeFire").append("<tr><td>" + data.Diamond + " 💎</td><td>" + data.Harga + "</td></tr>");
  });
});
$.getJSON("/src/data/main.json", (data) => {
  $.each(data.Member, (i, data) => {
    console.log(data);
    $("#member").append(
      '<div class="col-md-4"><div class="card border-dark mb-3"><h5 class="card-header">' + data.Data + '</h5><div class="card-body"><h5 class="card-title">' + data.Member + "💳</h5><p>" + data.Harga + "</p></div></div></div>"
    );
  });
});

$("#btnDwn").click((e) => {
  e.preventDefault();
  $("#btnDwn").toggleClass("d-none");
  $("#btnUp").toggleClass("d-none");
  setTimeout(() => {
    $("#loding").remove();
    $("#list").toggleClass("d-none");
    $("#member").toggleClass("d-none");
  }, 3000);
  $("#loding").append('<div class="col-12 spinner-border"><span class="visually-hidden"></span></div>');
});
$("#btnUp").click((e) => {
  e.preventDefault();
  $("#btnDwn").toggleClass("d-none");
  $("#btnUp").toggleClass("d-none");
  $("#list").toggleClass("d-none");
  $("#member").toggleClass("d-none");
});
