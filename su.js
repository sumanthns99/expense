
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