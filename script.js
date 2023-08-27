// Get references to the content area and buttons
const content = document.getElementById('content');
const prevBtn = document.getElementById('prevBtn');
const page1Btn = document.getElementById('page1Btn');
const page2Btn = document.getElementById('page2Btn');
const page3Btn = document.getElementById('page3Btn');
const nextBtn = document.getElementById('nextBtn');

// Content for each page
const pages = {
    1: "This is content for Page 1. Lorem ipsum dolor sit amet.",
    2: "Content for Page 2. Consectetur adipiscing elit.",
    3: "Page 3 Content. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};

// Initialize the current page
let currentPage = 1;

// Function to update the content based on the current page
function updateContent() {
    content.textContent = pages[currentPage];
}

// Add click event listeners to the buttons
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updateContent();
    }
});

page1Btn.addEventListener('click', () => {
    currentPage = 1;
    updateContent();
});

page2Btn.addEventListener('click', () => {
    currentPage = 2;
    updateContent();
});

page3Btn.addEventListener('click', () => {
    currentPage = 3;
    updateContent();
});

nextBtn.addEventListener('click', () => {
    if (currentPage < 3) {
        currentPage++;
        updateContent();
    }
});

// Initial content update
updateContent();