// Import the Entity type
import { Entity } from './types';

// Function to render entities to the UI
export const renderEntities = (entities: Entity[]): void => {
    // Get the element where entities will be displayed
    const listElement = document.getElementById('entityList') as HTMLDivElement;
    // Clear previous content to avoid duplication
    listElement.innerHTML = '';
    // Iterate over the array of entities
    entities.forEach(entity => {
        // Create a new div element for each entity
        const item = document.createElement('div');
        // Set the text content to the entity name
        item.textContent = entity.name;
        // Append the new item to the list element
        listElement.appendChild(item);
    });
};
