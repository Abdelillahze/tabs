let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let content = document.querySelectorAll(".content > div");
let contentArray = Array.from(content);


tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        let tabIndex = tabsArray.indexOf(e.currentTarget)
        contentArray.forEach((div) => {
            div.style.display = "none";
            contentArray[tabIndex].style.display = "block"
        })
    })
})
