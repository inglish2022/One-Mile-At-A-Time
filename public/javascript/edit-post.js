async function editPostHandler(event) {
    event.preventDefault();
    const title = document.getElementById('post-title');
    const body = document.getElementById('post-body');
    const post_id = document.getElementById('post_id')

    fetch("/api/post/" + postId.value, {
        method: "PUT", 
        body: JSON.stringify({
            title: title.value,
            body: body.value
        }),
        headers: { "Content-Type": "application/json"}
    })
        .then(function() {
            document.location.replace("/dashboard");
        })
        .catch(err => console.log(err))
  }
  
  document.querySelector('#edit-post-form').addEventListener('submit', editPostHandler);