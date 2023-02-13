const page_number_heading = document.getElementById("page_number_heading");
const ordered_List = document.getElementById("ordered_List");

const nextBtn = document.getElementById("load_next");
const load_prev = document.getElementById("load_prev");

let API_URL = `https://api.github.com/repositories/1296269/issues?page=$%7B1%7D&`;
let pageCount = 1;

window.addEventListener("load", apiData)

nextBtn.addEventListener("click", () => {
    pageCount += 1
    apiData(pageCount)

});


load_prev.addEventListener("click", () => {
    if (pageCount == 1) {
        return
    } else {
        pageCount -= 1
        apiData(pageCount)
    }

});


function apiData() {

    fetch(`${API_URL}${per_page = pageCount}`).then(res => {
        return res.json();
    }).then(data => {

        ordered_List.innerHTML = `
        <li>URL: ${data[pageCount].url}</li>
        <li>Repository URL: ${data[pageCount].repository_url}</li>
        <li>Labels URL: ${data[pageCount].labels_url}</li>
        <li>Comments URL: ${data[pageCount].comments_url}</li>
        <li>Events URL: ${data[pageCount].events_url}</li>
        <li>HTML URL: ${data[pageCount].html_url}</li>
        <li>ID: ${data[pageCount].id}</li>
        <li>Node Id: ${data[pageCount].node_id}</li>
        <li>Number: ${data[pageCount].number}</li>
        <li>Title: ${data[pageCount].title}</li>
        <li>Body: ${data[pageCount].body}</li>
        <li>Avatar URL: ${data[pageCount].user.avatar_url}</li>
        <li>Type: ${data[pageCount].user.type}</li>
        <li>Admin: ${data[pageCount].user.ite_admin}</li>
        <li>Milestone: ${data[pageCount].milestone}</li>
        <li>Comments: ${data[pageCount].comments}</li>
        <li>Author association: ${data[pageCount].author_association}</li>
        <li>Draft: ${data[pageCount].draft}</li>
        <li>Timeline URL: ${data[pageCount].timeline_url}</li>
        `
        if (pageCount <= 1) {
            load_prev.style.display = "none";
            page_number_heading.innerHTML = `Page Number : ${pageCount}`

        } else {
            load_prev.style.display = "inline";
            page_number_heading.innerHTML = `Page Number : ${pageCount}`
        }

    }).catch(e => {
        console.log(e)
    })


}