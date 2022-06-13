async function editPostHandler(event) {
    event.preventDefault();
    const title = document.getElementById('post-title');
    // const body = document.getElementById('post-body');
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch("/api/post" + post_id.value, {
        method: "PUT",
        body: JSON.stringify({
            title
        }),
        headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#edit-post-form').addEventListener('submit', editPostHandler);