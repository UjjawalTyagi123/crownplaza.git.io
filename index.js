const user={
    name:'ujjawal tyagi',
    password:'12345',
    login:function(name,password){
        if(name===this.name&&password===this.password)
        {
        console.log("login succ.")
        }
        else{
            console.log("failed")
        }
    },
};

user.login('ujjawal tyagi','12345')


