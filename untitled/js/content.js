function showContent(contentId) {
    var contentElement = document.getElementById("content");
    contentElement.innerHTML = ""; // 기존 내용 초기화

    var text;
    var textWidth;

    if (contentId === 1) {
        // Skills 버튼 클릭 시
        text = "Skills";
        contentElement.innerHTML = "<ul><li>JAVA</li><li>Java Script</li><li>MySQL</li><li>Oracle DB</li></ul>";
    } else if (contentId === 2) {
        // Educations 버튼 클릭 시
        text = "Educations";
        contentElement.innerHTML = "<ul><li>AI 활용 소프트웨어 개발 및 응용과정</li><li>클라우드 기반 웹 데브옵스 프로젝트 과정</li></ul>";
    } else if (contentId === 3) {
        // Certifications 버튼 클릭 시
        text = "Certifications";
        contentElement.innerHTML = "<ul><li>SQLD</li><li>ADsP</li><li>컴퓨터 활용 능력 1급</li></ul>";
    }

    textWidth = getTextWidth(text); // 텍스트의 길이를 가져옴
    barElement.style.width = textWidth + "px"; // 막대의 길이를 텍스트의 길이에 맞게 설정
    contentElement.appendChild(barElement); // 막대를 콘텐츠 요소에 추가

    // content.js

    function showContent(contentId) {
        var contentElement = document.getElementById("content");
        contentElement.innerHTML = ""; // 기존 내용 초기화

        var text;
        var textWidth;

        if (contentId === 1) {
            // Skills 버튼 클릭 시
            text = "Skills";
            contentElement.innerHTML = "<ul><li>Content 1 - Item 1</li><li>Content 1 - Item 2</li></ul>";
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
        contentElement.appendChild(barElement);

        // About 섹션으로 스크롤 이동
        if (contentId === 1) {
            var aboutSection = document.getElementById("about");
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

}

