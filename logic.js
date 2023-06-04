
let userPics = document.getElementsByClassName('userpic');
let userTexts = document.getElementsByClassName('testimonialdetail');

function changeTheme() {
    document.body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode")){
        document.getElementsByClassName("themetoggle")[0].innerHTML = `<i class="fa-regular fa-moon" style="color: #ffffff;"></i>`;
    }
    else{
        document.getElementsByClassName("themetoggle")[0].innerHTML = `<i class="fa-sharp fa-regular fa-sun"></i>`;
    }
}

// x = document.getElementsByClassName('usertestimonial')[0];
// x.innerHTML = usertestimoniallist[0];
function showReview() {
    for (userPic of userPics) {
        userPic.classList.remove('activeuser');
    }
    for (userText of userTexts) {
        userText.classList.remove('activeusertext');
    }

    let i = Array.from(userPics).indexOf(event.target);
    userPics[i].classList.toggle('activeuser');
    userTexts[i].classList.toggle('activeusertext');
    // x.innerHTML = usertestimoniallist[i];
}
