function validate() {
    var name = document.getElementById("name").value;
    var rating = document.getElementById("rating").value;
    if (name == "") {
        return false;
    }
    if (rating == "") {
        return false;
    }
    return true;
}

function addData(event) {
    if (validate() === true) {
        event.preventDefault();
        const name = event.target.name.value;
        const rating = event.target.rating.value;
        var c1 = event.target.onestar.value;
        var c2 = event.target.twostar.value;
        var c3 = event.target.threestar.value;
        var c4 = event.target.fourstar.value;
        var c5 = event.target.fivestar.value;
        if (rating == 1) {
            c1 = ++c1;
            document.getElementById('onestar').value = c1;
        }
        if (rating == 2) {
            c2 = ++c2;
            document.getElementById('twostar').value = c2;
        }
        if (rating == 3) {
            c3 = ++c3;
            document.getElementById('threestar').value = c3;
        }
        if (rating == 4) {
            c4 = ++c4;
            document.getElementById('fourstar').value = c4;
        }
        if (rating == 5) {
            c5 = ++c5;
            document.getElementById('fivestar').value = c5;
        }
        const obj = {
            name,
            rating,
            c1, c2, c3,
            c4, c5
        }
        // 010ea0e3d1a44853bf61df8d9375bce9
        async function postfunc() {
            const postData = axios.post("https://crudcrud.com/api/531756ac8878421e851149132a8a4879/feedData", obj)
            try {
                const response = await postData;
                showNew(response.data);
                console.log(response)
            } catch (err) {
                console.log(err);
            }
        }
        postfunc();
    }
}

function showNew(user) {
    document.getElementById("name").value = "";
    document.getElementById("rating").value = "";
    const parentNode = document.getElementById("listOfUsers");
    var ch = `<li id=${user._id}> ${user.name}-  ${user.rating}-
    <button onclick="delData('${user._id}','${user.rating}')" class = "btn btn-danger m-2">Delete</button>
    <button  onclick="editData('${user._id}','${user.name}','${user.rating}')" class = "btn btn-warning m-2">Edit</button>`
    parentNode.innerHTML = parentNode.innerHTML + ch;
}


function showNew1(userr) {
    document.getElementById("onestar").value = `${userr.c1}`;
    document.getElementById("twostar").value = `${userr.c2}`;
    document.getElementById("threestar").value = `${userr.c3}`;
    document.getElementById("fourstar").value = `${userr.c4}`;
    document.getElementById("fivestar").value = `${userr.c5}`;
}

window.addEventListener("DOMContentLoaded", () => {
    async function getfunc() {
        const getData = axios.get("https://crudcrud.com/api/531756ac8878421e851149132a8a4879/feedData")
        try {
            const response = await getData;
            for (var i = 0; i < response.data.length; i++) {
                showNew(response.data[i]);
            }
            showNew1(response.data[response.data.length - 1]);
        } catch (err) {
            console.log(err);
        }
    }
    getfunc();
})

function delData(userId, rating) {
    var d1 = document.getElementById("onestar").value;
    var d2 = document.getElementById("twostar").value;
    var d3 = document.getElementById("threestar").value;
    var d4 = document.getElementById("fourstar").value;
    var d5 = document.getElementById("fivestar").value;
    if (rating == 1) {
        d1 = --d1;
        document.getElementById('onestar').value = d1;
    }
    if (rating == 2) {
        d2 = --d2;
        document.getElementById('twostar').value = d2;
    }
    if (rating == 3) {
        d3 = --d3;
        document.getElementById('threestar').value = d3;
    }
    if (rating == 4) {
        d4 = --d4;
        document.getElementById('fourstar').value = d4;

    }
    if (rating == 5) {
        d5 = --d5;
        document.getElementById('fivestar').value = d5;
    }
    async function delfunc() {
        const delData = axios.delete(`https://crudcrud.com/api/531756ac8878421e851149132a8a4879/feedData/${userId}`)
        try {
            const response = await delData;
            removeUser(userId);
        } catch (err) {
            console.log(err);
        }
    }
    delfunc();
}

function removeUser(userId) {
    const parentNode = document.getElementById("listOfUsers");
    const childNodeToBeDeleted = document.getElementById(userId);
    if (childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted);
    }
}

document.getElementById("submit").style.display = "block";
document.getElementById("update").style.display = "none";
function editData(userId, name, rating) {
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block";
    document.getElementById("name").value = name;
    document.getElementById("rating").value = rating;
    delData(userId, rating)
    document.querySelector("#update").onclick = function () {
        document.getElementById("submit").style.display = "block";
        document.getElementById("update").style.display = "none";
    }
}



