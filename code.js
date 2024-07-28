// Wait for the dom to be created before creating the grid
function color_cell(e){
    e.target.style.backgroundColor = 'black';
};

window.addEventListener('DOMContentLoaded', function() {
    // Query container and button then attach listeners
    const container = document.querySelector(".container");
    container.addEventListener("mouseover", color_cell);
    
    // Create the grid
    let cells = 16;
    let cell_width = 480 / cells;
    for(let i = 0; i < cells * cells; i++){
        // Define cell
        const current_cell = document.createElement("div");
        current_cell.style.width = `${cell_width}px`;
        current_cell.style.height = `${cell_width}px`;
        current_cell.style.padding = 0;
        current_cell.style.margin = 0;
        current_cell.style.backgroundColor = "white";
        
        container.appendChild(current_cell);
    }
});