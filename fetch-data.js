// Wait for the DOM to load before executing the script
document.addEventListener('DOMContentLoaded', fetchUserData);

// Async function to fetch and display user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the div where data will be displayed
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Convert the response to JSON format
        const users = await response.json();
        
        // Clear the "Loading user data..." message
        dataContainer.innerHTML = '';

        // Create a new unordered list to display user names
        const userList = document.createElement('ul');

        // Loop through the user data and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Display the user's name
            userList.appendChild(listItem);   // Add the list item to the list
        });

        // Append the list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // If there's an error, display an error message
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}
