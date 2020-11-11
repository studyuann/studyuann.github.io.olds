<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="common.css">
</head>
<body>
	<div class="joinForm">
		<jsp:include page="index_header.jsp"></jsp:include>
		 <section class="renew_joinform_v2">
         <p class="find_form_txt">
            <span class="t_006633">Welcome!</span><br class="for_mob"> 스타벅스커피 코리아에 오신 것을 환영합니다.
         </p>
        
        <div class="renew_input_box bd_none">
            <label for="txt_user_id" class="hid">아이디</label><!-- 접근성_20171120 라벨 추가 -->
            <input class="login_id mb10" id="txt_user_id" name="user_id" type="text" maxlength="20" placeholder="아이디를 입력해 주세요." required="required"><!-- 접근성_20171120 required 추가 -->
            <p class="limit_txt user_id_txt"></p>
            <label for="txt_user_pwd" class="hid">비밀번호</label><!-- 접근성_20171120 라벨 추가 -->
            <input class="login_pw mb10" id="txt_user_pwd" name="user_pwd" type="password" maxlength="20" placeholder="비밀번호를 입력해 주세요." required="required" autocomplete="off"><!-- 접근성_20171120 required 추가 , 20181025_autocomplete="off" 추가 -->
            <p class="limit_txt user_pwd_txt"></p>
            <!-- 접근성_20171120 포커스:  추가 -->
            <span class="checkWrap">
                <input type="checkbox" name="idRemb" id="idRemb" class="mem2">
                <label for="idRemb">아이디 저장</label>
            </span>
            <!-- 접근성_20171120 포커스:  추가 끝 -->
            <p class="btn_mem_login">
                <a class="btn_login" href="javascript:void(0);" role="submit">로그인</a><!-- 접근성_20171120 role 추가 -->
            </p>
            <p class="input_warn_text t_006633">
                * 타 사이트와 비밀번호를 동일하게 사용할 경우 도용의 위험이 있으므로, 정기적인 비밀번호 변경을 해주시길 바랍니다.<br>
                * 스타벅스 커피 코리아의 공식 홈페이지는 Internet Explorer 9.0 이상, Chrome, Firefox, Safari 브라우저에 최적화 되어있습니다.
            </p>
        </div>
        <div class="login_btn_wrap">
            <ul>
                <li><a href="/mem/join1.do">회원가입</a></li>
                <li><a href="/mem/find_id1.do">아이디 찾기</a></li>
                <li class="last"><a href="/mem/find_pwd1.do">비밀번호 찾기</a></li>
            </ul>
        </div>
    </section>
		<jsp:include page="index_footer.jsp"></jsp:include>
	</div>
</body>
</html>