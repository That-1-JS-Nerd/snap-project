'use strict';

const featuresModal = document.querySelector('.features-modal');
const companyModal = document.querySelector('.company-modal');
const featuresNav = document.querySelector('.features');
const companyNav = document.querySelector('.company');

function showModal(element, modal) {
    element.addEventListener('mouseover', () => {
        modal.style.display = 'block';
    });

    element.addEventListener('mouseleave', () => {
        setTimeout(() => {
            modal.style.display = 'none';
        }, 400);
    });
}

showModal(featuresNav, featuresModal);
showModal(companyNav, companyModal);