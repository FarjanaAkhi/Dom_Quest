  
          const b1 = document.getElementById("btn1");
          const b2 = document.getElementById("btn2");
          
          // Add event listeners 
          b1.addEventListener("click", function() {
              change(b1, b2);
              document.getElementById("mainPart").classList.remove("hidden") ; 
              document.getElementById("historyContainer").classList.add("hidden");
             
          });
  
          b2.addEventListener("click", function() {
              change(b2, b1);
              b1.classList.remove("bg-lime-600");
             document.getElementById("mainPart").classList.add("hidden") ;
             document.getElementById("historyContainer").classList.remove("hidden");
          
          

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
            console.log("Button clicked for donation:", inputId);
           
            const inputValue = document.getElementById(inputId).value;
            const numberValue = Number(inputValue);
        
           const totalElement = document.getElementById(totalId);
            const total = parseFloat(totalElement.innerText);
        
           
            const donationElement = document.getElementById(donationId);
            const currentDonation = parseFloat(donationElement.innerText);
        
           
            if (isNaN(numberValue) || numberValue <= 0) {
                
            } else if (numberValue > total) {
                alert("Donation amount exceeds the available total balance.");
            } else {
              
               
               const newTotal = total - numberValue;
        
                 totalElement.innerText = newTotal;
        
                
                const newDonation = currentDonation + numberValue;
                donationElement.innerText = newDonation;
              
        
               
            }
        }

        //event for function handle//
        document.getElementById("noa").addEventListener("click", function(event) {
            handleDonation(event, "input1", "total-bal", "donation1");
        });
        document.getElementById("feni").addEventListener("click", function(event) {
            handleDonation(event, "input2", "total-bal", "donation2");
        });
        document.getElementById("aid").addEventListener("click", function(event) {
            handleDonation(event, "input3", "total-bal", "donation3");
        });

       

        //modal// 


         
         function showModal(donationAmount) {
            
            const modalOverlay = document.createElement('div');
            modalOverlay.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center');
            modalOverlay.id = "donationModal";

           
            const modalContent = document.createElement('div');
            modalContent.classList.add('bg-white', 'rounded-lg', 'p-8', 'max-w-sm', 'w-full');
            modalOverlay.appendChild(modalContent);

            
            const image = document.createElement('img');
            image.src = "./assets/coin.png"; 
           
            image.classList.add('mx-auto', 'mb-4', 'w-24', 'h-24');
            modalContent.appendChild(image);

            
            const title = document.createElement('h2');
            title.classList.add('text-2xl', 'font-bold', 'text-center', 'mb-4');
            title.innerText = "Thank You!";
            modalContent.appendChild(title);

           
            const message = document.createElement('p');
            message.classList.add('text-gray-700', 'text-center', 'mb-6');
            message.innerHTML = `Your donation of <span>${donationAmount}</span> BDT has been received. Thank you for your generosity!`;
            modalContent.appendChild(message);

            const closeButton = document.createElement('button');
            closeButton.classList.add('bg-blue-500', 'text-white', 'py-2', 'px-4', 'rounded-lg');
            closeButton.innerText = "Close";
            modalContent.appendChild(closeButton);

            document.body.appendChild(modalOverlay);

           
            closeButton.addEventListener('click', function() {
                modalOverlay.remove(); 
            });
        }

       
        document.getElementById("noa").addEventListener("click", function(event) {
            event.preventDefault();
            const donationAmount = document.getElementById("input1").value;
            if(donationAmount>0) {
            showModal(donationAmount); 
            }
            else {
                alert("please enter valid amount larger than 0");
            }
        });

        document.getElementById("feni").addEventListener("click", function(event) {
            event.preventDefault();
            const donationAmount = document.getElementById("input2").value;
            if(donationAmount>0) {
                showModal(donationAmount); 
                }
                else {
                    alert("please enter valid amount larger than 0");
                }
           
        });

        document.getElementById("aid").addEventListener("click", function(event) {
            event.preventDefault();
            const donationAmount = document.getElementById("input3").value;
            if(donationAmount>0) {
                showModal(donationAmount); 
                }
                else {
                    alert("please enter valid amount larger than 0");
                }
        });

        // modal done //


        // history //

       
                
                function addDonation(amount , place) {
                   
                    const now = new Date();
                    const date = now.toLocaleDateString();
                    const time = now.toLocaleTimeString();
        
                   
                    const historyItem = document.createElement("div");
                    historyItem.className = "bg-slate-100 text-center space-y-4 p-3 rounded-xl border-1-2 border-indigo-500";
        
                   
                    historyItem.innerHTML = `
                       <p class="text-xs font-bold">${amount} BDT has been donated for ${place} </p>
                       <p class="text-xs">Date: ${date}, Time: ${time}</p>`;
        

                    document.getElementById("historyContainer").appendChild(historyItem);
                }
        
                
                document.getElementById("noa").addEventListener("click", function(event) {
                    
                    event.preventDefault();

                    const input = document.getElementById("input1").value;
                    const b2 = document.getElementById("btn2"); 
        
                    
                    b2.addEventListener("click", function() {
                        if(input>0)
                        addDonation(input,"Noakhali"); 
                    });
                });
           

                document.getElementById("feni").addEventListener("click", function(event) {
                   
                    event.preventDefault();
                    const input = document.getElementById("input2").value;
                    const b2 = document.getElementById("btn2"); 
        
                   
                    b2.addEventListener("click", function(event) {
                        if(input>0)
                        addDonation(input,"Feni"); 
                    });
                });
              
                document.getElementById("aid").addEventListener("click", function(event) {
                    event.preventDefault();
                    const input = document.getElementById("input3").value;
                    const b2 = document.getElementById("btn2"); 
        
                    
                    b2.addEventListener("click", function() {
                        if(input>0)
                        addDonation(input,"Aid");
                    });
                });
           