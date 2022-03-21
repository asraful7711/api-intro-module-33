
function loadData(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data  => console.log(data));
}


function loadUsers(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => displayUsers(data));
}
function loadPost(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => displayPost(data));
}
function displayUsers(data){
  const ul = document.getElementById('users');
    for ( user of data){
      console.log(user.name)
      const li = document.createElement('li');
      li.innerText = `Name:${user.name} 
      User Email:${user.email}`
      ul.appendChild(li)
    }
}

function displayPost(data){
  console.log(data)
  const ul = document.getElementById('post');
  for( post of data){
    const li = document.createElement('li');
    li.innerText = `Title:${post.title}`
    ul.appendChild(li)
    
  }
}
