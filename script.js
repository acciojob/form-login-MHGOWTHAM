function getFormvalue() {
    //Write your code here
	var form=document.getElementById("form1");
	var e1=form.elements[fname].value;
	var e2=form.elements[lname].value;
	alert(e1+'\n'+e2);
}
