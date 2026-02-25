/* ==================== gsap S ==================== */
const {
	gsap: { timeline, set, registerPlugin },
	ScrollTrigger,
} = window;

registerPlugin(ScrollTrigger);

const html = document.querySelector("html");

gsap.defaults({
	duration: 0.8,
});

$(".floating__quick .quick__top").on("click", function () {
	$("html, body").animate({ scrollTop: 0 }, "1000");
	return false;
});

/* ==================== 메뉴 ==================== */
let dir = "";
function sitemapOpen(dir) {
	const stmp_tl = gsap.timeline();

	if (dir == "open") {
		stmp_tl.fromTo(
			"#wrapper",
			{
				y: 0,
			},
			{
				x: -500,
				duration: 1.2,
				ease: "power3.out",
			}
		);
	} else {
		stmp_tl.fromTo(
			"#wrapper",
			{
				x: -500,
			},
			{
				x: 0,
				duration: 1.2,
				ease: "power3.out",
			}
		);
	}
}

$("#btn__menu").on("click", function () {
	if ($("body").hasClass("menu-active")) {
		dir = "close";
		$("body").removeClass("menu-active");
	} else {
		dir = "open";
		$("body").addClass("menu-active");
	}

	// sitemapOpen(dir);
});

$(window).on("load scroll", function () {
	if ($(document).scrollTop() > 0) {
		$("body").addClass("hd-fixed");
	} else {
		$("body").removeClass("hd-fixed");
	}
});

$("#sitemap .stmp__gnb button").on("click", function () {
	$("#sitemap .stmp__gnb li, #sitemap .stmp__snb ul").removeClass("--active");

	$("#sitemap .stmp__gnb").addClass("--active");
	$("#sitemap .stmp__gnb li").addClass("--off");
	$(this).parent().addClass("--active").removeClass("--off");

	$("#sitemap .stmp__snb").addClass("--active");
	$(`#sitemap .stmp__snb ul[data-menu="${$(this).val()}"]`).addClass(
		"--active"
	);
});

$(document).keydown(function (event) {
	if (event.keyCode == 27 || event.which == 27) {
		// esc 입력
		$("body").removeClass("menu-active");
	}
});

$("#hd .hd__menu").on("mouseenter", function () {
	$("#hd").addClass("--active");
});

$("#hd").on("mouseleave", function () {
	$("#hd").removeClass("--active");
});

/* ==================== FOOTER VISUAL ==================== */
const el_ftVisual = $(".ft__visual");
const tl_ftVisual = gsap.timeline({
	scrollTrigger: {
		trigger: el_ftVisual,
		start: "-10% 50%",
		end: "60% 50%",
	},
});
tl_ftVisual.from(el_ftVisual.find("video"), {
	y: 80,
	opacity: 0,
});

tl_ftVisual.from(
	el_ftVisual.find(".visual__symbol, strong, p"),
	{
		y: 80,
		opacity: 0,
		stagger: {
			each: 0.2,
		},
	},
	"<"
);

/* ==================== FOOTER INFO ==================== */
const el_ftInfo = $(".ft__info");
const tl_ftInfo = gsap.timeline({
	scrollTrigger: {
		trigger: el_ftInfo,
		start: "-10% 50%",
		end: "60% 50%",
	},
});

tl_ftInfo
	.from(el_ftInfo.find(".info__container > *"), {
		x: 80,
		opacity: 0,
		stagger: {
			each: 0.1,
		},
	})
	.from(
		el_ftInfo.find(".info__location"),
		{
			y: 80,
			opacity: 0,
		},
		"<"
	);
