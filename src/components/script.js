import React, { useEffect } from "react";

function App() {

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        const hiddenElements = document.querySelectorAll(".reveal");
        hiddenElements.forEach((el) => observer.observe(el));

    }, []);
}