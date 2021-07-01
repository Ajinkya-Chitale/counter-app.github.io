let count = 0;
const peopleCount = document.getElementById("peopleCount");
const batch = document.getElementById("batch");
const totalEntriesCount = document.querySelector(".totalEntriesCount");

function increment() {
    count += 1;
    peopleCount.innerText = count;
}

function save() {
    if(count > 0) {
        batch.innerHTML += `<li>${count}</li>`;
        let newEntry = count;       
        // if(totalEntriesCount.innerText) {
        //     totalEntriesCount.innerText =  parseInt(totalEntriesCount.innerText) + newEntry;
        // }
        // else {
        //     totalEntriesCount.innerText = newEntry;
        // }
        totalEntriesCount.innerText ? totalEntriesCount.innerText = parseInt(totalEntriesCount.innerText) + newEntry : totalEntriesCount.innerText = newEntry;

        count = 0;
        peopleCount.innerText = count;
    }
    else {
        alert("No new entry");
    }
}