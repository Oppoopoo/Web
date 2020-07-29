function login(){
    var id = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    if(id == ""){
        alert("Please Input ID First.");
    }
    else if(pw == ""){
        alert("Please Input Password First.");
    }
    //alert(id);
    //console.log("Hello~~~");
}

function submitForm(formEl) {
//아이디 / 패스워드  체크는 required해줌으로써 끝냄.
    //var errorMessage = null;
    //var objFocus = null;

    // if (formEl.loginId.value.length == 0) {
    //     errorMessage = "아이디를 넣어주세요.";
    //     objFocus = formEl.loginId;
    // }
    // else if (formEl.loginPassword.value.length == 0) {
    //     errorMessage = "비밀번호를 넣어주세요.";
    //     objFocus = formEl.loginPassword;
    // }
    // if(errorMessage != null) {
    //     alert(errorMessage);
    //     objFocus.focus();
    //     return false;
    // }
    //return true;
    //location.href = "./main.html";
    return true;
    
}