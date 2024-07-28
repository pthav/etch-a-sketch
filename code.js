
let container;
let button;

// Draw the grid where cells defines how many cells for each dimension
function draw_grid(cells){
    let cell_width = 480 / cells;
    for(let i = 0; i < cells * cells; i++){
        const current_cell = document.createElement("div");
        current_cell.style.width = `${cell_width}px`;
        current_cell.style.height = `${cell_width}px`;
        current_cell.style.padding = 0;
        current_cell.style.margin = 0;
        current_cell.style.backgroundColor = "white";
        
        container.appendChild(current_cell);
    }
}

function delete_grid(){
    const cells = document.querySelectorAll(".container > div");
    cells.forEach((cell) => cell.remove());
}


function color_cell(e){
    e.target.style.backgroundColor = 'black';
};

function change_num_cells(e){
    answer = parseInt(prompt("How many cells per side?"));
    delete_grid();
    draw_grid(answer);
}

window.addEventListener('DOMContentLoaded', function() {
    // Query container and button then attach listeners
    container = document.querySelector(".container");
    button = document.querySelector("button");
    container.addEventListener("mouseover", color_cell);
    button.addEventListener("mousedown", change_num_cells);
    
    // Create the grid
    draw_grid(16);
});