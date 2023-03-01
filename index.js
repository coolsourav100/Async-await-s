const posts = [
    {title: 'Post One' , body: 'This is Post one'},
    {title : 'Post Two' , body:'This. is Post Two'},
]

function getPost(){
   
        setTimeout(() => {
            posts.forEach((post,index)=>{
                console.log(post.title)
            })
        }, 1000);
   
}


const createPost = async(post)=>{
    return await new Promise((resolve,reject)=>{
        setTimeout(()=>{

            posts.push(post)
            const error = false
            if(!error){
                resolve()
            }else{
                reject('Error : SomeThing Went Wrong')
            }
        },1000)
    })
}

const deletePost=async()=>{
    return await new Promise((resolve,reject)=>{
        setTimeout(()=>{

            if(posts.length>0){
                let item = posts.pop()
                resolve(item)
            }else{
                reject('Error: Array is Empty')
            }       
        },1000)
    })
}

function updateLastActivityTime(){
    setTimeout(()=>{

        console.log(new Date().getTime())
    },1000)
}
createPost({title:'Post Three', body :'This is post Three'}).then(()=>{
    getPost()
    updateLastActivityTime()
    deletePost().then((item)=>{
        console.log('delete post ',item.title)
        updateLastActivityTime()
        console.log('All Post:',getPost())

    }).catch((err)=>console.log(err))
})
