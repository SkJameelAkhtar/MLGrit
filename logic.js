
let userPics = document.getElementsByClassName('userpic');
let usertestimoniallist = [`<i class="fa-sharp fa-solid fa-quote-left"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat fugiat illum est deserunt odit doloribus sed ipsum reiciendis delectus.`,

    `<i class="fa-sharp fa-solid fa-quote-left"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, facilis commodi? Quos enim esse minus!`,

    `<i class="fa-sharp fa-solid fa-quote-left"></i>Lorem ipsum dolor sit amet.`,

    `<i class="fa-sharp fa-solid fa-quote-left"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tenetur expedita animi est? Dicta illum sed blanditiis ut?`,

    `<i class="fa-sharp fa-solid fa-quote-left"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tenetur expedita animi est? Dicta illum sed blanditiis ut?`,

    `<i class="fa-sharp fa-solid fa-quote-left"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tenetur expedita animi est? Dicta illum sed blanditiis ut?`,

    `<i class="fa-sharp fa-solid fa-quote-left"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tenetur expedita animi est? Dicta illum sed blanditiis ut?`,

    `<i class="fa-sharp fa-solid fa-quote-left"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tenetur expedita animi est? Dicta illum sed blanditiis ut?`,

    `<i class="fa-sharp fa-solid fa-quote-left"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, facilis commodi? Quos enim esse minus!`,

    `<i class="fa-sharp fa-solid fa-quote-left"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, facilis commodi? Quos enim esse minus!`,
];

// let thememode = document.getElementsByClassName('theme')[0];
let bodytheme = document.getElementsByClassName('bodysection')[0];

function changeTheme() {
    document.body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode")){
        document.getElementsByClassName("themetoggle")[0].innerHTML = `<i class="fa-regular fa-moon" style="color: #ffffff;"></i>`;
    }
    else{
        document.getElementsByClassName("themetoggle")[0].innerHTML = `<i class="fa-sharp fa-regular fa-sun"></i>`;
    }
}

x = document.getElementsByClassName('usertestimonial')[0];
x.innerHTML = usertestimoniallist[0];
function showReview() {
    for (userPic of userPics) {
        userPic.classList.remove('activeuser');
    }

    let i = Array.from(userPics).indexOf(event.target);
    userPics[i].classList.toggle('activeuser');
    x.innerHTML = usertestimoniallist[i];
}
