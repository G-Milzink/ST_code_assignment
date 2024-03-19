let nrOfBlocks = 0

function addBlock()
{
    if (nrOfBlocks < 10) 
    {
        nrOfBlocks += 1;
        const block = document.createElement("div");
        block.className = "block";
        block.textContent = nrOfBlocks;
        document.querySelector("#assignment-03").appendChild(block);
    }
    else 
    {
        alert("You can only add 10 blocks");
    }    
}

document.querySelector("button").addEventListener("click", addBlock); 

