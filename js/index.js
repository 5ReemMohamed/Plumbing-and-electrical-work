const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("show");

        const icon = menuToggle.querySelector("i");

        if (icon) {

            if (navMenu.classList.contains("show")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });

}



const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("show");
        }

        if (menuToggle) {

            const icon = menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }


 
        navLinks.forEach(function (item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


 

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    });

});

 

const workflowItems =
    document.querySelectorAll(".workflow-item");


if (workflowItems.length > 0) {

    const workflowObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        const item = entry.target;

                        const index =
                            Array.from(workflowItems)
                                .indexOf(item);


                        setTimeout(function () {

                            item.classList.add(
                                "workflow-show"
                            );

                        }, index * 180);


                        workflowObserver.unobserve(item);

                    }

                });

            },
            {
                threshold: 0.2
            }

        );


 
    workflowItems.forEach(function (item) {

        workflowObserver.observe(item);

    });

}
 

const homectaForm =
    document.getElementById("homectaForm");

const homectaContainer =
    document.querySelector(".homecta-container");


if (homectaContainer) {

    const homectaObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        homectaContainer.classList.add(
                            "homecta-visible"
                        );

                        homectaObserver.unobserve(
                            homectaContainer
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }

        );


    homectaObserver.observe(homectaContainer);

}

 

if (homectaForm) {

    homectaForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

  
            const name =
                document.getElementById(
                    "homectaName"
                ).value.trim();


            const phone =
                document.getElementById(
                    "homectaPhone"
                ).value.trim();


            const service =
                document.getElementById(
                    "homectaService"
                ).value;


            const address =
                document.getElementById(
                    "homectaAddress"
                ).value.trim();


            const message =
                document.getElementById(
                    "homectaMessage"
                ).value.trim();

 
            if (
                !name ||
                !phone ||
                !service ||
                !address ||
                !message
            ) {

                alert(
                    "من فضلك قم بتعبئة جميع البيانات المطلوبة."
                );

                return;

            }


           

            const phoneRegex =
                /^(05)[0-9]{8}$/;


            if (!phoneRegex.test(phone)) {

                alert(
                    "من فضلك أدخل رقم جوال سعودي صحيح مثل 0550519579"
                );

                return;

            }

 

            const whatsappNumber =
                "966550519579";

 

            const whatsappMessage =

`السلام عليكم 👋

أرغب في طلب خدمة منزلية.

*الاسم:* ${name}

*رقم الجوال:* ${phone}

*الخدمة المطلوبة:* ${service}

*العنوان:* ${address}

*تفاصيل المشكلة:*
${message}

شكراً لكم.`;


        

            const encodedMessage =
                encodeURIComponent(
                    whatsappMessage
                );

 

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

 

            window.open(
                whatsappURL,
                "_blank"
            );
homectaForm.reset();
        }
    );

}
 

const homefloatTop =
    document.getElementById("homefloatTop");


if (homefloatTop) {

 
    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            homefloatTop.classList.add(
                "homefloat-show"
            );

        } else {

            homefloatTop.classList.remove(
                "homefloat-show"
            );

        }

    });


 
    homefloatTop.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}
 

const navbar =
    document.querySelector(".hero-navbar");


if (navbar) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        offset: 100
    });
}