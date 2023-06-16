// Функция для проверки видимости объекта при прокрутке
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Функция для обработки события прокрутки страницы
function handleScroll() {
    let animatedObjects = Array.from(document.querySelectorAll('.scroll_animate'));
    animatedObjects.forEach(function(animatedObject) {
        if (isElementInViewport(animatedObject)) {
        animatedObject.classList.add("active");
        };
    });
};

// Назначаем обработчик события прокрутки
window.addEventListener('scroll', handleScroll);
