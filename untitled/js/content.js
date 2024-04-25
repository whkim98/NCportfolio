// 헤더를 가져와서 삽입하는 함수
function includeHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });
}

// 페이지 로드 시 헤더를 삽입
window.onload = function() {
    includeHeader();
    showContent(1);
};

function showContent(contentId) {
    var contentElement = document.getElementById("content");
    contentElement.innerHTML = ""; // 기존 내용 초기화

    var text;
    var textWidth;
    // const contentInfo =[
    //     {
    //         contentId : 1
    //
    //     },
    //     {
    //
    //     }]
    //객체로 생성해서 li 다시 ㄱㄱ

    if (contentId === 1) {
        // Skills 버튼 클릭 시
        text = "Skills";
        // const arr = ["JAVA", ] //배열로
        btn.classList.remove('active');
        contentElement.innerHTML = "<ul><li class='contentLi'>JAVA</li><li class='contentLi'>Java Script</li><li class='contentLi'>MySQL</li><li class='contentLi'>Oracle DB</li></ul>";
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

    // About 섹션으로 스크롤 이동
    if (contentId === 1) {
        var aboutSection = document.getElementById("about");
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}

document.querySelectorAll('button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');

function filterSelection(category) {
    var items = document.getElementsByClassName('project-item');

    if (category === 'all') {
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'block';
        }
    } else {
        for (var i = 0; i < items.length; i++) {
            if (items[i].classList.contains(category)) {
                items[i].style.display = 'block';
            } else {
                items[i].style.display = 'none';
            }
        }
    }
}

// 각 버튼에 대한 클릭 이벤트 핸들러 추가
document.querySelectorAll('.projects button').forEach(function(btn) {
    btn.addEventListener('click', function() {
        // 현재 활성 버튼인지 확인
        var isActive = this.classList.contains('active');
        // 모든 프로젝트 아이템 숨기기
        document.querySelectorAll('.project-item').forEach(function(item) {
            item.style.display = 'none';
        });
        // 모든 버튼에서 활성 클래스 제거
        document.querySelectorAll('.projects button').forEach(function(btn) {
            btn.classList.remove('active');
        });
        // 현재 버튼이 활성 상태가 아니면 해당 카테고리의 프로젝트 아이템 표시
        if (!isActive) {
            filterSelection(this.textContent.toLowerCase());
            // 현재 버튼에 활성 클래스 추가
            this.classList.add('active');
        }
    });
});
