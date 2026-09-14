function formatDate(dateString) {
    if (!dateString) return ""; // Handle empty input gracefully
  
    // Split YYYY-MM-DD to create a clean Date object without timezone offset bugs
    const [year, month, day] = dateString.split("-");
    const dateObj = new Date(year, month - 1, day);
  
    // Formats as "September 12, 2026"
    return dateObj.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  }


// Function for General ticket
function generateGeneral() {
    const name = document.getElementById("name").value;
    const phonenum = document.getElementById("phonenum").value;
    const email = document.getElementById("email").value || "Not Provided";
    const ordernum = document.getElementById("ordernum").value || "N/A";
    const equipmodel = document.getElementById("equipmodel").value || "N/A";
    const serialnum = document.getElementById("serialnum").value || "N/A";

// Get raw values without forcing "N/A" early
const rawDate = document.getElementById("purchasedate").value;
const formattedDate = formatDate(rawDate); 
const purchasedateText = document.getElementById("purchasedateText").value;

// Combine formatted date picker + extra text field seamlessly
const combinedDate = [formattedDate, purchasedateText].filter(Boolean).join(" ");
const finalDateDisplay = combinedDate ? `${combinedDate}` : "";

    const purchaseplace = document.getElementById("purchaseplace").value || "N/A";
    const callreason = document.getElementById("call-reason").value;
    const callresolution = document.getElementById("call-resolution").value;
  
    const template = 
`Customer Name: ${name}
Customer Phone Number: ${phonenum}
Customer Email Address: ${email}
Order Number (If Necessary): ${ordernum}
Equipment Model (If Necessary): ${equipmodel}
Serial Number: ${serialnum}
Date of Purchase: ${finalDateDisplay}
Place of Purchase: ${purchaseplace}
Detailed Reason for Calling: ${callreason}
Detailed Resolution: ${callresolution}`;
  
    document.getElementById("output").value = template;
  }
  
  // Function for Format 2 (Quick Summary)
  function generateEquipment() {
    const name = document.getElementById("name").value;
    const order = document.getElementById("order").value;
  
    const template = `[QUICK TICKET]
  NAME: ${name}
  ORDER #: ${order}`;
  
    document.getElementById("ticketOutput").value = template;
  }




  