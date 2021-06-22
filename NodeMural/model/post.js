module.exports = {
    posts: [
        {
            id: "uehue",
            title: "Texte do Mural",
            description: "Descricao Teste"
        },
    ],

    getAll(){
        return this.posts;
    },

    newPost(title,description){

        this.posts.push({id: generateID(), title, description});
    },

    //     deletePost(id){
    //     this.posts.splice({id});
    // }




}

function generateID(){
    return Math.random().toString(36).substr(2, 9);
}
