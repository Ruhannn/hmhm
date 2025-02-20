function uwuw() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(r => r.json())
      .then(data => displayUsers(data))
    //   .catch(error => console.log(error));
  }
  
  function displayUsers(data) {
    const userContainer = document.getElementById("user-container");
    const ul = document.createElement("ul"); 
  
    for (const user of data) {
      console.log(user.username);
      const li = document.createElement("li");
      li.innerHTML = user.username; 
      ul.appendChild(li);
    }
  
    userContainer.appendChild(ul);
  }
  