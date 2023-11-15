window.onload=function(){
    getApiData();
    const menu_btn=document.querySelector('.right-bar');
    const mobile_nav=document.querySelector('.mobile-nav');
  
    menu_btn.addEventListener('click',function(){
      menu_btn.classList.toggle('is-active');
      mobile_nav.classList.toggle('is-active');
    });
    
const btnApi = document.querySelector(".btn-api");
const outputApi = document.querySelector(".banner");



async function getApiData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const jsonData = await response.json();
  
  let output="";
    
  jsonData.slice(0,20).map((post)=>{

    output+=` 
               <div class="row">
                 <div class="row-3">
                   <div class="card">
                     <h4 id="postid1">PostId : ${post.postId}</h4>
                      <div class="card-body">
                        <p id="id"><b>Id :</b> ${post.id}</p>  
                        <p id="name"><b>Name :</b> ${post.name}</p>
                        <p id="email"><b>Email :</b> ${post.email}</p>
                        <p id="body"><b>Body :</b> ${post.body}</p>
                      </div>
                   </div>
                 </div>
              </div>
             `        
});

document.getElementById("card").innerHTML=output;
}

  };
