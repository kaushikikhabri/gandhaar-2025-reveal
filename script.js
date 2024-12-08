// Animation Timeline
var basicTimeline = anime.timeline({
  autoplay: false,
});

basicTimeline
  .add({
    targets: ".button",
    duration: 1300,
    height: 10,
    width: 300,
    backgroundColor: "#2B2D2F",
    border: "0",
    borderRadius: 100,
    begin: function () {
      // Remove button text when animation starts
      document.querySelector(".button").textContent = "";
    },
  })
  .add({
    targets: ".progress-bar",
    duration: 2000,
    width: 300,
    easing: "linear",
  })
  .add({
    targets: ".button",
    width: 0,
    duration: 1,
  })
  .add({
    targets: ".progress-bar",
    width: 0,
    height: 0,
    duration: 750,
    easing: "easeInOutSine",
    complete: function () {
      const progressBar = document.querySelector(".progress-bar");
      const finalText = document.querySelector(".final-text");
      const button = document.querySelector(".button");
      progressBar.style.display = "none"; // Hide progress bar
      finalText.style.display = "flex"; // Show final text
      button.style.display = "none"; // Hide button completely
    },
  });

document
  .querySelector(".button-container")
  .addEventListener("click", function () {
    basicTimeline.play();
  });
