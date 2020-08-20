// Modules

const Tweeter = function () {
    const _posts = [{
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }]
    let postIdCounter = _posts.length
    let commentIdCounter = 6
    const getPosts = () => _posts
    const addPost = (pText) => {
        debugger
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
            debugger
            if (p.id == postID) {
                p.comments.push({id: "c" + (commentIdCounter + 1), text: cText,})
            }
        }
        commentIdCounter++
    }
    const removeComment = (postID, commentID) => {
        debugger
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