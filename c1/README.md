1. https://git-scm.com 에 접속하여 Git-2.27.0-64-bit를 다운로드 하여 설치 
2. 설치시 두번째 대화상자의 선택 옵션에서 use Git from the windows command Orompt 선택하여 설치.
3. 설치 완료 후 git bash 실행
4. 기본버전 "git--version, 도움말은? git--help 
5. github.com 접속 하여 로그인 
6. git bash 에서 프로젝트 폴더 만듦. mkdir 명령어로 code-test 파일 생성
ex1) cd d:\;
ex2) mkdir bya
ex3) cd bya
ex4) mkdir test-code
ex5) li -al (공백필수)

7. gitbash 입력창에 ssh-keygen 명령어 입력.암호키 생성.(곧장 엔터)

8. 키젠은 사용자 폴더에 ssh에 있음. 내컴퓨터에 생성된 키젠이 있는 디렉토리로 이동해서 id_rsa.pub파일을 찾아 열고 그 안의 내용을 복사하기 한다.

9. git config --global user.namestudyuanngithub에서 가장오른쪽 메뉴에서 settings에서 8번째 SSH and GPG선택 

10. SSH keys 항목의 [new SSH Key]버튼을 눌러 나오는 창에 title:ssh key 

key: 복사하기한 id_rsa.pub파일의 내용을 붙여넣기 하여 키 등록 
11. git config --global user .name "사용자 아이디"
git config --global user .email "사용자 이메일 주소"

12. git bash 에서 해당 프로젝트 디렉토리 초기화
git init

프로젝트 개발코드 입력하고 저장
README.md 작성

git bash에서 관리목록으로 추가
git add 파일명 또는 git add. 

git의 상태보기(빨간색은 아직 add하지 않은 것, 초록색은 add한 내용 )
git status

작업한 내용의 메세지를 기록
git commit -m "커밋 할 메시지(작업내용)"
원격저장소 지정
git remote add origin 해당 레포지토리 주소
(~.git)
원격저장소에 업로드 
git oush -u  origin master

해당하는 아이디나 이메일, 패스워드를 물어볼 경우 입력하면 업로드 성공
