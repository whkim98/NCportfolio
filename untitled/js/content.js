function showContent(number) {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = ""; // 기존 내용 초기화

    if (number === 1) {
        contentDiv.innerHTML = "<ul><li>Content 1 - Item 1</li><li>Content 1 - Item 2</li></ul>";
    } else if (number === 2) {
        contentDiv.innerHTML = "<ul><li>Content 2 - Item 1</li><li>Content 2 - Item 2</li></ul>";
    } else if (number === 3) {
        contentDiv.innerHTML = "<ul><li>Content 3 - Item 1</li><li>Content 3 - Item 2</li></ul>";
    }
}