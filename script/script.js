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
            alert("you can select 4 seats only");gh
            return;
        }
        seatLeftNumber -= 1;

        const seatNo = event.target.innerText;
        const className = "Economoy";
        const ticketPrice = 550;

        const ticketInfo = document.getElementById("ticket-info");

        const li = document.createElement("li")
        const p1 = document.createElement("p");
        p1.innerText =seatNo;
        const p2 = document.createElement("p");
        p2.innerText = className;
        const p3 = document.createElement("p");
        p3.innerText = ticketPrice;

        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        ticketInfo.appendChild(li);

        const totalPeice =document.getElementById("total-price").innerText;
        const price = parseInt(totalPeice);
        const priceUpdate = price + ticketPrice;


        const grandPrice = document.getElementById("grand-price").innerText;
        const grandapriceValue = parseInt(grandPrice);
        const grandPriceUpdate = grandapriceValue + ticketPrice;

        li.style.display = "flex";
        li.style.justifyContent = 'space-between';
        event.target.style.backgroundColor = "#1DD100";
        event.target.style.color = "white";
        event.target.setAttribute("disabled", true);
        setInnerText("select-count", selectedCount);
        setInnerText("seat-left", seatLeftNumber);
        setInnerText("total-price", priceUpdate);
        setInnerText("grand-price", grandPriceUpdate);

    });
}

function applyCoupon(){
    const couponInput = document.getElementById("coupon-input");
    const couponCode = couponInput.value;
    const grandPrice = document.getElementById("grand-price").innerText;
    const grandPriceNumber = parseInt(grandPrice);

    if(couponCode === "NEW15"){
        const discountGrandPrice = grandPriceNumber * .85;
        setInnerText("grand-price", discountGrandPrice);
        hideCouponSection();
    }else if (couponCode === "Couple20") {
        const discountGrandPrice = grandPriceNumber * .80;
        setInnerText("grand-price", discountGrandPrice);
        hideCouponSection();
    }else{
        alert("Invalid Coupon Code")
    }
}
function hideCouponSection(){
    const couponSection = document.getElementById("coupon-section");
    couponSection.style.display = "none";
}


//const couponInput = document.getElementById("coupon-input");
//const grandPrice = document.getElementById("grand-price").innerText;
//const grandPriceNumber = parent(grandPrice);

//couponInput.addEventListener("keyup", function(event){
   // const coupon = event.target.value;
    
    //const couponBtn = document.getElementById("coupon-btn");
    //if(coupon === "NEW15"){
//couponBtn.addEventListener("click", function(){
      //      const discountPrice = grandPrice * 85 / 100;
      //      setInnerText("grand-price", discountPrice);
      //  });
  //  }
   // else{
        
   // }
    
//});


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
  }
