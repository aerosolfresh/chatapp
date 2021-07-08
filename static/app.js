var app = new Vue ({
    el:"#app",
    data: {
        author:"User",
        body:"",
        new_author:"",
        new_body:"",
        // test values
        msgs:[
            {
                author:"User",
                body:"this is a msg"
            }
        ]
    },
    methods:{
        createMsg:function(){    
        // var for a new thread
        var new_msg={
            author:this.new_author,
            body:this.new_body,
        }
        //push the new thread to threads list
        this.threads.unshift(new_msg)

        //clear the inputs
        this.new_author="";
        this.new_body="";
        }
    },
    computed:{

    }
});