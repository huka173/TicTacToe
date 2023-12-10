'use strict';

import { cells } from "./cells.js";
import { isVictory } from "./isVictory.js";

const start = (cells) => {
    let counter = 0;

    for(let cell of cells) {
        cell.addEventListener('click', function step() {

            this.textContent = ['X', 'O'][counter % 2];
            this.removeEventListener('click', step);

            if(isVictory(cells)) {
				alert(`${this.textContent} победил`);
                location.reload();
			} 
            else if(counter === 8) {
				alert('Ничья');
                location.reload();
            }

            counter += 1;
        });
    }
}

start(cells());