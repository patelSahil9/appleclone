document.addEventListener("DOMContentLoaded", function () {
    const dropdownOptionsContainer = document.getElementById("dropdownOptions");

    function createDropdownOptions(props) {
        const didToggled = false;

        const div = document.createElement("div");
        div.style.display = props.subToggle ? "block" : "none";
        div.classList.add("flex", "flex-row", "justify-between");

        const shopDiv = document.createElement("div");
        shopDiv.style.display = props.shop ? "block" : "none";
        shopDiv.classList.add("relative", "top-12", "flex", "flex-col", "gap-3");
        shopDiv.innerHTML = `
            <div class="text-white ml-[48px] text-3xl">Shop the Latest</div>
            <!-- Add other shop-related elements here -->
        `;

        const macDiv = document.createElement("div");
        macDiv.style.display = props.mac ? "block" : "none";
        macDiv.classList.add("relative", "top-12", "flex", "flex-col", "gap-3");
        macDiv.innerHTML = `
            <div class="text-white ml-[48px] text-3xl">Explore All Mac</div>
            <!-- Add other Mac-related elements here -->
        `;

        // Create similar div elements for other sections (iPad, iPhone, Watch)

        div.appendChild(shopDiv);
        div.appendChild(macDiv);
        // Append other section divs here

        dropdownOptionsContainer.appendChild(div);
    }

    // Replace the values of props with the actual values you want
    createDropdownOptions({ subToggle: true, shop: true, mac: false, ipad: false, iphone: false, watch: false });
});
