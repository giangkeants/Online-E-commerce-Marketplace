function handleChooseImgOnchange() {
    const img = document.getElementById("image_url").files[0];
    const avatar_url = URL.createObjectURL(img);
    const avatar = document.getElementById("avatar");
    avatar.setAttribute("src", avatar_url);
}

document.getElementById("image_url").onchange = handleChooseImgOnchange;