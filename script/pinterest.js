const pins = [
    {
        title: "Modern Bedroom",
        category: "Home Design",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
    },
    {
        title: "Mountain Adventure",
        category: "Travel",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
    },
    {
        title: "Simple Outfit",
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b"
    },
    {
        title: "Coffee Time",
        category: "Food",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    },
    {
        title: "Minimal Workspace",
        category: "Study",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2"
    },
    {
        title: "Beautiful Sunset",
        category: "Photography",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7"
    },
    {
        title: "Street Style",
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
    },
    {
        title: "Healthy Breakfast",
        category: "Food",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352"
    }
];

const pinsContainer = document.querySelector("#pinsContainer");

for (let i = 0; i < pins.length; i++) {

    const pin = pins[i];

    pinsContainer.innerHTML += `
        <div class="pin">
            <img src="${pin.image}" alt="${pin.title}">
            <h3>${pin.title}</h3>
            <p>${pin.category}</p>
        </div>
    `;
}

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.onclick = function () {

    const searchText = searchInput.value.toLowerCase();

    pinsContainer.innerHTML = "";

    for (let i = 0; i < pins.length; i++) {

        const pin = pins[i];

        if (pin.title.toLowerCase().includes(searchText)) {

            pinsContainer.innerHTML += `
                <div class="pin">
                    <img src="${pin.image}" alt="${pin.title}">
                    <h3>${pin.title}</h3>
                    <p>${pin.category}</p>
                </div>
            `;
        }
    }
};