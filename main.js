const tweeter = Tweeter()
const renderer = Renderer()

const render = () => renderer.renderPosts(tweeter.getPosts())
render()

// On click of Twit button
const post = () => {
    tweeter.addPost($("#input").val())
    render()
}

// On click of delete post button
$("#posts").on("click", ".delete", function () {
    tweeter.removePost($(this).closest(".post").data().id)
    render()
})

// On click of add comment button
$("#posts").on("click", "button:contains(Comment)", function () {
    tweeter.addComment(
        $(this).closest(".comments").find("input").val(),
        $(this).closest(".post").data().id)
    render()
})

// On click of delete comment button
$("#posts").on("click", ".delete-comment", function () {
    tweeter.removeComment(
        $(this).closest(".post").data().id,
        $(this).closest("div").data().id
    )
    render()
})