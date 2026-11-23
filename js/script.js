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
  
// Function for generating internal note
function generate() {
  const name = document.getElementById("name").value;
  const phonenum = document.getElementById("phonenum").value || "Not Provided";
  const email = document.getElementById("email").value || "Not Provided";
  const ordernum = document.getElementById("ordernum").value || "N/A";
  const equipmodel = document.getElementById("equipmodel").value || "N/A";
  const serialnum = document.getElementById("serialnum").value || "N/A";
  const PoP = document.getElementById("PoP").value || "N/A";
  const address = document.getElementById("address").value || "N/A";
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
Date of Purchase: ${finalDateDisplay}
Place of Purchase: ${purchaseplace}

Model of equipment: ${equipmodel}
Serial Number if Available: ${serialnum}
Order Number: ${ordernum}
Was proof of purchase requested if potentially in warranty? ${PoP}
pictures or video of the issue? ${issueMedia}
Address machine is located: ${address}

Problem description: ${callreason}
Detailed Resolution: ${callresolution}
`;

  document.getElementById("output").value = template;
}



// Function for CRM Checking
function generateCRMChecking() {
  const name = document.getElementById("name").value;
  const phonenum = document.getElementById("phonenum").value || "Not Provided";
  const serialnum = document.getElementById("serialnum").value || "N/A";
  const address = document.getElementById("address").value || "N/A";
  const ticketnum = document.getElementById("ticketnum").value;
  const casenum = document.getElementById("casenum").value;
  const action = document.getElementById("action").value;
  const partnumdesc = document.getElementById("partnumdesc").value;
  const financialval = document.getElementById("financialval").value;
  const sapnum = document.getElementById("sapnum").value||"Pending";


  const template = 
`Ticket Number: ${ticketnum}
Customer Name: ${name}
Customer Phone Number: ${phonenum}
Address: ${address}
Entitlement: ${serialnum}
Case Number: ${casenum}
Action: ${action}
Part#/Description: ${partnumdesc}
Financial Impact Value: ${financialval}
SAP Number: ${sapnum}
`;

  document.getElementById("output").value = template;
}




// Function for CRM Summarization
function generateCRMSummary() {
  const name = document.getElementById("name").value;
  const phonenum = document.getElementById("phonenum").value || "Not Provided";
  const email = document.getElementById("email").value || "Not Provided";
  const serialnum = document.getElementById("serialnum").value || "N/A";
  const address = document.getElementById("address").value || "N/A";
  const purchaseplace = document.getElementById("address").value || "N/A";
  const casenum = document.getElementById("casenum").value;
  const action = document.getElementById("action").value;
  const partnumdesc = document.getElementById("partnumdesc").value;
  const financialval = document.getElementById("financialval").value;
  const sapnum = document.getElementById("sapnum").value||"Pending";
  const dispatchnum = document.getElementById("dispatchnum").value|| "N/A";

  // Get raw values without forcing "N/A" early
const rawDate = document.getElementById("purchasedate").value;
const formattedDate = formatDate(rawDate); 
const purchasedateText = document.getElementById("purchasedateText").value;

// Combine formatted date picker + extra text field seamlessly
const combinedDate = [formattedDate, purchasedateText].filter(Boolean).join(" ");
const finalDateDisplay = combinedDate ? `${combinedDate}` : "";


  const template = 
`Customer Name: ${name}
Customer Phone Number: ${phonenum}
Email Address: ${email}
Shipping Address: ${address}

Entitlement: ${serialnum}
Date of Purchase: ${finalDateDisplay}
Place of Purchase: ${purchaseplace}

Case Number: ${casenum}
Action: ${action}
Part#/Description: ${partnumdesc}
Financial Impact Value: ${financialval}
SAP Number: ${sapnum}
Dispatch Number: ${dispatchnum}
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
