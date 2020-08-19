// Modules

const Tweeter = function () {
    const posts = []
    let postIdCounter = posts.length
    let commentIdCounter = 6
    const getPosts = () => posts
    const addPost = (pText) => {
        debugger
        posts.push({ text: pText, id: "p" + (postIdCounter + 1), comments: [] })
        postIdCounter++
    }
    const removePost = (postID) => {
        for (p of posts) {
            if (p.id == postID) {
                posts.splice(posts.indexOf(p), 1)
            }
        }
    }
    const addComment = (cText, postID) => {
        for (p of posts) {
            debugger
            if (p.id == postID) {
                p.comments.push({id: "c" + (commentIdCounter + 1), text: cText,})
            }
        }
        commentIdCounter++
    }
    const removeComment = (postID, commentID) => {
        debugger
        for (p of posts) {
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