/* lnb drop menu */
function lnb_drop_menu(){
	var lnb_time;
	$(".lnb_wrap .lnb_area .lnb_list li a").bind('focusin mouseenter', function(){
		$(".lnb_wrap .lnb_area .lnb_list li").removeClass("on")
		$(this).parent().addClass("on")
		var idx = $(this).parent().index();
		clearTimeout(lnb_time);
		$(".lnb_drop_wrap .lnb_drop_area .lnb_drop_list_wrap .lnb_drop_list_area").hide();
		$(".lnb_drop_wrap .lnb_drop_area .lnb_drop_list_wrap .lnb_drop_list_area").eq(idx).show();
		if ($(".lnb_drop_wrap").css("display") == "none"){
			$(".lnb_drop_wrap").slideDown();
		}

		if(idx == 6){
			$(".lnb_drop_wrap").addClass("gangnam_cha_wrap");
		}else{
			$(".lnb_drop_wrap").removeClass("gangnam_cha_wrap");
		}
	});

	$(".lnb_drop_wrap").bind('focusin mouseenter', function(){
		clearTimeout(lnb_time);
	});

	$(".lnb_drop_wrap").bind('focusout mouseleave', function(){
		lnb_time = setTimeout(function(){
			$(".lnb_drop_wrap").slideUp({complete:function(){
				$(".lnb_drop_wrap .lnb_drop_area .lnb_drop_list_wrap .lnb_drop_list_area").hide();
				$(".lnb_wrap .lnb_area .lnb_list li").removeClass("on")
			}});
		},500)
	});
};



/* footer toggle */
function footer_toggle(){
	$(".footer_area .group_site_toggle").click(function(){
		if($(".group_site_wrap").css("display") == "block"){
			$(this).removeClass("on")
			$(".group_site_wrap").slideUp();
		}else{
			$(this).addClass("on")
			$(".group_site_wrap").slideDown();
		}
	});

	$(".footer_area .agencies_toggle").click(function(){
		if($(".agencies_wrap").css("display") == "block"){
			$(this).removeClass("on")
			$(".agencies_wrap").slideUp();
		}else{
			$(this).addClass("on")
			$(".agencies_wrap").slideDown();
		}
	});
};


/* faq */
function faq_fn(){
	$(".faq_list > li > a").click(function(){
		if($(this).next(".faq_con").css("display") == "block"){
			$(this).parent("li").removeClass("on");
			$(this).next(".faq_con").slideUp();
		}else{
		    $(this).parent("li").addClass("on");

		    if ($(".faq_list").hasClass("pop")) {
		        $(".faq_con").slideUp();
		    }
		    
			$(this).next(".faq_con").slideDown();
		}
	});
};


/* medical schedule */
function medical_schedule() {
    $(".schedule_btn_tab .schedule_tab a").click(function () {
        var idx = $(this).index();

        if ($(this).hasClass("btn_arr")) {
            if ($(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area").css("display") == "block") {
                $(this).parents(".medical_schedule_con_area").find(".schedule_btn_tab .schedule_tab a").removeClass("on");
                $(this).parents(".schedule_tab").removeClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area").slideUp({
                    complete: function () {
                        $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area .schedule_tab_con").removeClass("on");
                    }
                });
            } else {
                $(this).parents(".medical_schedule_con_area").find(".schedule_btn_tab .schedule_tab a").removeClass("on");
                $(this).addClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_btn_tab .schedule_tab a").eq(0).addClass("on");
                $(this).parents(".schedule_tab").addClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area .schedule_tab_con").removeClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area .schedule_tab_con").eq(0).addClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area").slideDown();
            }
        } else {
            if ($(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area").css("display") == "block" && $(this).hasClass("on")) {
                $(this).removeClass("on");
                $(this).parents(".schedule_tab").removeClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area").slideUp({
                    complete: function () {
                        $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area .schedule_tab_con").removeClass("on");
                    }
                });
            } else if ($(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area").css("display") == "block" && !$(this).hasClass("on")) {
                $(this).parents(".medical_schedule_con_area").find(".schedule_btn_tab .schedule_tab a").removeClass("on");
                $(this).addClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area .schedule_tab_con").removeClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area .schedule_tab_con").eq(idx).addClass("on");
            } else {
                $(this).parents(".medical_schedule_con_area").find(".schedule_btn_tab .schedule_tab a").removeClass("on");
                $(this).addClass("on");
                $(this).parents(".schedule_tab").addClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area .schedule_tab_con").removeClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area .schedule_tab_con").eq(idx).addClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area").slideDown();
            }
        }
    });
};

/* popup */
function popup_fn(){
	$(".popup_wrap").each(function(){
		var popX_pos = $(this).find(".popup_area").outerWidth()/2;
		var popY_pos = $(this).find(".popup_area").outerHeight()/2;
		$(this).find(".popup_area").css({"margin-top":-popY_pos,"margin-left":-popX_pos});
	});
	//$(".popup_wrap").hide();
};


/* help box */
function help_box(){
	$(".popup_line_box .popup_line_box_title .btn_help").click(function(){
		$(this).next(".btn_help_con").show();
	});
	$(".popup_line_box .popup_line_box_title .btn_help_con .btn_close").click(function(){
		$(this).parents(".btn_help_con").hide();
	});
};

/* step 
function step_fn(){
	$(".step_wrap .step_btn_area a").click(function(){
		var idx = $(this).index();

		$(".step_wrap .step_btn_area a").removeClass("on");
		$(".step_con_area .step_con").removeClass("on");

		$(this).addClass("on");
		$(".step_con_area .step_con").eq(idx).addClass("on");

		popup_fn();
	});
};
*/

/* motion scroll */
function motion_scr() {
	var winH = $(window).height();
	var scrT = $(window).scrollTop();
	var view_pos = winH + scrT

	$(".animation_element").each(function () {
		var elementH = $(this).outerHeight();
		var elementT = $(this).offset().top;
		var elementP = (elementT + elementH - 350);

		if ((elementP <= view_pos)) {
			$(this).addClass("animation_set");
		}
	});
};


/* bg motion */
function bg_motion(){
	var scrT = $(window).scrollTop();
	var view_pos = scrT / 100;

	$(".background_motion.bg_motion01").stop().css({"transform":"rotate("+view_pos*10+"deg)","margin-top":-view_pos*50});
	$(".background_motion.bg_motion02").stop().css({"transform":"rotate("+view_pos*10+"deg)","margin-top":-view_pos*150});
	$(".background_motion.bg_motion03").stop().css({"transform":"rotate("+view_pos*10+"deg)","margin-top":-view_pos*100});
	$(".background_motion.bg_motion04").stop().css({"transform":"rotate("+view_pos*10+"deg)","margin-top":-view_pos*70});
};


/* step_posi */
function step_posi(){
	
	var step_w;

	$(".popup_con .dot span").each(function () {
		step_w = $(this).width();
		step_w = step_w / 2 - 6;

		$(this).css("margin-left", "-" + step_w + "px");

	});
};

/* tab_width */
function tab_width() {


    $(".popup_tab_list li").each(function () {

        var tab_idx = $(this).index()+1;


        $(this).addClass("num0" + tab_idx);

    });

    $(".top_tab_list li").each(function () {

        var tab_idx = $(this).index() + 1;


        $(this).addClass("num0" + tab_idx);

    });
};

function btnTop() {

    var winH = $(window).height();
    var scrT = $(window).scrollTop();
    if ($(window).width() > 640) {
        if ($(document).height() - (winH + scrT) < 91) {
            $('.btnTop').css({
                bottom: '90px', "position": "absolute"
            });
        } else {
            $('.btnTop').css({
                bottom: '30px', "position": "fixed"
            });
        }
    }
    else {
        if ($(document).height() - (winH + scrT) < 159) {
            $('.btnTop').css({
                bottom: '14px', "position": "absolute"
            });
        } else {
            $('.btnTop').css({
                bottom: '30px', "position": "fixed"
            });
        }
    }
}

/* medical_list */
function medical_schedule_list() {
    $('.medical_schedule_list').each(function () {

        var tab_idx = $(this).index();

        if (tab_idx == 0) {
            $(this).addClass("first");
        }
    });
}

/* doctor_list */
function doctor_list_area() {
    $('.doctor_list').each(function () {

        var tab_idx = $(this).index();

        if (tab_idx == 0 || tab_idx == 1) {
            $(this).addClass("first");
        }

    });
}



$(function(){
	/* lnb drop menu */
	lnb_drop_menu();

	/* footer toggle */
	footer_toggle();

	/* faq */
	faq_fn();

	/* medical schedule */
	medical_schedule();

	/* popup */
	popup_fn();

	/* help box */
	help_box();

	/* step 
	step_fn();*/

	/* motion scroll */
	motion_scr();

	/* bg motion */
	bg_motion();

	/* step_posi */
	step_posi();

    /* tab_width */
	tab_width()

    /* top_btn */
	btnTop();

    /* medical_list */
	medical_schedule_list();

    /* doctor_list */
	doctor_list_area();
});

$(window).on({
	"load":function(){

	},
	"resize":function(){
		/* motion scroll */
		motion_scr();

		/* bg motion */
		bg_motion();
	},
	"scroll":function(){
		/* motion scroll */
		motion_scr();

		/* bg motion */
		bg_motion();

		if ($(this).scrollTop() > 100) {
		    $('.btnTop').stop().animate({ 'opacity': "1" }, { "duration": "50" });
		} else {
		    $('.btnTop').stop().animate({ 'opacity': "0" }, { "duration": "50" });
		}
	}
});
