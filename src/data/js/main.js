$(function() {
	let header = $('.header_top');
	if(header.scrollTop()>1){
		header.parents(".header").addClass("header_fixed");
		//header.addClass('header_fixed');
	}

	$(window).scroll(function() {
		if($(this).scrollTop() > 1) {
			header.parents(".header").addClass("header_fixed");
			if(header.parents(".header").hasClass("banner")) {
				if(!header.parents(".header").find(".header_mobile_burger").hasClass("open")){
					header.parents(".header").find("path").attr("fill", "#0F0F0F");
					header.parents(".header").find(".header_mobile_burger").attr("style", "background-image: url('/img/Burger menu (1).svg')");
				}
			}
			//header.addClass('header_fixed');
		} else {
			header.parents(".header").removeClass("header_fixed");
			if(header.parents(".header").hasClass("banner")){
				if(!header.parents(".header").find(".header_mobile_burger").hasClass("open")) {
					header.parents(".header").find("path").attr("fill", "white");
					header.parents(".header").find(".header_mobile_burger").attr("style", "background-image: url('/img/Burger menu.svg')");
				}
			}
			//header.removeClass('header_fixed');
		}
	});
});
let settings = {
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	centerMode: true,
	arrows: false,
	variableWidth: false
}
$(document).ready(function(){
	$(".header_mobile_content_top a").on("click", function(){
		$(".header_mobile_burger.open").click();
	});
	function toggleColorPhoto(elem){
		if(elem.data("hover")) {
			let src = elem.prop("src");
			let hov = elem.data("hover");
			elem.prop("src", hov);
			elem.data("hover", src);
		}
	}
	$(".team_items .team_item").hover(function(){
		$(this).find(".team_item_job").toggle();
		let img = $(this).find("img");
		toggleColorPhoto(img);
	});

	let sl = $('.project_slider_items').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		arrows: false,
		variableWidth: true
	});
	// $('.group_items').slick({
	// 	dots: false,
	// 	infinite: false,
	// 	speed: 300,
	// 	slidesToShow: 1,
	// 	centerMode: true,
	// 	arrows: false,
	// 	variableWidth: true
	// });
	let slider = $('.projects_items,.process_items,.team_items');
	let sliderGroup = $(".group_items");
	$(window).on('resize', function() {
		if(slider.hasClass("projects_items") && slider.parents("section").hasClass("single_page")){
			return;
		}
		/* If we are above mobile breakpoint unslick the slider */
		if ($(window).width() >= 1024)
		{
			/* Do this only if slider is initialized */
			if (slider.hasClass('slick-initialized')) {
				slider.slick('unslick');
			}
			if (sliderGroup.hasClass('slick-initialized')) {
				sliderGroup.slick('unslick');
			}
			return;
		}else if (!slider.hasClass('slick-initialized')){

			if($(window).width() >= 768){
				settings.slidesToShow = 2;
				slider.slick(settings);
				settings.infinite = false;
				return sliderGroup.slick(settings);

			}else{
				settings.infinite = false;
				slider.slick(settings);
				return sliderGroup.slick(settings);
			}
		}
	});
	$(window).trigger('resize');
	$(".slider_navigation_arrow").on("click", function(){
		if($(this).hasClass("arrow_left")){
			sl.slick("slickPrev");
		}else{
			sl.slick("slickNext");
		}
	});
	$(".header_mobile_burger").on("click", function(){
		$(this).toggleClass("open");
		$(".header_mobile_content").toggleClass("open");
		$(this).parents(".header_mobile_top").toggleClass("open");
		if($(this).parents(".header_mobile_top").hasClass("open")){
			$("body").css("overflow","hidden");
			$(this).parents(".header_mobile_top").find("path").attr("fill", "#F8F6F2");
			$(this).parents(".header_mobile_top").find(".header_mobile_burger").attr("style", "background-image: url('/img/Close Burger menu.svg')");
		}else{
			$("body").css("overflow","initial");
			$(this).parents(".header_mobile_top").find("path").attr("fill", "#41342B");
			$(this).parents(".header_mobile_top").find(".header_mobile_burger").attr("style", "background-image: transparent");
		}
	});
	$(".header_mobile_content_lang").on("click", function(){
		$(this).toggleClass("open");
		$(".popup_lang").toggleClass("open");
	});
	$("section").on("click", ".select_input", function(){
		$(this).toggleClass("open");
	});
	$("section").on("click", ".select_input_val", function(){
		$(".input_hidden").hide();
		$(this).parents(".select_input").find(".select_input_val").removeClass("select");
		$(this).addClass("select");
		let v = $(this).text();

		$(this).parents(".select_input").find(".select_input_title").text(v)
		$(this).parents(".select_input").find("input").val(v);
		$(this).parents(".contacts_form_input").removeClass("error");
		$(this).parents(".contacts_form_input").find(".error_desc").detach();
		if(v == "Хочу у вас работать"){
			$(".input_hidden").show();
		}else{
			$(".input_hidden input").val("");
		}
		//console.log(v);

	});
	$("section").on("click", ".contacts_form_input_pol", function(){
		$(this).toggleClass("checked");
		let ch = $(this).find("input");
		ch.prop('checked', !(ch.is(':checked')));
		if(ch.is(':checked')){
			ch.parents(".contacts_form_input_pol").removeClass("error");
		}
	});
	$(document).on('wheel', function(e){
		let header = $('.header_top');
		//header.stop(true, true);
		if(!header.parents(".header").find(".header_mobile_burger").hasClass("open")) {
			if (e.originalEvent.wheelDelta > 0) {
				//if(!header.parents(".header").hasClass("header_open")) {
					//header.parents(".header").addClass("header_open");
					// if ($(window).width() >= 1024) {
					// 	header.show();
					// }
				//}
			} else {
				//if(header.parents(".header").hasClass("header_open")) {
				// 	if ($(window).width() >= 1024) {
				// 		header.slideUp(400);
				// 	}
				// 	setTimeout(function () {
				// 		header.parents(".header").removeClass("header_open");
				// 	}, 400);
				//}
			}
		}
	});
	$("html body").on("change", ".contacts_form_input input", function(e){
		if($(this).val() != ""){
			$(this).parents(".contacts_form_input").removeClass("error");
			$(this).parents(".contacts_form_input").find(".error_desc").detach();
		}
	});
	$("html body").on("submit", "form", function(e){
		e.preventDefault();
		let form = $(this);
		let dataForm = form.serializeArray();
		let error = false;
		let errorDesc = "<div class='error_desc'>Поле заполнено некорректно</div>";
		form.find(`input[name='pol']`).parents(".contacts_form_input_pol").removeClass("error");
		if(!form.find(`input[name='pol']`).is(':checked')){
			error = true;
			form.find(`input[name='pol']`).parents(".contacts_form_input_pol").addClass("error");
		}
		form.find(`input`).parents(".contacts_form_input").removeClass("error");
		$(".error_desc").detach();
		dataForm.map(function(input){
			if(input.value == ""){
				form.find(`input[name=${input.name}]`).parents(".contacts_form_input").addClass("error");
				error = true;
				form.find(`input[name=${input.name}]`).parents(".contacts_form_input").append(errorDesc);
			}
		});
		//console.log(error);
		if(!error){

			$.ajax({
				method: "POST",
				url: "/ajax/feedback.php",
				data: dataForm
			}).done(function( msg ) {
					console.log(msg);
					if(msg == "1"){
						form.html("Форма успешно отправлена!");
					}
				});
		}
		//console.log(dataForm);
	});
});

const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;

	if (currentScroll <= 0) {
		$("body").removeClass(scrollUp);
		return;
	}
	if (currentScroll > lastScroll) {
		// down
		$("body").removeClass(scrollUp);
		$("body").addClass(scrollDown);
	} else{
		// up
		$("body").removeClass(scrollDown);
		$("body").addClass(scrollUp);
	}
	lastScroll = currentScroll;
});