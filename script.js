// Function to apply conditions and display the correct image
function applyConditions() {
  const implantSystem = document.getElementById("value2").value;
  const diameter = document.getElementById("value3").value;
  const implant = document.getElementById("value1").value;
  const imageLabel = document.getElementById("imageLabel");  
  const printButton = document.getElementById("printButton");

  // Log values for debugging
  console.log(`Implant System: ${implantSystem}, Diameter: ${diameter}, Implant: ${implant}`);

  // Hide all images initially
  document.querySelectorAll("#imagesContainer img").forEach(img => {
      img.style.display = "none";
  });
  printButton.style.display = "none"; // Hide print button by default
  imageLabel.innerHTML = ""; // Clear the label
  // Clear the label
  imageLabel.innerHTML = "";

  // Show default image if no selection is made
  if (!implantSystem || !diameter || !implant) {
      document.getElementById("Kit").style.display = "block";
      return;
  }
  // Error handling - if the combination doesn't match any condition
  let validCombination = true;
  // Conditions based on implant system, diameter, and implant
  if (implant === "IP-8.5") {
      document.getElementById("IP-8.5").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
      printButton.style.display = "inline-block"; // Show the print button      
  } else if (implant === "IP-10") {
      document.getElementById("IP-10").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
      printButton.style.display = "inline-block"; // Show the print button       
  } else if (implant === "IP-11.5") {
      document.getElementById("IP-11.5").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
      printButton.style.display = "inline-block"; // Show the print button      
  } else if (implant === "IP-13") {
        document.getElementById("IP-13").style.display = "block";
        imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
      printButton.style.display = "inline-block"; // Show the print button        
  } else if (implant === "IP-15") {
        document.getElementById("IP-15").style.display = "block";
        imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
      printButton.style.display = "inline-block"; // Show the print button         
  } else if (implant === "IBNT-8.5") {
        document.getElementById("IBNT-8.5").style.display = "block";
        imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
      printButton.style.display = "inline-block"; // Show the print button         
  } else if (implant === "IBNT-10") {
        document.getElementById("IBNT-10").style.display = "block";
        imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
      printButton.style.display = "inline-block"; // Show the print button
  } else if (implant === "IBNT-11.5") {
          document.getElementById("IBNT-11.5").style.display = "block";
          imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
      printButton.style.display = "inline-block"; // Show the print button          
  } else if (implant === "IBNT-13") {
          document.getElementById("IBNT-13").style.display = "block";
          imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
      printButton.style.display = "inline-block"; // Show the print button          
  } else if (implant === "IBNT-15") {
            document.getElementById("IBNT-15").style.display = "block";
            imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
      printButton.style.display = "inline-block"; // Show the print button            
  } else if (implant === "IBT/IBR-8.5") {
            document.getElementById("IBT/IBR-8.5").style.display = "block";
            imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
      printButton.style.display = "inline-block"; // Show the print button            
  } else if (implant === "IBT/IBR-10") {
              document.getElementById("IBT/IBR-10").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
      printButton.style.display = "inline-block"; // Show the print button             
  } else if (implant === "IBT/IBR-11.5") {
              document.getElementById("IBT/IBR-11.5").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
      printButton.style.display = "inline-block"; // Show the print button              
  } else if (implant === "IBT/IBR-13") {
              document.getElementById("IBT/IBR-13").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
      printButton.style.display = "inline-block"; // Show the print button             
  } else if (implant === "IBT/IBR-15") {
              document.getElementById("IBT/IBR-15").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
      printButton.style.display = "inline-block"; // Show the print button              
  } else if (implant === "BAT/BAR-8.5") {
                document.getElementById("BAT/BAR-8.5").style.display = "block";
                imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
      printButton.style.display = "inline-block"; // Show the print button
  } else if (implant === "BAT/BAR-10") {
                document.getElementById("BAT/BAR-10").style.display = "block";
                imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
      printButton.style.display = "inline-block"; // Show the print button                                             
  } else if (implant === "BAT/BAR-11.5") {
                document.getElementById("BAT/BAR-11.5").style.display = "block";
                imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
      printButton.style.display = "inline-block"; // Show the print button               
  } else if (implant === "BAT/BAR-13") {
                document.getElementById("BAT/BAR-13").style.display = "block";
                imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
      printButton.style.display = "inline-block"; // Show the print button               
  } else if (implant === "BAT/BAR-15") {
                  document.getElementById("BAT/BAR-15").style.display = "block";
                  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
      printButton.style.display = "inline-block"; // Show the print button              
} else if (implant === "SP3508") {
    document.getElementById("SP3508").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button       
} else if (implant === "SP3510") {
    document.getElementById("SP3510").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button      
} else if (implant === "SP3511") {
      document.getElementById("SP3511").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button        
} else if (implant === "SP3513") {
      document.getElementById("SP3513").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button         
} else if (implant === "SP3516") {
      document.getElementById("SP3516").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button         
} else if (implant === "SP4008") {
      document.getElementById("SP4008").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "SP4010") {
        document.getElementById("SP4010").style.display = "block";
        imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button          
} else if (implant === "SP4011") {
        document.getElementById("SP4011").style.display = "block";
        imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button          
} else if (implant === "SP4013") {
          document.getElementById("SP4013").style.display = "block";
          imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button            
} else if (implant === "SP4016") {
          document.getElementById("SP4016").style.display = "block";
          imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button            
} else if (implant === "SP5008") {
            document.getElementById("SP5008").style.display = "block";
            imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
    printButton.style.display = "inline-block"; // Show the print button             
} else if (implant === "SP5010") {
            document.getElementById("SP5010").style.display = "block";
            imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in HARD  bone`;
    printButton.style.display = "inline-block"; // Show the print button              
} else if (implant === "SP5011") {
            document.getElementById("SP5011").style.display = "block";
            imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
    printButton.style.display = "inline-block"; // Show the print button             
} else if (implant === "SP5013") {
            document.getElementById("SP5013").style.display = "block";
            imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
    printButton.style.display = "inline-block"; // Show the print button              
} else if (implant === "SP5016") {
              document.getElementById("SP5016").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
    printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "DCT3009") {
              document.getElementById("DCT3009").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
    printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "DCT3011") {
              document.getElementById("DCT3011").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
    printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "DCT3013") {
              document.getElementById("DCT3013").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
    printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "DCT3015") {
                document.getElementById("DCT3015").style.display = "block";
                imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
    printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "DCT3508") {
    document.getElementById("DCT3508").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "DCT3509") {
    document.getElementById("DCT3509").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "DCT3511") {
    document.getElementById("DCT3511").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "DCT3513") {
    document.getElementById("DCT3513").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "DCT3515") {
      document.getElementById("DCT3515").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button   
} else if (implant === "DCT4008") {
    document.getElementById("DCT4008").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "DCT4009") {
    document.getElementById("DCT4009").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "DCT4011") {
    document.getElementById("DCT4011").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "DCT4013") {
    document.getElementById("DCT4013").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "DCT4015") {
      document.getElementById("DCT4015").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "DCR5008") {
  document.getElementById("DCR5008").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block";
} else if (implant === "DCT/DCR5009") {
    document.getElementById("DCT/DCR5009").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "DCT/DCR5011") {
    document.getElementById("DCT/DCR5011").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "DCT/DCR5013") {
    document.getElementById("DCT/DCR5013").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "DCT/DCR5015") {
      document.getElementById("DCT/DCR5015").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "PRO308") {
    document.getElementById("PRO308").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "PRO310") {
  document.getElementById("PRO310").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "PRO311") {
  document.getElementById("PRO311").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "PRO313") {
  document.getElementById("PRO313").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "PRO315") {
    document.getElementById("PRO315").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "PRO408") {
    document.getElementById("PRO408").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "PRO410") {
  document.getElementById("PRO410").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "PRO411") {
  document.getElementById("PRO411").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "PRO413") {
  document.getElementById("PRO413").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "PRO415") {
    document.getElementById("PRO415").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button  
} else if (implant === "PRO508") {
    document.getElementById("PRO508").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "PRO510") {
  document.getElementById("PRO510").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "PRO511") {
  document.getElementById("PRO511").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "PRO513") {
  document.getElementById("PRO513").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "PRO515") {
    document.getElementById("PRO515").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "IM-T3708") {
    document.getElementById("IM-T3708").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IM-T3710") {
  document.getElementById("IM-T3710").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IM-T3711") {
  document.getElementById("IM-T3711").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IM-T3713") {
  document.getElementById("IM-T3713").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IM-T3715") {
    document.getElementById("IM-T3715").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button  
} else if (implant === "IM-T4208") {
    document.getElementById("IM-T4208").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IM-T4210") {
  document.getElementById("IM-T4210").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IM-T4211") {
  document.getElementById("IM-T4211").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IM-T4213") {
  document.getElementById("IM-T4213").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IM-T4215") {
    document.getElementById("IM-T4215").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "IM-T5008") {
    document.getElementById("IM-T5008").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IM-T5010") {
  document.getElementById("IM-T5010").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IM-T5011") {
  document.getElementById("IM-T5011").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IM-T5013") {
  document.getElementById("IM-T5013").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IM-T5015") {
    document.getElementById("IM-T5015").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "ITT408") {
    document.getElementById("ITT408").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "ITT410") {
  document.getElementById("ITT410").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "ITT412") {
  document.getElementById("ITT412").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "ITT414") {
  document.getElementById("ITT414").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "ITT508") {
    document.getElementById("ITT508").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "ITT510") {
  document.getElementById("ITT510").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "ITT512") {
  document.getElementById("ITT512").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "ITT514") {
  document.getElementById("ITT514").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IA-LH-35-8") {
    document.getElementById("IA-LH-35-8").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IA-LH-35-10") {
  document.getElementById("IA-LH-35-10").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IA-LH-35-11.5") {
  document.getElementById("IA-LH-35-11.5").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IA-LH-35-13") {
  document.getElementById("IA-LH-35-13").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IA-LH-35-16") {
    document.getElementById("IA-LH-35-16").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IA-LH-43-8") {
    document.getElementById("IA-LH-43-8").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IA-LH-43-10") {
  document.getElementById("IA-LH-43-10").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IA-LH-43-11.5") {
  document.getElementById("IA-LH-43-11.5").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IA-LH-43-13") {
  document.getElementById("IA-LH-43-13").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IA-LH-43-16") {
    document.getElementById("IA-LH-43-16").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IA-LH-50-8") {
    document.getElementById("IA-LH-50-8").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IA-LH-50-10") {
  document.getElementById("IA-LH-50-10").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IA-LH-50-11.5") {
  document.getElementById("IA-LH-50-11.5").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IA-LH-50-13") {
  document.getElementById("IA-LH-50-13").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD  bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IA-LH-50-16") {
    document.getElementById("IA-LH-50-16").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by a red rectangle is OPTIONAL &  for use in HARD bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IV-DC30/EX30-3708") {
    document.getElementById("IV-DC30/EX30-3708").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IV-DC30-3710") {
  document.getElementById("IV-DC30-3710").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IV-DC30-3711") {
  document.getElementById("IV-DC30-3711").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IV-DC30-3713") {
  document.getElementById("IV-DC30-3713").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IV-DC30-3715") {
    document.getElementById("IV-DC30-3715").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "IV-DC35-4508") {
    document.getElementById("IV-DC35-4508").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IV-DC35-4510") {
  document.getElementById("IV-DC35-4510").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IV-DC35-4511") {
  document.getElementById("IV-DC35-4511").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IV-DC35-4513") {
  document.getElementById("IV-DC35-4513").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IV-DC35-4515") {
    document.getElementById("IV-DC35-4515").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "IV-DC40-5008") {
    document.getElementById("IV-DC40-5008").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IV-DC40-5010") {
  document.getElementById("IV-DC40-5010").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IV-DC40-5011") {
  document.getElementById("IV-DC40-5011").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IV-DC40-5013") {
  document.getElementById("IV-DC40-5013").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IV-DC40-5015") {
    document.getElementById("IV-DC40-5015").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IV-EX30-3708") {
  document.getElementById("IV-EX30-3708").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IV-EX30-3710") {
document.getElementById("IV-EX30-3710").style.display = "block";
imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IV-EX30-3711") {
document.getElementById("IV-EX30-3711").style.display = "block";
imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IV-EX30-3713") {
document.getElementById("IV-EX30-3713").style.display = "block";
imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IV-EX30-3715") {
  document.getElementById("IV-EX30-3715").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "IV-EX35-4508") {
  document.getElementById("IV-EX35-4508").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IV-EX35-4510") {
document.getElementById("IV-EX35-4510").style.display = "block";
imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IV-EX35-4511") {
document.getElementById("IV-EX35-4511").style.display = "block";
imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IV-EX35-4513") {
document.getElementById("IV-EX35-4513").style.display = "block";
imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IV-EX35-4515") {
  document.getElementById("IV-EX35-4515").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "IV-EX40-5008") {
  document.getElementById("IV-EX40-5008").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IV-EX40-5010") {
document.getElementById("IV-EX40-5010").style.display = "block";
imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IV-EX40-5011") {
document.getElementById("IV-EX40-5011").style.display = "block";
imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IV-EX40-5013") {
document.getElementById("IV-EX40-5013").style.display = "block";
imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IV-EX40-5015") {
  document.getElementById("IV-EX40-5015").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by overlayed(orange circle and red rectangle) is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button
}
  // Add other conditions as per your requirement
  else {
    validCombination = false;
  }
  // Error handling if no valid combinations are found
  if (!validCombination) {
    alert("Error: You have selected invalid combinations-Check your catalogue first to be sure");
}
}

// Function to filter the Implant Diameter based on Implant System
// Ensure dropdowns are hidden on page load
window.onload = function () {
  document.getElementById("value3").style.visibility = "hidden"; // Hide Diameter dropdown
  document.getElementById("value1").style.visibility = "hidden"; // Hide Implant dropdown
};

// Function to filter Implant Diameter dropdown based on Implant System
function filterDiameters() {
  const implantSystem = document.getElementById("value2").value;
  const diameterDropdown = document.getElementById("value3");
  const allOptions = diameterDropdown.querySelectorAll("option");

  // Hide Implant dropdown initially
  document.getElementById("value1").style.visibility = "hidden";

  // Hide Diameter dropdown if no Implant System is selected
  if (!implantSystem) {
      diameterDropdown.style.visibility = "hidden";
      return;
  }

  // Show the Diameter dropdown when an Implant System is selected
  diameterDropdown.style.visibility = "visible";

  // Reset all options to be visible
  allOptions.forEach(option => {
      option.style.display = "block";
  });

  // Filter options based on Implant System selection
  if (implantSystem === "External Hex") {
      allOptions.forEach(option => {
          if (!["3(IP)", "3.25(IBN)", "4(IB)", "5(BA)"].includes(option.value)) {
              option.style.display = "none"; // Hide irrelevant options
          }
      });
  }

  if (implantSystem === "Deep Conical") {
      allOptions.forEach(option => {
          if (!["3(DC3)", "3.5(DC4)", "4(DC4)", "5(DC5)"].includes(option.value)) {
              option.style.display = "none";
          }
      });
  }

  if (implantSystem === "Internal Hex(Provata)") {
      allOptions.forEach(option => {
          if (!["3.3(3M)", "4(M)", "5(M-P45)"].includes(option.value)) {
              option.style.display = "none";
          }
      });
  }

  if (implantSystem === "Internal Octagon") {
      allOptions.forEach(option => {
          if (!["4(ITT4)", "5(ITT5)"].includes(option.value)) {
              option.style.display = "none";
          }
      });
  }

  if (implantSystem === "Single Platform") {
      allOptions.forEach(option => {
          if (!["3.5(SP)", "4(SP)", "5(SP)"].includes(option.value)) {
              option.style.display = "none";
          }
      });
  }

  if (implantSystem === "Tri-Nex") {
      allOptions.forEach(option => {
          if (!["3.5(EL-35)", "4.3(EL-43)", "5(EL-50)"].includes(option.value)) {
              option.style.display = "none";
          }
      });
  }

  if (implantSystem === "Internal Hex(M-Series)") {
      allOptions.forEach(option => {
          if (!["3.7(IM-T37)", "4.2(IM-T42)", "5(IM-T50)"].includes(option.value)) {
              option.style.display = "none";
          }
      });
  }

  if (implantSystem === "Inverta DC") {
      allOptions.forEach(option => {
          if (!["IV-DC30-37", "IV-DC35-45", "IV-DC40-50"].includes(option.value)) {
              option.style.display = "none";
          }
      });
  }

  if (implantSystem === "Inverta Ex Hex") {
      allOptions.forEach(option => {
          if (!["IV-EX30-37", "IV-EX35-45", "IV-EX40-50"].includes(option.value)) {
              option.style.display = "none";
          }
      });      
  }
}

// Function to filter Implant dropdown based on selected Diameter
function filterImplants() {
  const diameter = document.getElementById("value3").value;
  const implantDropdown = document.getElementById("value1");
  const allOptions = implantDropdown.querySelectorAll("option");

  // Hide Implant dropdown if no Diameter is selected
  if (!diameter) {
      implantDropdown.style.visibility = "hidden";
      return;
  }

  // Show Implant dropdown when Diameter is selected
  implantDropdown.style.visibility = "visible";

  // Reset all options to be visible
  allOptions.forEach(option => {
      option.style.display = "block";
  });

  // Apply filtering based on selected Diameter
  if (diameter === "3(IP)") {
      allOptions.forEach(option => {
          if (!["IP-8.5", "IP-10", "IP-11.5", "IP-13", "IP-15"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
  }
  if (diameter === "3.25(IBN)") {
    allOptions.forEach(option => {
        if (!["IBNT-8.5", "IBNT-10", "IBNT-11.5", "IBNT-13", "IBNT-15"].includes(option.value)) {
            option.style.display = "none"; // Hide non-matching implants
        }
    });
  }
  if (diameter === "4(IB)") {
    allOptions.forEach(option => {
        if (!["IBT/IBR-8.5", "IBT/IBR-10", "IBT/IBR-11.5", "IBT/IBR-13", "IBT/IBR-15"].includes(option.value)) {
            option.style.display = "none"; // Hide non-matching implants
        }
    });
  }
  if (diameter === "5(BA)") {
    allOptions.forEach(option => {
        if (!["BAT/BAR-8.5", "BAT/BAR-10", "BAT/BAR-11.5", "BAT/BAR-13", "BAT/BAR-15"].includes(option.value)) {
            option.style.display = "none"; // Hide non-matching implants
        }
    });
  }
  if (diameter === "3(DC3)") {
    allOptions.forEach(option => {
        if (!["DCT3009", "DCT3011", "DCT3013", "DCT3015"].includes(option.value)) {
            option.style.display = "none"; // Hide non-matching implants
        }
    });
  }  
    if (diameter === "3.5(DC4)") {
      allOptions.forEach(option => {
          if (!["DCT3508", "DCT3509", "DCT3511", "DCT3513", "DCT3515"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "4(DC4)") {
      allOptions.forEach(option => {
          if (!["DCT4008", "DCT4009", "DCT4011", "DCT4013", "DCT4015"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      }); 
    }  
    if (diameter === "5(DC5)") {
      allOptions.forEach(option => {
          if (!["DCR5008", "DCT/DCR5009", "DCT/DCR5011", "DCT/DCR5013", "DCT/DCR5015"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "3.3(3M)") {
      allOptions.forEach(option => {
          if (!["PRO308", "PRO310", "PRO311", "PRO313", "PRO315"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "4(M)") {
      allOptions.forEach(option => {
          if (!["PRO408", "PRO410", "PRO411", "PRO413", "PRO415"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "5(M-P45)") {
      allOptions.forEach(option => {
          if (!["PRO508", "PRO510", "PRO511", "PRO513", "PRO515"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "4(ITT4)") {
      allOptions.forEach(option => {
          if (!["ITT408", "ITT410", "ITT412", "ITT414"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "5(ITT5)") {
      allOptions.forEach(option => {
          if (!["ITT508", "ITT510", "ITT512", "ITT514"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "3.5(SP)") {
      allOptions.forEach(option => {
          if (!["SP3508", "SP3510", "SP3511", "SP3513", "SP3516"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "4(SP)") {
      allOptions.forEach(option => {
          if (!["SP4008", "SP4010", "SP4011", "SP4013", "SP4016"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "5(SP)") {
      allOptions.forEach(option => {
          if (!["SP5008", "SP5010", "SP5011", "SP5013", "SP5016"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "3.5(EL-35)") {
      allOptions.forEach(option => {
          if (!["IA-LH-35-8", "IA-LH-35-10", "IA-LH-35-11.5", "IA-LH-35-13", "IA-LH-35-16"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "4.3(EL-43)") {
      allOptions.forEach(option => {
          if (!["IA-LH-43-8", "IA-LH-43-10", "IA-LH-43-11.5", "IA-LH-43-13", "IA-LH-43-16"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "5(EL-50)") {
      allOptions.forEach(option => {
          if (!["IA-LH-50-8", "IA-LH-50-10", "IA-LH-50-11.5", "IA-LH-50-13", "IA-LH-50-16"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "3.7(IM-T37)") {
      allOptions.forEach(option => {
          if (!["IM-T3708", "IM-T3710", "IM-T3711", "IM-T3713", "IM-T3715"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "4.2(IM-T42)") {
      allOptions.forEach(option => {
          if (!["IM-T4208", "IM-T4210", "IM-T4211", "IM-T4213", "IM-T4215"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "5(IM-T50)") {
      allOptions.forEach(option => {
          if (!["IM-T5008", "IM-T5010", "IM-T5011", "IM-T5013", "IM-T5015"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "IV-DC30-37") {
      allOptions.forEach(option => {
          if (!["IV-DC30-3708", "IV-DC30-3710", "IV-DC30-3711", "IV-DC30-3713", "IV-DC30-3715"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "IV-DC35-45") {
      allOptions.forEach(option => {
          if (!["IV-DC35-4508", "IV-DC35-4510", "IV-DC35-4511", "IV-DC35-4513", "IV-DC35-4515"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "IV-DC40-50") {
      allOptions.forEach(option => {
          if (!["IV-DC40-5008", "IV-DC40-5010", "IV-DC40-5011", "IV-DC40-5013", "IV-DC40-5013"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "IV-EX30-37") {
      allOptions.forEach(option => {
          if (!["IV-EX30-3708", "IV-EX30-3710", "IV-EX30-3711", "IV-EX30-3713", "IV-EX30-3715"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "IV-EX35-45") {
      allOptions.forEach(option => {
          if (!["IV-EX35-4508", "IV-EX35-4510", "IV-EX35-4511", "IV-EX35-4513", "IV-EX35-4515"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });
    }  
    if (diameter === "IV-EX40-50") {
      allOptions.forEach(option => {
          if (!["IV-EX40-5008", "IV-EX40-5010", "IV-EX40-5011", "IV-EX40-5013", "IV-EX40-5013"].includes(option.value)) {
              option.style.display = "none"; // Hide non-matching implants
          }
      });                                                                                                                                              
}
}

// Function to print the selected image
function printImage() {
  window.print();
}