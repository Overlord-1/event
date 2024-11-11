document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Sample event data (replace with actual data in a real application)
    const events = [
        {
            title: 'Tech Conference 2023',
            date: '2023-09-15',
            time: '09:00 AM',
            location: 'San Francisco, CA',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80'
        },
        {
            title: 'Music Festival',
            date: '2023-07-22',
            time: '12:00 PM',
            location: 'New York, NY',
            image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80'
        },
        {
            title: 'Food & Wine Expo',
            date: '2023-08-05',
            time: '11:00 AM',
            location: 'Chicago, IL',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80'
        }
    ];

    // Populate featured events
    const eventGrid = document.querySelector('.event-grid');
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="event-card-content">
                <h3>${event.title}</h3>
                <p>${event.date} at ${event.time}</p>
                <div class="event-details">
                    <span>${event.location}</span>
                    <a href="event-details.html" class="cta-button">More Details</a>
                </div>
            </div>
        `;
        eventGrid.appendChild(eventCard);
    });
});
