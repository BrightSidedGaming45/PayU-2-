// Responsive menu

const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

cancelBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});

const hide = () => {
    menu.classList.remove("active");
}

// Dynamically generating cards

const data = [{
        class: "far fa-life-ring",
        color: "orangered",
        heading: "24/7 Customers Support",
        text: "We provide every facility we can to our customers"
    },
    {
        class: "fab fa-get-pocket",
        color: "green",
        heading: "World wide home delivery",
        text: "We deliver finger licking food to every door step"
    },
    {
        class: "fas fa-users",
        color: "red",
        heading: "World wide branches",
        text: "Our branch is open in 195 Countries"
    },
    {
        class: "fas fa-tools",
        color: "black",
        heading: "24/7 Shop Open",
        text: "For good service we make sure that we can server every customer"
    }
];

let parent = document.querySelector('.mi');

data.forEach(
    (d) => {
        let html = `<div class="mk">
                        <div class="ma">
                            <i class="${d.class}" style="color: ${d.color}"></i>
                        </div>
                        <p>${d.heading}</p>
                        <br>
                        <p style="font-weight: 700;">${d.text}</p>
                    </div>
                    <br>`;
        parent.innerHTML += html;
    }
);