var app = new Vue ({
    el:"#app",
    data: {
        author:"User",
        body:"",
        new_author:"",
        new_body:"",
        // default values
        msgs:[
            {
                author:"User",
                body:"this is a msg"
            },
            {
                author:"User2",
                body:"this is also a msg"
            }
        ],
        // use when server is finished
        // url:"[Insert URL]",
    },
    created:function(){
        this.getMsgs();
    },
    methods:{
        getMsgs:function(){
            fetch(this.url+"/chat").then(function(response){
                response.json().then(function(data){
                    app.msgs=data;
                    console.log(data)
                })
            })
        },
        createMsg:function(){    
        // var for a new thread
        var new_msg={
            author:this.new_author,
            body:this.new_body,
        }

        //push the new msg to the chat
        /*fetch(this.url+"/chat",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(new_msg)
        }).then(function(){
            //clear the inputs
            app.getMsgs();
            app.new_body="";
            app.new_author="";
        })
        */
        //push the new thread to threads list
        this.threads.unshift(new_msg)

        //clear the inputs
        this.new_author="";
        this.new_body="";
        },
        deleteMsg: function(index){
            this.msgs.splice(index,1)
        }
    },
    computed:{

    }
});