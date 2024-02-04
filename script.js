var isDetailsOpen = false;
var isEventDetailsOpen = false;

function toggleDetails() {
    var detailsContainer = document.getElementById('detailsContainer');
    var detailsContentBox = document.getElementById('detailsContentBox');
    var eyeIcons = document.querySelectorAll('.eye-icon');

    isDetailsOpen = !isDetailsOpen;
    detailsContainer.style.display = isDetailsOpen ? 'flex' : 'none';

    if (isDetailsOpen) {
        detailsContentBox.innerHTML = document.getElementById('detailsContent').innerHTML;
    }

    eyeIcons.forEach(function (eyeIcon) {
        eyeIcon.classList.toggle('hidden', isDetailsOpen || isEventDetailsOpen);
    });
}

function closeDetails() {
    var detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.style.display = 'none';

    var eyeIcons = document.querySelectorAll('.eye-icon');
    eyeIcons.forEach(function (eyeIcon) {
        eyeIcon.classList.remove('hidden');
    });
}

function toggleEventDetails(eventId) {
    var eventDetailsContainer = document.getElementById('eventDetailsContainer');
    var eventDetailsContent = document.getElementById('eventDetailsContent');
    var eyeIcons = document.querySelectorAll('.eye-icon');

    if (!isEventDetailsOpen) {
        var eventDetails = document.getElementById(eventId);
        var eventData = eventDetails.getElementsByClassName('event-date')[0].textContent;
        var eventDetailsText = eventDetails.getElementsByClassName('event-details')[0].textContent;

        eventDetailsContent.innerHTML = `<div class="event-date">${eventData}</div>${eventDetailsText}`;
        eventDetailsContainer.style.display = 'flex';
        isEventDetailsOpen = true;

        eyeIcons.forEach(function (eyeIcon) {
            eyeIcon.classList.add('hidden');
        });
    }
}

function closeEventDetails() {
    var eventDetailsContainer = document.getElementById('eventDetailsContainer');
    var eyeIcons = document.querySelectorAll('.eye-icon');

    eventDetailsContainer.style.display = 'none';
    isEventDetailsOpen = false;

    eyeIcons.forEach(function (eyeIcon) {
        eyeIcon.classList.remove('hidden');
    });
}
