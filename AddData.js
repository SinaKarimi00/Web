let fNameElement
let lNameElement
let markElement
let Students = function(fName, lName, mark){
    this.fName = fName
    this.lName = lName
    this.mark = mark
}
let StudentsListOfMark = []
let Add = function(){
     fNameElement = document.getElementById('firstName')
     lNameElement = document.getElementById('lastName')
     markElement = document.getElementById('mark')
     if(!isValid())
        return
     let Student = new Students(
        fNameElement.value,
        lNameElement.value,
        markElement.value
    )
    StudentsListOfMark.push([lNameElement.value,markElement.value])
    text = ''
    text += `<div class="row">
                <div class="col">
                    ${Student.fName}
                </div>
                <div class="col">
                    ${Student.lName}
                </div>
                <div class="col">
                    ${Student.mark}
                </div>
            </div>`
    document.getElementById('show-data').innerHTML += text
    fNameElement.value = ''
    lNameElement.value = ''
    markElement.value = ''
    fNameElement.focus()
}
let BestStudent = function(){
    let max = 0
    let best = []
    for(var x = 0; x<StudentsListOfMark.length; x++){
        if (StudentsListOfMark[x][1] > max ){
            max = StudentsListOfMark[x][1]
        }
        else
            continue
    }
    for(var x = 0; x<StudentsListOfMark.length; x++){
        if(StudentsListOfMark[x][1] == max)
            best.push(StudentsListOfMark[x][0],StudentsListOfMark[x][1])
    }
    alert(best.join('-'))
}
let WorseStudent = function(){
    let min = 100
    let worse = []
    for(var x = 0; x<StudentsListOfMark.length; x++){
        if (StudentsListOfMark[x][1] < min ){
            min = StudentsListOfMark[x][1]
        }
        else
            continue
    }
    for(var x = 0; x<StudentsListOfMark.length; x++){
        if(StudentsListOfMark[x][1] == min)
            worse.push(StudentsListOfMark[x][0],StudentsListOfMark[x][1])
    }
    alert(worse.join('-'))    
}
let isValid = function(){
    let invalidElements = document.getElementsByClassName('invalid')
    for(let x of invalidElements)
        x.innerHTML = ''
    let result = true
    if(fNameElement.value === ''){
        document.querySelector('#firstName + .invalid').innerHTML = 'ّFirst Name is required'
        result = false
    }
    if(lNameElement.value === ''){
        document.querySelector('#lastName + .invalid').innerHTML = 'Last Name is required'
        result = false
    }
    if(markElement.value === ''){
        document.querySelector('#mark + .invalid').innerHTML = 'Mark is required'
        result = false
    }
    return result
}
document.getElementById('mark').onkeypress = function(evt){
    console.log(evt)
    evt.returnValue = evt.keyCode >= 48 && evt.keyCode <= 57
    if(evt.returnValue = true)
        document.querySelector('#mark + .invalid').innerHTML = ''
}
document.getElementById('firstName').onkeypress = function(evt){
    if(evt.returnValue = true)
        document.querySelector('#firstName + .invalid').innerHTML = ''
}
document.getElementById('lastName').onkeypress = function(evt){
    if(evt.returnValue = true)
        document.querySelector('#lastName + .invalid').innerHTML = ''
}
