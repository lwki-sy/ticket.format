// Function for Format 1 (Full Call Log)
function generateFormat1() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const reason = document.getElementById("reason").value;
  
    const template = `Customer Name: ${name}
  Customer Phone Number: ${phone}
  Detailed Reason for Calling: ${reason}`;
  
    document.getElementById("ticketOutput").value = template;
  }
  
  // Function for Format 2 (Quick Summary)
  function generateFormat2() {
    const name = document.getElementById("name").value;
    const order = document.getElementById("order").value;
  
    const template = `[QUICK TICKET]
  NAME: ${name}
  ORDER #: ${order}`;
  
    document.getElementById("ticketOutput").value = template;
  }