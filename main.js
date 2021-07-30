let html =document.querySelector("#html");
let n=0;
let style =document.querySelector("#style")
let str=`
/*你好，我是李原孟
*一名前端新人
*接下来我要加样式了
*我要加的样式是
**/
body{
      color:red;
}
/*然后我要加一个div*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*然后红色有点不好看，给删去*/
body{
    color:black;
}
/*接下来要将div1变成一个八卦图*/
/*第一步：将div变成圆*/
#div1{
    border-radius: 50%;
    
}
/*第二步：形成黑白分界*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 46%, rgba(0,0,0,1) 46%, rgba(0,0,0,1) 100%);
}
/*第三步：加一个黑色小球*/

#div1::before{
width:100px;
height:100px;
top:0;
left:50%;
transform: translateX(-50%);
background: #000;
border-radius: 50%;
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

/*第四步：加一个白色小球*/

#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform: translateX(-56%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
    }
    /*第五步：去掉边框*/
    #div1{
        border:none;
    }
    /*第六不：加上阴影*/
    #div1{
        box-shadow: -10px 11px 5px 0px #C8CBD1;
    }
`;

let str2="";

let step = () =>{
    setTimeout(()=>{
        if(n>=str.length){
            return;
        }
        //仔细思考下面代码是干什么的
        if(str[n]==="\n"){
            str2 += "<br>";
        }else if (str[n]==" "){
             str2+="&nbsp";
        }else{
            str2+=str[n];
        }
        //这里可以改写成？ ： 表达式
 // (str[n]==="\n" ？str2 += "<br>"： str2+=str[n]
        html.innerHTML =str2;
        style.innerHTML=str.substring(0,n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        div1Wrapper.scrollTo(0, 0);
        //思考为什么substing又不行了
    // demo.innerHTML =str2.substring(0,n+1)
    //z注意substring（0，n）
  //str.lenth最大为55，n角标最大为54
    // if(n<str.length-1){
    //     n+=1 
    //     step()
    //     }
    n+=1;
    step();
     
  },30);

}

step();

