// window.onload = function (event) {
//   document.querySelector('.overlayfull').style.display = 'flex';
// }

// document.querySelector('.enterBtn').addEventListener('click', closeOverlay)
// function closeOverlay() {
//   document.querySelector(".overlayfull").style.display = "none";
// };

const overlays = [...document.querySelectorAll(".overlay")];
const infoBtns = [...document.querySelectorAll(".info")];

let timer;

//Info button opens overlay for single image
infoBtns.forEach((btn) => {
  btn.addEventListener("click", openInfo);

  function openInfo(e) {
    let btnID = e.target.parentNode.id;
    for (let overlay of overlays) {
      if (btnID == overlay.id) {
        overlay.classList.add("show")
        btn.style.display = "none";
        closeModal(overlay, btn);
      }
    }
  }
});


//Click anywhere to close overlay with textbox
overlays.forEach(overlay => {
  overlay.addEventListener("click", () => {
    if (event.target.classList.contains("del")) {
      for (let btn of infoBtns) {
        overlay.classList.remove("show")
        btn.style.display = "flex";
        clearTimeout(timer);
      }
    }
  })

})


//Overlay closes after x seconds
function closeModal(overlay, btn) {
  timer = setTimeout(() => {
    overlay.classList.remove("show")
    btn.style.display = "flex";
  }, 10000);
  return () => {
    clearTimeout(timer)
  }

}


// Scroll to top
const scrollBtn = document.querySelector(".scrollBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 550 || window.pageYOffset > 550) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//Date and time header
function showCurrentTime() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;

  let year = date.getFullYear();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  const today = day + "/" + month + "/" + year;
  const time = hours + ":" + minutes + ":" + seconds;

  document.querySelector(".time").textContent = time;
  document.querySelector(".date").textContent = today;
}

setInterval(() => {
  showCurrentTime();
}, 1000);


//show/hide 'mind the gap' text
const arrow = document.querySelector('.arrowDown')
document.querySelector('.icon').addEventListener('click', function () {
  (arrow.style.height == '1rem' || arrow.style.height == '') ? arrow.style.height = '50rem' : arrow.style.height = '1rem';
  // Rotate fa-angle-double-down 
  document.querySelector('.rotate').classList.toggle('down')
})


// Toggle english/dutch version of 'mind the gap' text
const banners = document.querySelectorAll('.banner')
banners.forEach(banner => {
  banner.addEventListener('click', function () {
    const box = document.querySelector('.textBox')
    const box2 = document.querySelector('.textBox2')

    banner.id === "english" ? (box.style.display = "none", box2.style.display = "flex") : (box.style.display = "flex", box2.style.display = "none")

    // if (banner.id === "english") {
    //   box.style.display = "none";
    //   box2.style.display = "flex"
    // } else if (banner.id === "dutch") {
    //   box.style.display = "flex"
    //   box2.style.display = "none"
    // }

  })
})


// Helper to find individual paintings by classname  .img- + 'number'

// const bigPictures = [...document.querySelectorAll('.bigPic')]
// const namePainting = [...document.querySelectorAll('.namePainting')]

// function showPaintingTitle() {
//   bigPictures.forEach((pic, index) => {
//     for (let el of namePainting) {
//       let ID = parseInt(el.id)
//       if (index === ID) {
//         pic.addEventListener('mouseover', function () {
//           el.style.opacity = '1'
//         })
//         pic.addEventListener('mouseout', function () {
//           el.style.opacity = '0'
//         })
//       }
//     }
//   })
// }
// showPaintingTitle();

