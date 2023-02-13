const page_number_heading = document.getElementById("page_number_heading");
const ordered_List = document.getElementById("ordered_List");

const nextBtn = document.getElementById("load_next");
const load_prev = document.getElementById("load_prev");

let API_URL = `https://api.github.com/repositories/1296269/issues?page=`;
let per_page = 5;
let pageCount = 1;

window.addEventListener("load", () => {
    apiData(pageCount);
});

nextBtn.addEventListener("click", () => {
    pageCount++;
    apiData(pageCount);
});

load_prev.addEventListener("click", () => {
    if (pageCount <= 1) {
        return;
    } else {
        pageCount--;
        apiData(pageCount);
    }
});

function apiData(pageNum) {
    fetch(`${API_URL}${pageNum}&per_page=${per_page}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            ordered_List.innerHTML = `
        <li>TITLE : ${data[0].title}</li>
        <li>TITLE : ${data[1].title}</li>
        <li>TITLE : ${data[2].title}</li>
        <li>TITLE : ${data[3].title}</li>
        <li>TITLE : ${data[4].title}</li>
      `;
            page_number_heading.innerHTML = `Page Number: ${pageCount}`;

            if (pageCount <= 1) {
                load_prev.style.display = "none";
            } else {
                load_prev.style.display = "inline";
            }
        })
        .catch((e) => {
            console.log(e);
        });
}


