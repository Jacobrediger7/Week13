// Import necessary functions and types from other modules
import { fetchData, createEntity, deleteEntity } from './api'; // API functions for data management
import { renderEntities } from './ui'; // Function to render entities in the UI

// Initialize the app
const init = async () => {
    // Fetch data from the API and store it in entities
    const entities = await fetchData();
    // Render the fetched entities to the UI
    renderEntities(entities);
};

// Event listener for the create button
document.getElementById('createButton')?.addEventListener('click', () => {
    // Get the value from the input field
    const newEntity = (document.getElementById('newEntityInput') as HTMLInputElement).value;
    // Create a new entity and reinitialize the app to update the UI
    createEntity(newEntity).then(init);
});

// Call the init function to start the app
init();
