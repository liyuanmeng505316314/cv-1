Window.dom={};

dom.create=function(string){
    const container = document.createElement("template")
    container.innerHTML=string.trim()
    return container.content.firstChild()
}

dom.after=function(node,nodeafter){
    node.parentnode.insertBefor(nodeafter,node.nextSibling)
    return node.nextSibling
}

dom.befor=function(node,nodebefor){
    node.parentnode.insertBefor(nodebefor,node)
    return node2.nextSibling
}
//------------上面写了十一行代码------------
dom.append=function(node,child){
    node.appendChild(child)
    return dom.children(node)
}

dom.wrap=function(node,parent){
    dom.befor(node,parent)
    dom.append(parent,node)
    return dom.children(parent)
}

dom.remove=function(node){
    node.parentnode.removeChild(node)
    return node
}

dom.empty=function(node){
    const arr=[]
    let x=node.firstChild
    while(x===ture){
        arr.push(dom.remove(node.firstChild))
        x=node.firstChild
    }
    return arr
}
//---------代码整齐，规范，健壮，易读,上面写了二十八行代码
dom.attr=function(node,name,value){ //dom.attr是读写属性
    if(arguments===2){
     return node.getAttribute(name)
    }
    if(arguments===3){
     node.setAttribute(name,value)
     return node.getAttribute(name)
    }
}

dom.text=function(node,string){ //用于读写文本
  if(arguments===2){
        node.textContent=string
  }else{
        return node.textContent
  }
}

dom.html=function(node,string){
    if(arguments===1){
        return node.innerHTML
    }else{
        node.innerHTML=string
    }
}

dom.style=function(node,name,value){
    if(arguments===3){
      node.style[name]=value
      return  node.style[name]
    } else if(arguments===2){
        if(typeof name === 'string'){
             return node.style[name]
        }
        else if(name instanceof Object){
          const obj =name
          for(let key in obj){
              node.style[key]=obj[key]
          }    
        } 
    }
}

dom.class.add=function(node,className){
     node.classList.add(className)
     return node.classList
}

dom.class.remove=function(node,className){
     node.classList.remove(className)
     return node.classList
}

dom.on=function(node,eventName,fn){
     node.addEventListener(eventName,fn)
}

dom.off=function(node,eventName,fn){
    node.removeEventListener(eventName,fn)
}

dom.find=function(slector,scope){
  return   (scope||document).qurrySlectorAll(slector)
}
dom.parent=function(node){
    return node.parentnode
}
dom.children=function(node){
    return node.children
}
dom.Sibling=function(node){
    // return node.parentnode.children 这个是返回父节点的所以子节点
    // Array.from()是将一个伪数组转化为数组
    //点fliter是删除数组的元素
    return Array.from(node.parentnode.children).filter(n=>n!==node)
}
dom.next=function(node){
    let x=node.nextSibling
    while(x&&x.nodeType===3){
        x=x.nextSibling
    }
    return x 
}
dom.next=function(node){
    let x=node.previousSibling
    while(x&&x.nodeType===3){
        x=x.previousSibling
    }
    return x 
}
dom.each=function(nodeList,fn){
    for(let i=0;i<nodeList.length;i++){
        fn.call(null,nodeList)
    }
}
dom.index=function(node){
    const list= dom.children(node.parentNode)
    let i=0
    for(i=0;i<list.length;i++){
        if(list[i]===node){
            break
        }
    }
    return i
}