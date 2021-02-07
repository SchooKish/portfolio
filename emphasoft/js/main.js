$(function() {
        $('.partners__corousel').slick( {
                slidesToShow: 4,
                sledesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 2000,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2
                        }
                    }
                ]
            }
        )
    }
)
 

const animation = document.querySelectorAll('.anim-items');

if (animation.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animation.length; index++) {
            const animItem = animation[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if ( animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('animation');
            } else {
               if (!animItem.classList.contains('title')) {
                animItem.classList.remove('animation');
               }
            }
        }
    }
    function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300)
}

