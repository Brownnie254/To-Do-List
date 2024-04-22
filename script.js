(function() {
    // State and UI variables
    let toDoListArray = []; // Array to store to-do list items
    const form = document.querySelector('form'); // HTML form element
    const input = document.querySelector('input'); // Input field in the form
    const ul = document.querySelector('ul'); // Unordered list for to-do items

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Generate unique ID and retrieve input value
        const itemId = Date.now().toString();
        const toDoItem = input.value.trim();

        // Add item to DOM and array
        if (toDoItem) {
            addItemToDOM(itemId, toDoItem);
            addItemToArray(itemId, toDoItem);

            // Clear the input field after adding the item
            input.value = '';
        }
    });

    // Event listener for click events on the unordered list
    ul.addEventListener('click', function(event) {
        const clickedElement = event.target;
        const itemId = clickedElement.getAttribute('data-id');

        if (itemId) {
            // Remove item from DOM and array
            removeItemFromDOM(itemId);
            removeItemFromArray(itemId);
        }
    });

    // Function to add an item to the DOM
    function addItemToDOM(itemId, toDoItem) {
        const li = document.createElement('li');
        li.setAttribute('data-id', itemId);
        li.innerText = toDoItem;

        // Append the list item to the unordered list
        ul.appendChild(li);
    }

    // Function to add an item to the array
    function addItemToArray(itemId, toDoItem) {
        toDoListArray.push({ id: itemId, item: toDoItem });
    }

    // Function to remove an item from the DOM
    function removeItemFromDOM(id) {
        const li = ul.querySelector(`[data-id="${id}"]`);
        if (li) {
            ul.removeChild(li);
        }
    }

    // Function to remove an item from the array
    function removeItemFromArray(id) {
        toDoListArray = toDoListArray.filter(toDo => toDo.id !== id);
    }
})();
