async function deletePostHandler(event) {
    event.preventDefault();
    
const post_id = document.getElementById('post_id')

    fetch("/api/post/" + post_id.value, {
        method: "DELETE"
    })
    .then(function() {
        document.location.replace("/dashboard");
    })
    .catch(err => console.log(err))
}
  
  
  document.querySelector('#delete-btn').addEventListener('click', deletePostHandler);