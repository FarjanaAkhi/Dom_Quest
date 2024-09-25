  
          const b1 = document.getElementById("btn1");
          const b2 = document.getElementById("btn2");
          
          // Add event listeners and pass the function as a callback
          b1.addEventListener("click", function() {
              change(b1, b2);
              document.getElementById("mainPart").classList.remove("hidden") ; 
             
          });
  
          b2.addEventListener("click", function() {
              change(b2, b1);
              b1.classList.remove("bg-lime-600");
            document.getElementById("mainPart").classList.add("hidden") ; 
          
          

 });
  
    


  
         
          function change(activeButton, inactiveButton) {
              
              if (activeButton.style.backgroundColor === 'green') {
                  
                  activeButton.style.backgroundColor = '';
                  activeButton.style.color = '';
              } else {
                
                  activeButton.style.backgroundColor = 'green';
                  activeButton.style.color = 'white';
  
                 
                  inactiveButton.style.backgroundColor = '';
                  inactiveButton.style.color = '';
              }
          }
  

          function handleDonation(event, inputId, totalId, donationId) {
           
            event.preventDefault();
            
           
            const inputValue = document.getElementById(inputId).value;
            const numberValue = Number(inputValue);
        
           const totalElement = document.getElementById(totalId);
            const total = parseFloat(totalElement.innerText);
        
           
            const donationElement = document.getElementById(donationId);
            const currentDonation = parseFloat(donationElement.innerText);
        
           
            if (isNaN(numberValue) || numberValue <= 0) {
                alert("Please enter a valid donation amount greater than 0.");
            } else if (numberValue > total) {
                alert("Donation amount exceeds the available total balance.");
            } else {
               alert("congrats!!! you have sucessfully donated");
                const newTotal = total - numberValue;
        
               
                totalElement.innerText = newTotal;
        
                
                const newDonation = currentDonation + numberValue;
                donationElement.innerText = newDonation;
            }
        }
        
        
        document.getElementById("noa").addEventListener("click", function(event) {
            handleDonation(event, "input1", "total-bal", "donation1");
        });
        document.getElementById("feni").addEventListener("click", function(event) {
            handleDonation(event, "input2", "total-bal", "donation2");
        });
        
        document.getElementById("aid").addEventListener("click", function(event) {
            handleDonation(event, "input3", "total-bal", "donation3");
        });
        
        