//VibeCoded langg boiiii

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
    const phonenum = document.getElementById("phonenum").value || "Not Provided";
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
  
// Function for EquipmentSupp ticket
function generateEquipment() {
  const name = document.getElementById("name").value;
  const phonenum = document.getElementById("phonenum").value || "Not Provided";
  const email = document.getElementById("email").value || "Not Provided";
  const ordernum = document.getElementById("ordernum").value || "N/A";
  const equipmodel = document.getElementById("equipmodel").value || "N/A";
  const serialnum = document.getElementById("serialnum").value || "N/A";
  const PoP = document.getElementById("PoP").value || "N/A";
  const address = document.getElementById("address").value || "N/A";
  const troubleshoot = document.getElementById("troubleshoot").value || "N/A";
  const parts = document.getElementById("parts").value || "N/A";
  const issueMedia = document.getElementById("issueMedia").value || "N/A";

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
Place of Purchase: ${purchaseplace}
Detailed Resolution: ${callresolution}


Please include (if not already saved in ticket form):

Machine information
Model of equipment: ${equipmodel}
Approximate purchase date: ${finalDateDisplay}
Serial Number if Available: ${serialnum}
Was proof of purchase requested if potentially in warranty? ${PoP}
address machine is located: ${address}

Issue reported:
Problem description: ${callreason}
What troubleshooting has been done? ${troubleshoot}
Any parts recommended? ${parts}
pictures or video of the issue? ${issueMedia}

Warranty Information:
Was OOW disclosure read? N/A
`;

  document.getElementById("output").value = template;
}




// Function for EquipmentSupp ticket
function generateFulfillment() {
  const name = document.getElementById("name").value;
  const phonenum = document.getElementById("phonenum").value || "Not Provided";
  const email = document.getElementById("email").value || "Not Provided";
  const ordernum = document.getElementById("ordernum").value || "N/A";
  const equipmodel = document.getElementById("equipmodel").value || "N/A";
  const serialnum = document.getElementById("serialnum").value || "N/A";
  const custReq = document.getElementById("custReq").value || "N/A";
  const otherInfo = document.getElementById("otherInfo").value || "None";
  const reasonReturn = document.getElementById("reasonReturn").value || "N/A";

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
Serial Number: ${serialnum}
Date of Purchase: ${finalDateDisplay}
Place of Purchase: ${purchaseplace}
Detailed Reason for Calling: ${callreason}
Detailed Resolution: ${callresolution}

Please include (If not already saved in the ticket form)
 
What is the customer requesting? ${custReq}
What is the order number? ${ordernum} 
Any other information you think would be helpful: ${otherInfo}
 
If a return is requested:
What would the customer like to return? ${equipmodel}
What is the reason for the return? ${reasonReturn}
`;

  document.getElementById("output").value = template;
}





// Copy to clipboard
function copyTicket() {
  // 1. Get the textarea element and its text content
  const outputArea = document.getElementById("output");
  const textToCopy = outputArea.value;

  // 2. Write the text to clipboard
  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  } else {
    alert("Nothing to copy!");
  }
}


/* Copy notif
  // 3. Write text to clipboard
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert("Copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}
*/