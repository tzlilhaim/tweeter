const Renderer = function () {
    renderPosts = posts => {
        
        // Empty posts in view
        $("#posts").empty()

        // Generate comments section for the post's comments
        const _genPostComments = commentsArr => {
            
            // If there are comments on this post, generate a comment element for each
            let _cElements = ``
            if (commentsArr.length) {

                // Create comment delete span element
                const _commentDeleteEl = `<span class='delete-comment'>X</span>`

                // Run all over coments arr and create full comment node
                for (comment of commentsArr) {
                    _cElements = _cElements + `<div data-id='${comment.id}'>${_commentDeleteEl + comment.text}</div>`
                }
            }

            // Create the add comment div
            const _commentAddEl = `<div><input placeholder='Got something to say?'><button>Comment</button></div>`
            let _commentsSection = `<div class='comments'>${_cElements + _commentAddEl}</div>`
            return _commentsSection
        }

        // Generate a span element for the post's text
        const _genPostText = text => `<span class='post-text'>${text}</span>`
        
        // Create the post's delete button element
        const _postDeleteEl = `<button class='delete'>Delete Post</button>`

        // Generate a full post div element and its content
        const _genPostElement = p => {
            
            let _postElement = `<div class='post' data-id='${p.id}'>
                ${_genPostText(p.text) + _genPostComments(p.comments) + _postDeleteEl}</div>`
            return _postElement
        }

        // Run all over posts arr and create & append nodes to the html
        for (p of posts) {
            $("#posts").append(_genPostElement(p))
        }
    }
    return { renderPosts }
}