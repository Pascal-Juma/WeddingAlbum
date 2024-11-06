document.getElementById("load-more-btn").addEventListener("click", loadMoreReviews);

let reviewIndex = 1; // Start from review-template-1

function loadMoreReviews() {
    // Select the reviews container
    const reviewContainer = document.getElementById("reviews-container");

    // Define how many reviews to load at once
    const reviewsToLoad = 8;

    // Check how many reviews have been loaded
    let reviewsLoaded = 0;

    // Load reviews dynamically
    while (reviewsLoaded < reviewsToLoad) {
        // Check if the review template exists
        const reviewTemplate = document.getElementById(`review-template-${reviewIndex}`);

        if (reviewTemplate) {
            // Clone the review template and make the cloned review visible
            const newReview = reviewTemplate.cloneNode(true);
            newReview.style.display = "block"; // Make the cloned element visible
            newReview.removeAttribute("id"); // Remove the id to avoid duplicate IDs
            newReview.classList.add("review"); // Add the "review" class to identify reviews

            // Append the cloned review to the reviews container
            reviewContainer.appendChild(newReview);
            reviewsLoaded++;
        }

        // Increment the review index
        reviewIndex++;

        // If all reviews have been loaded, hide the "Load More" button
        if (!document.getElementById(`review-template-${reviewIndex}`)) {
            document.getElementById("load-more-btn").style.display = "none";
            break;
        }
    }
}
