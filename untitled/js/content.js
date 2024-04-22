function showContent(contentId) {
    var contentElement = document.getElementById("content");
    contentElement.innerHTML = ""; // 기존 내용 초기화

    var text;
    var textWidth;

    if (contentId === 1) {
        // Skills 버튼 클릭 시
        text = "Skills";
        contentElement.innerHTML = "<ul><li>JAVA</li><li>Spring Boot</li><li>HTML / CSS / JS</li></ul>";
    } else if (contentId === 2) {
        // Educations 버튼 클릭 시
        text = "Educations";
        contentElement.innerHTML = "<ul><li>Content 2 - Item 1</li><li>Content 2 - Item 2</li></ul>";
    } else if (contentId === 3) {
        // Certifications 버튼 클릭 시
        text = "Certifications";
        contentElement.innerHTML = "<ul><li>Content 3 - Item 1</li><li>Content 3 - Item 2</li></ul>";
    }

    textWidth = getTextWidth(text); // 텍스트의 길이를 가져옴
    barElement.style.width = textWidth + "px"; // 막대의 길이를 텍스트의 길이에 맞게 설정
    contentElement.appendChild(barElement); // 막대를 콘텐츠 요소에 추가
}

