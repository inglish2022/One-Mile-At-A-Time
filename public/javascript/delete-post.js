async function deletePostHandler(event) {
    event.preventDefault();
    
const post_id = document.getElementById('post-id').value

    fetch("/api/post/" + post_id, {
        method: "DELETE"
    })
    .then(function() {
        document.location.replace("/dashboard");
    })
    .catch(err => console.log(err))
}
  
  
  document.querySelector('#delete-btn').addEventListener('click', deletePostHandler);