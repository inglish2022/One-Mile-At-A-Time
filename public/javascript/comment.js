async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const postId = document.querySelector('input[name="post-id"]').value;
    if (comment_text) {
        await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            postId,
            comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        document.location.reload();
      }
    };
    
  
    
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);