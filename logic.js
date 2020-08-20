// Modules

const Tweeter = function () {
    const _posts = []
    let postIdCounter = _posts.length
    let commentIdCounter = 0
    const getPosts = () => _posts
    const addPost = (pText) => {
        _posts.push({ text: pText, id: "p" + (postIdCounter + 1), comments: [] })
        postIdCounter++
    }
    const removePost = (postID) => {
        for (p of _posts) {
            if (p.id == postID) {
                _posts.splice(_posts.indexOf(p), 1)
            }
        }
    }
    const addComment = (cText, postID) => {
        for (p of _posts) {
            if (p.id == postID) {
                p.comments.push({id: "c" + (commentIdCounter + 1), text: cText,})
            }
        }
        commentIdCounter++
    }
    const removeComment = (postID, commentID) => {
        for (p of _posts) {
            if (p.id == postID) {
                for (c of p.comments) {
                    if (c.id == commentID) {
                        p.comments.splice(
                            p.comments.indexOf(c), 1)
                    }
                }
            }
        }
    }

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}