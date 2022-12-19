
/*object */
let button1 = document.querySelector(".button1")
// Team Colors
let pink_color = '#e91e63'; 
let white = '#ffffff';
let purple_color = '#9c27b0';
let black = '#212121'

const a1 = [
    {eng:"generous",thai:"ใจกว้าง"},
    {eng:"cheerful",thai:"ร่าเริง"},
    {eng:"easygoing",thai:"สบายๆ"},
    {eng:"helpful",thai:"มีประโยชน์"},
    {eng:"honest",thai:"ซื่อสัตย์"}
]
const a2 = [
    {eng:"lecture",thai:"บรรยาย"},
    {eng:"recently",thai:"เร็วๆนี้"},
    {eng:"explain",thai:"อธิบาย"},
    {eng:"knowledge",thai:"ความรู้"},
    {eng:"chapter",thai:"บท"},
]
const a3 = [
    {eng:"practice",thai:"การฝึกหัด"},
    {eng:"explanation",thai:"คำอธิบาย"},
    {eng:"difficulty",thai:"ความยากลำบาก"},
    {eng:"objective",thai:"วัตถุประสงค์"},
    {eng:"preparation",thai:"การเตรียมการ"},
]
const a4 = [
    {eng:"professor",thai:"ศาสตราจารย์"},
    {eng:"college",thai:"วิทยาลัย"},
    {eng:"department",thai:"แผนก"},
    {eng:"touch",thai:"แตะ"},
    {eng:"contains",thai:"ประกอบด้วย"},
]
const a5 =[
    {eng:"reserve",thai:"จอง"},
    {eng:"assume",thai:"สมมติ"},
    {eng:"introduce",thai:"แนะนำ"},
    {eng:"arrive",thai:"มาถึง"},
    {eng:"receive",thai:"รับ"},
]
const a6 =[
    {eng:"against",thai:"ต่อต้าน"},
    {eng:"wish",thai:"ปราถนา"},
    {eng:"hope",thai:"หวังว่า"},
    {eng:"trust",thai:"ไว้ใจ"},
    {eng:"waiting",thai:"กำลังรอ"},
]
const a7 = [
    {eng:"Period",thai:"ช่วง"},
    {eng:"look for",thai:"หา"},
    {eng:"important",thai:"สำคัญ"},
    {eng:"own",thai:"ของตัวเอง"},
    {eng:"tired",thai:"เหนื่อย"},
]
const a8 = [
    {eng:"count on",thai:"พึ่งพา"},
    {eng:"opposite",thai:"เหนื่อย"},
    {eng:"positive",thai:"บวก"},
    {eng:"consider",thai:"พิจารณา"},
    {eng:"include",thai:"รวม"},
]
const a9 = [
    {eng:"actor",thai:"นักแสดง"},
    {eng:"less",thai:"น้อยกว่า"},
    {eng:"ask for",thai:"ขอ"},
    {eng:"least",thai:"อย่างน้อย"},
    {eng:"fill",thai:"เติม"},
]
const a10 = []
const a11 = []
const a12 = []

let object = a1 //ตัวอ่านศัพท์ ***

let numlist = 0;


const random = document.querySelector('.random')

let mode_random = 'no_random'
random.addEventListener('click',()=>{
    if(mode_random === 'no_random'){
        mode_random = 'random'
        random.style.background = purple_color
        random.style.color = white
    }else{
        mode_random = 'no_random'
        random.style.background = 'none'
        random.style.color = purple_color
    } 
})

// No_random ==========================================================================
function no_randomEng(){
    let text = document.querySelector(".text").value
    let textName = document.querySelector(".textName")
    let Eng = object[numlist].eng   // ดึงข้อมูลจาก object

    if (text === Eng){
        document.querySelector(".textout").innerHTML = '<p style="color: #2baf2b;">ยินดีด้วยคุณตอบถูก</p>'
        setTimeout(() => {
            if(numlist < 4){
                numlist++
            }else{
                numlist = 0
            }
            textName.innerHTML = object[numlist].thai
            document.querySelector(".textout").innerHTML = '';
        },700)
    }
    else{
        document.querySelector(".textout").innerHTML = `<p style="color:red; fontSize: xx-large;">คำตอบคือ : ${Eng}</p>`
    }
}
function no_randomThai(){
    let text = document.querySelector(".text").value
    let textName = document.querySelector(".textName")
    let Thai = object[numlist].thai

    if (text === Thai){
        document.querySelector(".textout").innerHTML = '<p style="color:#2baf2b;">ยินดีด้วยคุณตอบถูก</p>'
        setTimeout(() => {
            if(numlist < 4){
                numlist++ //เมื่อเท่ากับ 4 เจอบรรทัดนี้จะเป็น 5 ทันที  //// ใน list มีถึงแค่ 4 เท่านั้น  ***/*/* error
            }else{
                numlist = 0
            }
            textName.innerHTML = object[numlist].eng
            document.querySelector(".textout").innerHTML = '';
        },700)
    }
    else{
        document.querySelector(".textout").innerHTML = `<p style="color:red; fontSize: xx-large;">คำตอบคือ : ${Thai}</p>`
    }
}
// No_random ==========================================================================


function checkEng(){
    let text = document.querySelector(".text").value
    let textName = document.querySelector(".textName")
    let Eng = object[numlist].eng   // ดึงข้อมูลจาก object

    if (text === Eng){
        document.querySelector(".textout").innerHTML = '<p style="color: #2baf2b;">ยินดีด้วยคุณตอบถูก</p>'
        setTimeout(() => {
            //สุ่ม
            numlist = Math.floor(Math.random() * object.length) + 1;
            numlist--
            textName.innerHTML = object[numlist].thai
            document.querySelector(".textout").innerHTML = '';
        },700)
    }
    else{
        document.querySelector(".textout").innerHTML = `<p style="color:red; fontSize: xx-large;">คำตอบคือ : ${Eng}</p>`
    }
}

function checkThai(){
    let text = document.querySelector(".text").value
    let textName = document.querySelector(".textName")
    let Thai = object[numlist].thai
    let Eng = object[numlist].eng   // ดึงข้อมูลจาก object

    if (text === Thai){
        document.querySelector(".textout").innerHTML = '<p style="color:#2baf2b;">ยินดีด้วยคุณตอบถูก</p>'
        setTimeout(() => {
            numlist = Math.floor(Math.random() * object.length) + 1;
            numlist--
            textName.innerHTML = object[numlist].eng
            document.querySelector(".textout").innerHTML = '';
        },700)
    }
    else{
        document.querySelector(".textout").innerHTML = `<p style="color:red; fontSize: xx-large;">คำตอบคือ : ${Thai}</p>`
    }
}



/* mode ===========================================*/
const modeEng = document.querySelector(".modeEng")
const modeThai = document.querySelector(".modeThai")
let modeclick = 'Eng'; //set เริ่มต้นที่ Eng

function Thai(){
    modeThai.style.background = pink_color
    modeThai.style.border = `1.5px solid ${pink_color}`
    modeThai.style.color = white
}
function NotThai(){
    modeThai.style.background = 'none'
    modeThai.style.border = `1.5px solid ${pink_color}`
    modeThai.style.color = pink_color
}

function NotEng(){
    modeEng.style.background = 'none'
    modeEng.style.border = `1.5px solid ${pink_color}`
    modeEng.style.color = pink_color
}
function Eng(){
    modeEng.style.background = pink_color
    modeEng.style.border = `1.5px solid ${pink_color}`
    modeEng.style.color = white
}
function mode(){
    console.log(modeclick)
    if(modeclick === 'Thai'){
        Thai()
        NotEng() 
    }
    else{
        Eng()
        NotThai()
    }
}


// mode click  Day and night
modeThai.addEventListener("click",()=>{
    modeclick = 'Thai'
    mode()
    let textName = document.querySelector(".textName")
    textName.innerHTML = object[numlist].eng
})
modeEng.addEventListener("click",()=>{
    modeclick = 'Eng'
    mode()
    let textName = document.querySelector(".textName")
    textName.innerHTML = object[numlist].thai
})
/* mode ===========================================*/


function check_output(){
    if(modeclick === 'Thai' && mode_random === 'random'){
        checkThai()
    }else if(modeclick === 'Thai' && mode_random === 'no_random'){
        no_randomThai()
    }
    else if(modeclick === 'Eng' && mode_random === 'random'){
        checkEng()
    }else if(modeclick === 'Eng' && mode_random === 'no_random'){
        no_randomEng()
    }
}

// touch ok input
button1.addEventListener("click",() => {
    let text = document.querySelector(".text")
    check_output()
    text.value = ''
})

// enter input
document.querySelector('.text').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let text = document.querySelector(".text")
        check_output()
        /*
        if(modeclick === 'Thai'){
            checkThai()
        }else{
            checkEng()
        }   
        */
        text.value = ''
    }
});



/* class 1 ปุ่ม a1-a9 */
const bgButton = document.querySelectorAll('.bgButton')
let modeClass;

function status_class(){
    if(modeClass === 1){object = a1}
    else if(modeClass === 2){object = a2}
    else if(modeClass === 3){object = a3}
    else if(modeClass === 4){object = a4}
    else if(modeClass === 5){object = a5}
    else if(modeClass === 6){object = a6}
    else if(modeClass === 7){object = a7}
    else if(modeClass === 8){object = a8}
    else if(modeClass === 9){object = a9}
    else if(modeClass === 10){object = a10}
    else if(modeClass === 11){object = a11}
    else if(modeClass === 12){object = a12}

    if(modeclick === 'Thai'){
        let textName = document.querySelector(".textName")
        textName.innerHTML = object[numlist].eng
    }else{
        let textName = document.querySelector(".textName")
        textName.innerHTML = object[numlist].thai
    }
}
/* class 1 ปุ่ม a1-a9 */




// ปุ่มเลือกระดับ ซ้ายสุด a1 - a9
bgButton.forEach((item,index) => {
    item.addEventListener("click",()=>{
        // แสดงว่ากดปุ่มช่องไหน
        modeClass = index + 1;

        bgButton.forEach((box,index2) =>{
            box.style.background = 'none';
            box.style.border = `1px solid ${pink_color}`;
            box.style.color = pink_color;

            if(index2 >= 9 /* 10 - 12*/){
                box.style.border = `1px solid ${purple_color}`;
                box.style.color = purple_color;
            }
            
        })
        item.style.background = pink_color;
        item.style.border = `1px solid ${pink_color}`;
        item.style.color = white;

        if(modeClass > 9){
            item.style.background = purple_color;
            item.style.border = `1px solid ${purple_color}`;
            item.style.color = white;
        }

        status_class()
    })
})



//input
const addInput = document.querySelector('.addInput')

addInput.addEventListener('click',()=>{
    const input1 = document.querySelector('#input1')
    const input2 = document.querySelector('#input2')

    let a = input1.value
    let a2 = input2.value

    b = a.split('\n')
    b2 = a2.split('\n')
    document.querySelector('.error').style.color = pink_color
    document.querySelector('.error').style.fontWeight = '400'
    document.querySelector('.error').style.fontSize = 'larger'
    if(object === a10){
        for(let i = 0; i < b.length; i++){
            a10.push({eng:b[i],thai:b2[i]})
        }
    }
    else if(object === a11){
        for(let i = 0; i < b.length; i++){
            a11.push({eng:b[i],thai:b2[i]})
        }
    }
    else if(object === a12){
        for(let i = 0; i < b.length; i++){
            a12.push({eng:b[i],thai:b2[i]})
        }
    }
    else{
        document.querySelector('.error').style.color = 'red'
        document.querySelector('.error').style.fontSize = 'xx-large'
        document.querySelector('.error').style.fontWeight = '800'
    }
    input1.value = ''
    input2.value = ''
})

// day - night mode
const day_night = document.querySelector('.day_night')
let setmodeDay = 'day';

day_night.addEventListener('click',()=>{
    const day_night_mode = document.querySelector('.day_night_mode')
    const day = document.querySelectorAll('.aaa')
    const body = document.querySelector('body')
    console.log(setmodeDay)

    if(setmodeDay === 'day'){
        setmodeDay = 'night'
        day_night_mode.style.right = '0'
        day_night_mode.style.background = '#ffffff'
        body.style.background = `${black}`
        day.forEach(item => item.classList.add('aaa_night'))
    }
    else if(setmodeDay === 'night'){
        setmodeDay = 'day'
        day_night_mode.style.right = '45px'
        day_night_mode.style.background = '#000000'
        body.style.background = `${white}`
        day.forEach(item => item.classList.remove('aaa_night'))
    }
})
