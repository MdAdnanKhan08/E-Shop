document.addEventListener('DOMContentLoaded', () => {
    // Get sections
    const createShopSection = document.getElementById('create-shop-section');
    const manageShopSection = document.getElementById('manage-shop-section');
    const manageOfferSection = document.getElementById('manage-offer-section');
    const manageCategoryFloorSection = document.getElementById('manage-category-floor-section');

    // Get links
    const createShopLink = document.getElementById('create-shop-link');
    const manageShopLink = document.getElementById('manage-shop-link');
    const manageOfferLink = document.getElementById('manage-offer-link');
    const manageCategoryFloorLink = document.getElementById('manage-category-floor-link');

    // Show Create Shop Section by default
    createShopSection.classList.add('active');

    // Show Create Shop Section
    createShopLink.addEventListener('click', () => {
        hideAllSections();
        createShopSection.classList.add('active');
    });

    // Show Manage Shop Section
    manageShopLink.addEventListener('click', () => {
        hideAllSections();
        manageShopSection.classList.add('active');
    });

    // Show Manage Offer Section
    manageOfferLink.addEventListener('click', () => {
        hideAllSections();
        manageOfferSection.classList.add('active');
    });

    // Show Manage Category & Floor Section
    manageCategoryFloorLink.addEventListener('click', () => {
        hideAllSections();
        manageCategoryFloorSection.classList.add('active');
    });

    // Hide all sections
    function hideAllSections() {
        createShopSection.classList.remove('active');
        manageShopSection.classList.remove('active');
        manageOfferSection.classList.remove('active');
        manageCategoryFloorSection.classList.remove('active');
    }

});
