 

//Question 9

let colors=["red", "blue", "green","purple","pink"];

let unshift=document.querySelector("#unshift")
let shift=document.querySelector("#shift")
let push=document.querySelector("#push")
let pop=document.querySelector("#pop")

unshift.addEventListener("click",()=>{
    let color=document.querySelector("#color").value;
    if(color===""){
        alert("please enter a color")
    }
    else{
    let newItems= color.split(",")

    newItems.forEach(((item)=>{
        colors.unshift(item)
        console.log(colors)
    }))
    let unShiftOutput = document.querySelector(".unShiftOutput");
    unShiftOutput.innerText = '';

    // Add each color to the output element
    colors.forEach((color) => {
        unShiftOutput.innerText += `"${color}" ,  `;
    });
}
})

shift.addEventListener("click",()=>{
    colors.shift()
    console.log(colors)

    let ShiftOutput = document.querySelector(".shiftOutput");
    ShiftOutput.innerText=colors.join('","')
})

push.addEventListener("click",()=>{
    let color=document.querySelector("#color").value;
    if(color===""){
        alert("please enter a color")
    }
    else{
    let newItems= color.split(",")

    newItems.forEach(((item)=>{
        colors.push(item)
        console.log(colors)
    }))
    let pushOutput = document.querySelector(".pushOutput");
    pushOutput.innerText = '';

    // Add each color to the output element
    colors.forEach((color) => {
        pushOutput.innerText += `,"${color}"`;
    });
}
  
})

pop.addEventListener("click",()=>{
    colors.pop()
    console.log(colors)
    let popOutput = document.querySelector(".popOutput");
    popOutput.innerText=colors.join('",')
})

