let x = 0; //텍스트 글씨 좌표 시작 점
let y = 0; //위랑 동일
let stepSize = 8.0; // 텍스트의 이동하는 거리

let font = 'Diphylleia'; // 폰트 변수 추가
//(제가 그린 배경 이미지와 어울리는 폰트를 넣으려고 했습니다.)

let letters =
  '♱ 안녕하세요!! ♱,마법사 여러분! 당신을 ✦✦ 마법의 할로윈파티에 초대합니다! (⊃｡•́‿•̀｡)⊃━☆ﾟ.*・｡ﾟ ✦✦ 신비로운 마법과함께 많은 유령,괴물 친구들이 당신을 기다리고 있어요! 공포스럽고 재미있는 마법의 세계로 당신을 초대합니다!준비가 되었다면, 이곳으로 오세요! 당신이 오길 바라며 기다리고 있겠습니다. 이번 파티는 다양한 선물과 쿠키도 함께 있으니 기대해도 좋습니다! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ 만약 주변에 이 파티에 오고싶어하는 친구들이 있다면 함께 참석해도 좋아요!!- 마법사 ';
let fontSize = 11; //텍스트의 제일 최소 크기
let angle = 0.0; //텍스트가 그려질때의 각도 변화

let counter = 0; //문장 문자 순환하기위해서
let backgImg; // 이미지 변수 추가

function preload() {
  backgImg = loadImage('./script/편지.png');
} //배경에 제가그린 이미지를 집어넣기 위해서 이미지를 로드했습니다.

function setup() {
  createCanvas(windowWidth, windowHeight); //캔버스를 생성
  cursor(CROSS); //커서의 모양을 설정

  x = mouseX; // 시작점 초기화 하기
  y = mouseY;

  textFont(font); // 사용폰트 설정
  textAlign(LEFT); //텍스트 문자 정렬 방식 설정
  fill(255); // 배경이 어두워서 흰색으로 설정
  // 기존의 명조체와 다르게, 원하는 폰트 디자인으로 변경하기위해,
  //여러 방법중에서도 구글 폰트에서 원하는 가져와 스타일CSS(style1)를 만들어 집어넣은다음, 작동하도록 만들었습니다.
  drawBackground(); //배경을 그리기
}

function draw() {
  //마우스를 누르고 움직일때 텍스트가 나오도록 합니다.
  if (mouseIsPressed && mouseButton == LEFT) {
    let d = dist(x, y, mouseX, mouseY); // 전의 위치와 현재의 마우스 위치 사이의 거리를 계산합니다.
    textSize(fontSize + d / 2); //거리에 따라서 텍스트의 크기를 조절합니다.
    let newLetter = letters.charAt(counter); //현재 문자를 가져옵니다.
    stepSize = textWidth(newLetter); //문자의 너비에 따라 거리를 설정합니다.

    if (d > stepSize) {
      // 마우스 이동
      let angle = atan2(mouseY - y, mouseX - x); //텍스트의 회전 각도

      push();
      translate(x, y); // 위치 이동
      rotate(angle + random(angle)); //텍스트를 회전 시키고 왜곡시키기
      text(newLetter, 0, 0);
      pop();

      counter++; // 다음 문자열로 이동

      x = x + cos(angle) * stepSize; //좌표를 업데이트하기
      y = y + sin(angle) * stepSize;
    }
  }
}

function drawBackground() {
  let imgWidth = windowWidth * 0.8; // 이미지 너비를 윈도우의 80%로 설정
  let imgHeight = (backgImg.height * imgWidth) / backgImg.width; // 이미지 비율에 맞게 높이 계산

  let posX = (windowWidth - imgWidth) / 2; // 가로 중앙 정렬을 위한 X 위치 계산
  let posY = (windowHeight - imgHeight) / 2; // 세로 중앙 정렬을 위한 Y 위치 계산
  // 화면을 줄이고 키워도 이미지가 찌그러지지않고, 일정한 규격을 유지할 수 있도록 지정 했습니다.
  image(backgImg, posX, posY, imgWidth, imgHeight); // 이미지 그리기
}

function mousePressed() {
  x = mouseX;
  y = mouseY;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drawBackground(); // 창 크기가 변경될 때 배경 다시 그리기
}

// 한 학기동안 남들에 비해 뒤쳐지고 봐도봐도 너무 어려워 혼자서 .. 여기까지 진행하는것도 매우 버거웠지만,
//그래도 스스로 직접 작품을 만들어보고 해결방안을 찾아보면서, 그동안 배웠던 코드가 도움이 되었습니다.

//제가 참고했던 자료들입니다.(⊃｡•́‿•̀｡)⊃━☆ﾟ.*・｡ﾟ
//구글폰트
//https://fonts.google.com/specimen/Diphylleia?subset=korean&noto.script=Kore

//구글 링크 연동해서 스타일만들어 폰트적용하기
//https://youtu.be/oMBrEJ534PE

//너비 조정/이모지/참고한 사이트
//https://webdir.tistory.com/487
//https://baengsu.tistory.com/28
//https://wepplication.github.io/tools/charMap/#emoticon
//http://www.generative-gestaltung.de/2/

//감사합니다.(*ˊᵕˋ*)੭ ੈ❤
