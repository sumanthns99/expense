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
        const obj = {
            name,
            rating
        }
        axios.post("https://crudcrud.com/api/f318e35071fa4470acb0b1af606fd6f8/feedData", obj)
            .then((response) => {
                showNew(response.data);
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
        var c1 = document.getElementById("1star").value;
        var c2 = document.getElementById("2star").value;
        var c3 = document.getElementById("3star").value;
        var c4 = document.getElementById("4star").value;
        var c5 = document.getElementById("5star").value;
        if (rating == 1) {
            c1 = ++c1;
            document.getElementById('1star').value = c1;
        }
        if (rating == 2) {
            c2 = ++c2;
            document.getElementById('2star').value = c2;
        }
        if (rating == 3) {
            c3 = ++c3;
            document.getElementById('3star').value = c3;
        }
        if (rating == 4) {
            c4 = ++c4;
            document.getElementById('4star').value = c4;
        }
        if (rating == 5) {
            c5 = ++c5;
            document.getElementById('5star').value = c5;
        }
    }
}

function showNew(user) {
    document.getElementById("name").value = "";
    document.getElementById("rating").value = "";

    const parentNode = document.getElementById("listOfUsers");
    var childHTML = `<li id=${user._id}> ${user.name}-  ${user.rating}- 
    <button onclick="delData('${user._id}','${user.rating}')" class = "btn btn-danger m-2">Delete</button>
    <button  onclick="editData('${user._id}','${user.name}','${user.rating}')" class = "btn btn-warning m-2">Edit</button>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/f318e35071fa4470acb0b1af606fd6f8/feedData")
        .then((response) => {
            console.log(response)
            for (var i = 0; i < response.data.length; i++) {
                showNew(response.data[i]);
            }
        })
        .catch((err) => {
            console.log(err)
        })
})

function delData(userId, rating) {
    axios.delete(`https://crudcrud.com/api/f318e35071fa4470acb0b1af606fd6f8/feedData/${userId}`)
        .then((response) => {
            removeUser(userId);
        })
        .catch((err) => {
            console.log(err)
        })
    var d1 = document.getElementById("1star").value;
    var d2 = document.getElementById("2star").value;
    var d3 = document.getElementById("3star").value;
    var d4 = document.getElementById("4star").value;
    var d5 = document.getElementById("5star").value;
    if (rating == 1) {
        d1 = --d1;
        document.getElementById('1star').value = d1;
    }
    if (rating == 2) {
        d2 = ++d2;
        document.getElementById('2star').value = d2;
    }
    if (rating == 3) {
        d3 = ++d3;
        document.getElementById('3star').value = d3;
    }
    if (rating == 4) {
        d4 = ++d4;
        document.getElementById('4star').value = d4;
    }
    if (rating == 5) {
        d5 = ++d5;
        document.getElementById('5star').value = d5;
    }
}

function removeUser(userId) {
    const parentNode = document.getElementById("listOfUsers");
    const childNodeToBeDeleted = document.getElementById(userId);
    if (childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted);
    }
}

function editData(userId, name, rating) {
    document.getElementById("name").value = name;
    document.getElementById("rating").value = rating;

    delData(userId)
}



