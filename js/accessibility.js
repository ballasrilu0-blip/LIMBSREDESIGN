document.addEventListener("DOMContentLoaded", () => {

    const skipLink =
        document.querySelector('a[href="#main-content"]');

    if (skipLink) {

        skipLink.addEventListener("click", () => {

            console.log(
                "Skipping to main content."
            );

        });

    }

});