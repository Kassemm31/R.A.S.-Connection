
function validate(){
    const admin_uname = "Kassem_m31";
    const admin_password = "313546";
    var password = document.getElementById("pass").value;
    var uname = document.getElementById("uname").value;
    var list = ["Hassan_Sherif", "Seif", "Youssef_Shafei", "Tayseer", "Habiba", "Hana", "Aly_Shazly", "Serag", "Ahmed_Eid", "Kassem_m31"];
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
