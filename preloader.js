
setTimeout(() => {
    $(".overflow-preloader h1").addClass("active");
    setTimeout(() => {
        $(".icon-persen").addClass("active");
        $(".screen-preloader").addClass("active");
        setTimeout(() => {
            $(".preloader").addClass("nonactive");
        }, 6100);
        animate(counter3, 5);
        animate(document.querySelector(".counter-2"), 6);
        animate(document.querySelector(".counter-1"), 2, 4);
    }, 500);
}, 200);

const counter3 = document.querySelector(".counter-3");

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
        const div = document.createElement("h1");
        div.className = "num";
        div.textContent = j;
        counter3.appendChild(div);
    }
}

const finalDiv = document.createElement("h1");
finalDiv.className = "num";
finalDiv.textContent = "0";
counter3.appendChild(finalDiv);

function animate(counter, duration, delay = 0) {
    const numHeight = counter.querySelector(".num").clientHeight;
    const totalDistance = (counter.querySelectorAll(".num").length) * numHeight;
    gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut"
    });
}