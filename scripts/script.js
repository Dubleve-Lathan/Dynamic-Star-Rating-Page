/*"i"-tagged elements will be stores in a NodeList called "stars" */
const starsNodeList = document.querySelectorAll(".stars i");

starsNodeList.forEach((starNode, index1) => {
    starNode.addEventListener("click", () => {
        starsNodeList.forEach((starNode, index2) => {
            index1 >= index2 ? starNode.classList.add("active") : starNode.classList.remove("active");
        });
    });
});