let button1 = document.querySelector(".button1")
const object = [
    {eng:"generous",thai:"ใจกว้าง"},
    //{eng:"brave",thai:"กล้าหาญ"},
    {eng:"cheerful",thai:"ร่าเริง"},
    {eng:"easygoing",thai:"สบายๆ"},
    {eng:"helpful",thai:"มีประโยชน์"},
    {eng:"honest",thai:"ซื่อสัตย์"}
]

let numlist = 0;

function checkEng(){
    let text = document.querySelector(".text").value
    let textName = document.querySelector(".textName")
    //let text_output = document.querySelector(".textout").innerHTML
    //let Thai = object[numlist].thai
    let Eng = object[numlist].eng   // ดึงข้อมูลจาก object

    if (text === Eng){
        document.querySelector(".textout").innerHTML = '<p style="color:blue;">ยินดีด้วยคุณตอบถูก</p>'
        setTimeout(() => {
            numlist = Math.floor(Math.random() * object.length) + 1;
            numlist--
            textName.innerHTML = object[numlist].thai
            document.querySelector(".textout").innerHTML = '';
        },1000)
    }
    else{
        document.querySelector(".textout").innerHTML = `<p style="color:red;">คุณตอบผิด \nคำตอบตือ : ${Eng}</p>`
        /*
        setTimeout(() =>{
            numlist = Math.floor(Math.random() * object.length) + 1;
            numlist--
            textName.innerHTML = object[numlist].thai
            document.querySelector(".textout").innerHTML = ''
        },2500)
         */
    }
}

function checkThai(){
    let text = document.querySelector(".text").value
    let textName = document.querySelector(".textName")
    let Thai = object[numlist].thai
    let Eng = object[numlist].eng   // ดึงข้อมูลจาก object
    textName.innerHTML = 'generous'

    if (text === Thai){
        document.querySelector(".textout").innerHTML = '<p style="color:blue;">ยินดีด้วยคุณตอบถูก</p>'
        setTimeout(() => {
            numlist = Math.floor(Math.random() * object.length) + 1;
            numlist--
            textName.innerHTML = object[numlist].eng
            document.querySelector(".textout").innerHTML = '';
        },1000)
    }
    else{
        document.querySelector(".textout").innerHTML = `<p style="color:red;">คุณตอบผิด \nคำตอบคือ : ${Eng}</p>`
    }
}

button1.addEventListener("click",() => {
    let text = document.querySelector(".text")
    checkEng()
    text.value = ''
})


