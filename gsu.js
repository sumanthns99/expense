
function addData(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const obj = {
        name
    }
    axios.post("https://crudcrud.com/api/f318e35071fa4470acb0b1af606fd6f8/feedData", obj)
        .then((response) => {
            showNew(response.data);
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })

}

function showNew(user) {
    document.getElementById("name").value = "";
    const parentNode = document.getElementById("listOfUsers");
    var childHTML = `<li id=${user._id}> ${user.name}`; 
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