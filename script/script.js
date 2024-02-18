let selected = document.getElementById("select-count").innerText;
let selectedCount = parseInt(selected);
let ticketPrice = 550;
let seatLeft = document.getElementById("seat-left").innerText;
let seatLeftNumber = parseInt(seatLeft);


const seats = document.getElementsByClassName("seats");

for (const seat of seats) {
    seat.addEventListener("click", function(event) {
        selectedCount += 1;

        if (selectedCount > 4){
            alert("you can select 4 ticket only");gh
            return;
        }
        seatLeftNumber -= 1;
        event.target.style.backgroundColor = "#1DD100";
        event.target.style.color = "white";
        event.target.setAttribute("disabled", true);
        setInnerText("select-count", selectedCount);
        setInnerText("seat-left", seatLeftNumber);
    })
}
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
  }
