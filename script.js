const drumparent=document.getElementById("parent");
drumparent.addEventListener("click",(e)=>{
    const target=e.target.innerHTML;
    creatsound(target);

});
const creatsound= (key)=>{
        let sound=new Audio (`${key}.mp3`)
        sound.play();
}
drumparent.addEventListener("keydown",(e)=>{
    const target=e.key;
    let array =["w","a","d","j","k","l","s"];
    if (!array.includes(target)){
        alert("Wrong key pressed");
        return;
    }
    creatsound(target);

})




  