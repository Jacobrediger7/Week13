// Import the Entity type
import { Entity } from './types';

// Function to fetch data from the server (db.json)
export const fetchData = async (): Promise<Entity[]> => {
    // Make a GET request to fetch the data
    const response = await fetch('/db.json');
    // Parse and return the JSON data
    return await response.json();
};

// Function to create a new entity
export const createEntity = async (name: string): Promise<void> => {
    // Logic to create a new entity (e.g., POST request)
    // Placeholder for implementation
};

// Function to delete an entity by id
export const deleteEntity = async (id: number): Promise<void> => {
    // Logic to delete an entity (e.g., DELETE request)
    // Placeholder for implementation
};
