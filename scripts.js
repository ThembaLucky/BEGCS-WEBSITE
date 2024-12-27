document.addEventListener("DOMContentLoaded", () => {
    // Your existing JavaScript code here
    const testimonials = [
        {
            text: "The team did an amazing job cleaning my computer! It feels like brand new, runs faster, and all the dust buildup inside is gone. Highly recommend their services to anyone with a desktop or laptop.",
            stars: "★ ★ ★ ★ ★",
            name: "Sophia Martinez",
            job: "Graphic Designer",
            photo: "https://via.placeholder.com/50",
        },
        {
            text: "I was shocked by how much dirt and dust they removed from my computer. Their service was fast, professional, and worth every penny. My PC is now quieter and stays cooler.",
            stars: "★ ★ ★ ★ ★",
            name: "James Anderson",
            job: "Software Engineer",
            photo: "https://via.placeholder.com/50",
        },
        {
            text: "AI'm thrilled with BEGCS Cleaning Services! They expertly remove dust and dirt from my laptop at an affordable price. Highly recommended!.",
            stars: "★ ★ ★ ★ ☆",
            job: "Accounting Science Student",
            photo: "https://via.placeholder.com/50",
        },
        {
            text: "The services were exceptional and extremely helpful. I was unsure about the proper way to clean my equipment, but they provided valuable guidance, support, and specialty.",
            stars: "★ ★ ★ ★ ★",
            name: "Marodu MP",
            job: "Owner of Sunset Pastures",
            photo: "https://via.placeholder.com/50",
        },
    ];
    

    let currentIndex = 0;

    function updateTestimonial() {
        const testimonialText = document.querySelector(".testimonial-text");
        const stars = document.querySelector(".stars span");
        const memberName = document.querySelector(".member-info h4");
        const memberJob = document.querySelector(".member-info p");
        const memberPhoto = document.querySelector(".member-photo");

        const currentTestimonial = testimonials[currentIndex];

        testimonialText.textContent = currentTestimonial.text;
        stars.textContent = currentTestimonial.stars;
        memberName.textContent = currentTestimonial.name;
        memberJob.textContent = currentTestimonial.job;
        memberPhoto.src = currentTestimonial.photo;
    }

    document.getElementById("prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial();
    });

    document.getElementById("next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial();
    });

    // Initialize with the first testimonial
    updateTestimonial();
});

