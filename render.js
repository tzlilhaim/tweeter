const Renderer = function () {
    renderPosts = posts => {
        
        // Empty posts in view
        $("#posts").empty()

        // Generate comments section for the post's comments
        const genPostComments = commentsArr => {
            
            // If there are comments on this post, generate a comment element for each
            let cElements = ``
            if (commentsArr.length) {

                // Create comment delete span element
                const commentDeleteEl = `<span class='delete-comment'>X</span>`

                // Run all over coments arr and create full comment node
                for (comment of commentsArr) {
                    cElements = cElements + `<div data-id='${comment.id}'>${commentDeleteEl + comment.text}</div>`
                }
            }

            // Create the add comment div
            const commentAddEl = `<div><input placeholder='Got something to say?'><button>Comment</button></div>`
            let commentsSection = `<div class='comments'>${cElements + commentAddEl}</div>`
            return commentsSection
        }

        // Generate a span element for the post's text
        const genPostText = text => `<span class='post-text'>${text}</span>`
        
        // Create the post's delete button element
        const postDeleteEl = `<button class='delete'>Delete Post</button>`

        // Generate a full post div element and its content
        const genPostElement = post => {
            
            let postElement = `<div class='post' data-id='${post.id}'>
                ${genPostText(post.text) + genPostComments(post.comments) + postDeleteEl}</div>`
            return postElement
        }

        // Run all over posts arr and create & append nodes to the html
        for (post of posts) {
            $("#posts").append(genPostElement(post))
        }
    }
    return { renderPosts }
}