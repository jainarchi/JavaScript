// avoid unnessary reflows and repaints

let ul = document.querySelector("ul")         
const space = document.createDocumentFragment();      // create space in memory


for (let i = 1; i < 101; i++) {
  let li = document.createElement("li");
  li.textContent = i;
  space.appendChild(li);
}

ul.appendChild(space);          // Add all 100 items at once (ONE reflow)  one time dom chnage 





// BAD: 100 reflows
for (let i = 1; i < 101; i++) {
  let li = document.createElement("li");
  li.textContent = i;
  ul.appendChild(li);            // triggers a reflow/repaint every single time
}
