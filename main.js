const displayContent = (content)=>{
    calcScreen.value += content
}
const clearAllContent=()=>{
    calcScreen.value = ""
    calcScreen.placeholder="0"
}
const showResult =()=>{
    try{
    calcScreen.value=eval(calcScreen.value)
    }
    catch{
        calcScreen.value = ""
        calcScreen.placeholder="Invalid Expression"
    }
}
const removeLast=()=>{
    calcScreen.value=calcScreen.value.slice(0,-1)
}