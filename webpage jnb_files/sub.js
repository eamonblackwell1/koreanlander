/* ==================== SUB VISUAL ==================== */
const el_visual = $('#sub__visual');
const tl_visual = gsap.timeline({
    scrollTrigger: {
        trigger: el_visual,
        start: "0% 50%",
        end: "0% 50%",
    },
});

tl_visual
    .from(el_visual.find('.visual__slogan strong, .visual__slogan em'), {
        y: 40,
        opacity: 0,
        delay: .3,
        duration: .8,
        stagger: {
            each: .1
        }
    })
    .from(el_visual.find('.visual__title *'), {
        x: 40,
        opacity: 0,
        duration: .8,
        stagger: {
            each: .1
        }
    }, '<')


// 서브페이지 요소 애니메이션 이벤트
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".sub__el");

    if (elements.length > 0) {
        elements.forEach((el) => {
            // 초기 상태 설정
            gsap.set(el, { y: 50, opacity: 0 });

            // 스크롤 트리거 애니메이션
            gsap.to(el, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%", // 화면 80% 지점에서 트리거 시작
                    toggleActions: "play none none none", // 스크롤 위로 돌아가면 다시 숨김 처리 가능
                },
            });
        });
    }
});