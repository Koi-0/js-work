// 스크롤 이벤트

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// window.addEventListener("scroll", () => {
//     if (scrollY > 100) {
//         document.querySelector(".up-button").style.display = "block";
//     } else {
//         document.querySelector(".up-button").style.display = "none";
//     }
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 변수 추가하기

const upButton = document.querySelector(".up-button");

// window.addEventListener("scroll", () => {
//     if (scrollY > 100) {
//         upButton.style.display = "block";
//     } else {
//         upButton.style.display = "none";
//     }
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// class로 변경하기

window.addEventListener("scroll", () => {
    console.log({ scrollY });
    if (scrollY > 100) {
        upButton.classList.add("show");
    } else {
        upButton.classList.remove("show");
    }
});

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 버튼 클릭 시 스크롤을 맨 위로 올리기

upButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
