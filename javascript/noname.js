

function validate(){
    const admin_uname = "Kassem_m31";
    const admin_password = "313546";
    var password = document.getElementById("pass").value;
    var uname = document.getElementById("uname").value;
    var list = ["Hassan_Sherif", "Seif", "Youssef_Shafei", "Tayseer", "Habiba", "Hana", "Aly_Shazly", "Serag", "Ahmed_Eid", "Kassem_m31", "Adham", "Ahmed_Emad", "Omar_Islam", "Nour_Saber", "Hassan_Ramy", "Youssef_Farag"];
    if(uname == list[0] || uname == list[1] || uname == list[2] || uname == list[3] || uname == list[4] || uname == list[5] || uname == list[6] || uname == list[7] || uname == list[8] || uname == list[9]){
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
    document.write("<body style=\"background-color: lightcyan\"><h1 style=\"color:darkcyan\">The Elections for the student council</h1><div><a href=\"main.html\">Back</a></div></body>");
}
function HW(){
    document.write("<body style=\"background-color: lightcyan; color:darkcyan\"><h1 text-decoration:\"underline, bold\">Thurday</h1><img src=\"Image.jpg\" style=\"size:100%\"><div><a href=\"main.html\">Back</a></div></body>");
}
function Holiday(){
    alert("There is still no holidays soon");
}
function Trips(){
    alert("There is still no holidays soon");
}
