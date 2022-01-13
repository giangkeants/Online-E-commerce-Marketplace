// let page = document.getElementsByName()
//
// $("a[href*='" + location.pathname + "']").addClass("active");

jQuery(document).ready(function () {
    const queryParam = new URLSearchParams(window.location.search);
    const page = parseInt(queryParam.get("page"));
    if (!page || page === 1) {
        document.getElementById("prev-page-item").style =
            "color: white; background-color: #ff7a5f; margin-right: 5px;margin-left:5px";
    } else {
        document.getElementById("curr-page-item").style =
            "color: white; background-color: #ff7a5f; margin-right: 5px;margin-left:5px";
    }
})