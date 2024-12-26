// Sample data for providers
const providers = [
    {
        id: 1,
        name: "John's Plumbing",
        service: "plumbing",
        location: "New York",
        rating: 4.8,
        reviews: 156,
        verified: true
    },
    {
        id: 2,
        name: "Elite Electrical Services",
        service: "electrical",
        location: "New York",
        rating: 4.9,
        reviews: 203,
        verified: true
    },
    {
        id: 3,
        name: "Clean & Clear",
        service: "cleaning",
        location: "New York",
        rating: 4.7,
        reviews: 89,
        verified: true
    }
];

// Function to search services
function searchServices() {
    const serviceType = document.getElementById('service-type').value;
    const location = document.getElementById('location').value.toLowerCase();
    
    const filteredProviders = providers.filter(provider => {
        return (!serviceType || provider.service === serviceType) &&
               (!location || provider.location.toLowerCase().includes(location));
    });
    
    displayProviders(filteredProviders);
}

// Function to display providers
function displayProviders(providers) {
    const providersContainer = document.getElementById('providers-list');
    providersContainer.innerHTML = '';
    
    if (providers.length === 0) {
        providersContainer.innerHTML = '<p class="no-results">No providers found. Try different search criteria.</p>';
        return;
    }
    
    providers.forEach(provider => {
        const providerCard = document.createElement('div');
        providerCard.className = 'provider-card';
        
        const stars = '★'.repeat(Math.floor(provider.rating)) + 
                     '☆'.repeat(5 - Math.floor(provider.rating));
        
        providerCard.innerHTML = `
            <div class="provider-info">
                <div>
                    <h3>${provider.name} ${provider.verified ? '✓' : ''}</h3>
                    <p>${provider.service.charAt(0).toUpperCase() + provider.service.slice(1)}</p>
                    <p class="rating">${stars} (${provider.reviews} reviews)</p>
                </div>
                <div class="provider-actions">
                    <button onclick="contactProvider(${provider.id})">Contact</button>
                    <button onclick="bookService(${provider.id})">Book Now</button>
                </div>
            </div>
        `;
        
        providersContainer.appendChild(providerCard);
    });
}

// Function to contact provider
function contactProvider(providerId) {
    const provider = providers.find(p => p.id === providerId);
    alert(`Contacting ${provider.name}...\nThis would open a contact form or messaging system in a real application.`);
}

// Function to book service
function bookService(providerId) {
    const provider = providers.find(p => p.id === providerId);
    alert(`Booking service with ${provider.name}...\nThis would open a booking form in a real application.`);
}

// Initial display of all providers
displayProviders(providers);