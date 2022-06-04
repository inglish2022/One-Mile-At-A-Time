async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const postId = document.querySelector('input[name="post-id"]').value;
    if (body) {
        await fetch('/api/comment', {
          method: 'POST',
          body: JSON.stringify({
            postId,
            body
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        document.location.reload();
      }
    };
    
  
    
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);