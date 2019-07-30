//给数组扩展一个去除数组中的重复项的方法
Array.prototype.distance = function(){
    var a = this;
    for(var i = 0;i<a.length;i++){{
        for(var j = i+1;j<a.length;){
            if(a[j]==a[i]){
                a.splice(i,1)
            }else{
                j++;
            }
        }
    }}
}
//字符串扩展方法：去除字符串首尾的空格
String.prototype.trimFn = function(str){
    var reg = /^\s+|\s+$/g;
    return this.replace(reg,'')
}
//单例模式，存在一个对象的属性上
var DOM = {};
DOM.insertAfter = function(ele,appoint){//讲将元素追加到指定元素的后面
    if(appoint&&appoint.nodeType===1&&ele&&ele.nodeType===1){
       //如果被指定元素有弟弟节点，调用insetBefore方法将ele元素插入指定元素弟弟节点的前面，如果被指定元素没有弟弟节点，则直接用appendChild方法,insetBefore和appendChild方法都有父级元素调用
        appoint.nextSibling?appoint.parentNode.insertBefore(ele,appoint.nextSibling):appoint.parentNode.appendChild(ele)
    }else{
        throw new error('参数错误');
        
    }

}
DOM.prevSiblings = function(ele){//获取所有哥哥元素节点
    var a = [];
    var prev = ele.previousSibling;
    while(prev){
        if(prev.nodeType===1){
            a.unshift(prev);
        }
        
        prev = prev.previousSibling;
    }
    return a;
}
DOM.nextSiblings = function (ele){//获取所有弟弟元素节点
    var a = [];
    var next = ele.nextSibling;
    while(next){
        if(next.nodeType===1){
            a.push(next)
        }
        next = next.nextSibling;
    }
    return a;
}
DOM.siblings = function(ele){//获取元素所有兄弟元素节点
    return DOM.prevSiblings(ele).concat(DOM.nextSiblings(ele))
}
DOM.prevEle = function (ele) {//获取相邻的上一个元素节点
    if(typeof ele.previousElementSibling == 'object'){//typeof判断一个节点是不是元素节点，是返回object，不是返回null
        return ele.previousElementSibling;
    }
    var prev = ele.previousSibling;
    while(prev){
        if(prev.nodeType===1){
            return prev;
        }
        p = p.previousSibling;
    }
    return null;
}
//previousSibling包含元素节点，文本节点，注释节点，previousElementSibling只包含元素节点
DOM.nextEle = function(ele){//获取元素下一个元素节点
    if(typeof ele.nextElementSibling == 'object'){
        return ele.nextElementSibling
    }
    var next = ele.nextSibling;
    while(next){
        if(next.nodeType===1){
            return next
        }
        next = next.nextSibling;
    }
    return null;
}
DOM.siblingsEle = function(ele){//获取相邻的两个元素节点
    var prev = DOM.prevEle(ele);
    var next = DOM.nextEle(ele);
    var arr = [];
    if(prev)a.push(prev);
    if(next) a.push(next);
    return arr;
}
DOM.firstEle = function (ele){//判断是否是第一个子元素节点
    return DOM.prevEle(ele)?false:true;
}
DOM.lastEle = function(ele){//判断是否是最后一个子元素节点
    return DOM.nextEle(ele)?false:true;
}
DOM.firstEleList = function (ele){//获取元素节点ele集合里每个元素的第一个子节点
    var a = [];
    for(var i =0;i<ele.length;i++){
        if(DOM.firstEle(ele[i])){
            a.push(ele[i]) 
        }
    }
    return a;
}
DOM.nextEleList = function (ele){//获取元素节点ele集合里每个元素的最后一个子节点
    var a = [];
    for(var i = 0;i<ele.length;i++){
        if(DOM.nextEle(ele[i])){
            a.push(ele[i])
        }
    }
    return a
}
DOM.getChildren = function (ele,tag){//tag如果传了，获取ele元素下的所有标签是tag的子元素，tag如果没传，获取ele下的所有子元素
    var childrens = ele.childNodes;
    if(typeof tag == 'string'){
        tag = tag.toUpperCase();
        var a = [];
        for(var i = 0; i<childrens.length;i++){
            if(childrens[i].nodeType === 1 && childrens[i].nodeName == tag){
                a.push(childrens[i])
            }
        }
        return a;
    }else if(typeof tag == 'undefined'){
        var a = [];
        for(var i = 0; i<childrens.length; i++){
            if(childrens[i].nodeType === 1){
                a.push(childrens[i])
            }
        }
        return a;
    }else{
        throw new error('参数出错');
    }

}
DOM.getIndex = function (ele){//获取元素的索引值
    var Index = 0;
    var prev = ele.previousSibling;
    while(prev){
        if(prev.nodeType === 1){
            Index++;
        }
        prev = prev.prevSiblings;
    }
    return Index;
}
DOM.addClass = function(ele,classStr){
    var reg = new RegExp('\\b+'+classStr+'\\b+');
    if(reg.test(classStr)){

    }else{
        ele.className = ele.className.trim() + ' ' + classStr
    }
}
DOM.hasClass = function (ele,classStr){
    if(!(ele&&ele.nodeType===1)){
        throw new error('第一参数ele需要是一个DOM元素对象')
    }
    if(!(classStr&&typeof classStr == 'string')){
        throw new error('第二参数必须为string类型')
    }
    var reg = new RegExp('\\b'+'\\b');
    if(reg.test(ele.classStr)){
        return true;
    }else{
        return false
    }
}
DOM.removeClass = function (ele,classStr) {
    if(!(ele&&ele.nodeType===1)){
        throw new error('第一参数ele需要是一个DOM元素对象')
    }
    if(!(classStr&&typeof classStr == 'string')){
        throw new error('第二参数必须为string类型')
    }
    var reg = new RegExp('\\b'+'\\b');
    if(reg.test(ele.classStr)){
        ele.className.replace(reg,'').trim()
    }else{

    }
}
DOM.getByClass = function (classAtr,ctx){
    if(typeof classAtr!= 'string'){
        throw new error('第一个个参数错误！')
    }
    var ctx = ctx||document;
    if(ctx.nodeType!=1&&ctx.nodeType!=9){
        throw new error('第二个参数错误！')
    }
    if(ctx.getElementsByclassName){
        return ctx.getElementsByclassName(classAtr)
    }else{
        var classAtr = classAtr.split(' ');
        var eles = document.getElementsByTagName('*');
        for(var i = 0;i<eles.length;i++){
            if(classAtr[i].replace(/\s+/g,'').length>0){
                eles = getClass(eles[i],classAtr)
            }
            
        }
        return eles;
    }
    
    function getClass(ele,classAtr){
        var reg =new RegExp('\\b'+classAtr+'\\b');
        var arr = [];
        for(var i = 0;i<ele.length;i++){
            if(reg.test(ele[i].className)){
                arr.push(ele[i])
            }
        }
        return arr;
    }
}
DOM.offset = function(ele){//获取元素距离浏览器顶部的距离
    var l = ele.offsetLeft;
    var t = ele.offsetTop;
    var p = ele.offsetParent;
    while(p){
        l+=p.offsetLeft;
        t+=p.offsetTop;
        p = p.offsetParent;
    }
    var obj = {};
    obj.x = l;
    obj.y = t;
    return obj;
}
DOM.domToArray = function(ele){//将dom元素转化为数组
   try{
       var a = [].slice.call(ele,0)
   }catch(e){
        var a = []
        for(var i = 0;i<ele.length;i++){
            a.push(ele[i])
        }
        
   }
   return a;
}
DOM.getPara = function(urls){//获取url里面的参数信息，返回一个对象
    var reg = /([^=?&]+)=([^=?&]+)/g;
    var temp = null;
    var obj = {};
    while(temp = reg.exec(urls)){
        console.log(temp);
        obj[temp[1]] = temp[2]
    }
    return obj;
}