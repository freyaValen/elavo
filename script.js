function loadComponent(id,comp){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
       if(xhr.readyState===XMLHttpRequest.DONE){
           if(xhr.status===200){
               document.getElementById(id).innerHTML = xhr.responseText
           }
           else{
               console.error("gagal memuat navbar")
           }
       }
    };
    xhr.open('GET',comp,true);
    xhr.send()
   }
   
   loadComponent("navbarContainer","navbar.html")
   loadComponent("footerContainer","footer.html")

   soapModal = document.getElementById("soapModal")
   soapModal.onclick = function(){
    
   }
