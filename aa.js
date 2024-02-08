createPost(){
	return new promise(() =>{

	})
}

seensomeoneMessage(){
	return new promise(() =>{

	})
}

updateprofilephoto(){
	return new promise(() =>{

	})
}

const user = {
	username: 'Ramesh',
	lastactivitytime: '20th of Jan'
}

updatelastactivitytime = { 
	return new Promise((resolve, reject) = {
        setTimeout( () => {
            user.lastactivitytime = new Date().getTime();
            resolve(user.lastactivitytime);
        }, 1000)
    }) 
}

userupdatesapost(){
	Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])
	.then(([createPostresolves, updatelastactivitytimeresolves]) = {
		console.log(updatelastactivitytimeresolves)
	})
	.catch(err => concole.log)
}

function deletePost(){
     return new Promise((resolve, reject) => {
        setTimeout( () => {
            posts.pop();
            resolve();
        }, 1000)
    })
}