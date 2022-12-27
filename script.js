let division = document.createElement("div");
let pic = document.createElement("img");
document.body.append(division, pic);
function ten(callback) {
  division.innerText = "10";
  console.log("10");
  setTimeout(callback, 1000);
}
function nine(callback) {
  division.innerText = "09";

  console.log("09");
  setTimeout(callback, 1000);
}
function eight(callback) {
  division.innerText = "08";

  console.log("08");
  setTimeout(callback, 1000);
}
function seven(callback) {
  division.innerText = "07";

  console.log("07");
  setTimeout(callback, 1000);
}
function six(callback) {
  division.innerText = "06";

  console.log("06");
  setTimeout(callback, 1000);
}
function five(callback) {
  division.innerText = "05";

  console.log("05");
  setTimeout(callback, 1000);
}
function four(callback) {
  division.innerText = "04";

  console.log("04");
  setTimeout(callback, 1000);
}
function three(callback) {
  division.innerText = "03";

  console.log("03");
  setTimeout(callback, 1000);
}
function two(callback) {
  division.innerText = "02";

  console.log("02");
  setTimeout(callback, 1000);
}
function one(callback) {
  division.innerText = "01";

  console.log("01");
  setTimeout(callback, 1000);
}
function text(callback) {
  division.innerText = "Happy Independence Day :)";
  pic.src =
    "https://img.inextlive.com/inext/1082022/Independence-Day-2022-wish3.jpg";
  pic.className = "image1";
  console.log("Happy Independence Day :)");
  setTimeout(callback, 1000);
}

ten(() => {
  nine(() => {
    eight(() => {
      seven(() => {
        six(() => {
          five(() => {
            four(() => {
              three(() => {
                two(() => {
                  one(() => {
                    // text(()=>{
                    text();
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
