function validate(){
    const admin_uname = "Kassem_m31";
    const admin_password = "313546";
    var password = document.getElementById("pass").value;
    var uname = document.getElementById("uname").value;
    var list = ["Michael_Abdullah", "Hassan_Sherif", "Seif", "Youssef_Shafei", "Tayseer", "Habiba", "Hana", "Aly_Shazly", "Serag", "Ahmed_Eid", "Kassem_m31", "Adham", "Ahmed_Emad", "Omar_Islam", "Nour_Saber", "Hassan_Ramy", "Youssef_Farag"];
    if(uname == list[0] || uname == list[1] || uname == list[2] || uname == list[3] || uname == list[4] || uname == list[5] || uname == list[6] || uname == list[7] || uname == list[8] || uname == list[9] || uname == list[10] || uname == list[11] || uname == list[12] || uname == list[13] || uname == list[14] || uname == list[15] || uname == list[16]){
        if(password == "123456"){
            document.write('<a style="text-decoration: none; background-color: cyan" href="main.html">Welcome ' + uname + ' Click Here to countinue</a>')
        }else if (password == ""){
            alert("You Can't leave it empty");
        }
    }else if(uname == ""){
        alert("You Can't leave it empty");
    }else{
        alert("Something went wrong please try again");
    }
}
function Events(){
    prompt("There is still no events yet but if you want to add one feel free and maybe it will be added");
}
function HW(){
    document.write("<body style=\"background-color: lightcyan; color:darkcyan\"><h1 text-decoration:\"underline, bold\">Thurday</h1><h1>Math: </h1><ul>page 122 num(7)</ul><ul>Page 123 num(24 & 25)</ul><ul> page 124 num(30 & 32)</ul><ul>page 127 num(12, 13, 14, 16 & 18</ul><h1>English: </h1><h3>Bricks</h3><ul>Page: from 28 to 32</ul><div><a href=\"main.html\">Back</a></div></body>");
}
function Holiday(){
    prompt("There is still no holidays yet but if you want to add one feel free and maybe it will be added");
}
function Trips(){
    prompt("There is still no trips yet but if you want to add one feel free and maybe it will be added");
}
