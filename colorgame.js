var clsname = ["Red","Blue","Green","Yellow","Orange","Indigo","Purple","Violet","Pink","White","Black"]; // text
var cls = ["red","blue","green","yellow","orange","indigo","purple","violet","pink","white","black"]; // colors (answers)
var clrname = "", anss = "";
window.onload = () => {
   colnames = clsname[Math.floor(Math.random()*(clsname.length))]; // color text
   cols = cls[Math.floor(Math.random()*(cls.length))]; // colors
   cnm = document.querySelector("#name"); 
   cnm.innerHTML = colnames;
   cnm.style.color = cols;
   clrname = colnames;
   anss = cols;
}
function chk() {
    var ans = document.querySelector(".ans").value; // answer
    var c1 = ans.toLowerCase();
    cnm = document.querySelector("#name");
    if(c1!="") {
       if(c1 == anss) {
          // correct
          cnm.innerHTML = "Correct!";
          cnm.style.color = "green";
          cnm.style.fontStyle = "normal";
         // console.log('correct'+'\nclrname = '+(clrname)+'\nanss = '+(anss));
          setTimeout(() => {
            clrname = clsname[Math.floor(Math.random()*(clsname.length))];
            anss = cls[Math.floor(Math.random()*(cls.length))];
            cnm.innerHTML = clrname;
            cnm.style.fontFamily="none";
            cnm.style.color = anss;
            //console.log('changed'+'\nclrname = '+(clrname)+'\nanss = '+(anss));
          },2000);
       }
       else {
          // wrong
          cnm.innerHTML = "Wrong!";
          cnm.style.color = "red";
          cnm.style.fontStyle = "normal";
         // console.log('wrong'+'\nclrname = '+(clrname)+'\nanss = '+(anss));
          setTimeout(() => {
            clrname = clrname;
            anss = anss;
            cnm.innerHTML = clrname;
            cnm.style.color = anss;
            //console.log('changed'+'\nclrname = '+(clrname)+'\nanss = '+(anss));
          },2000);
       }
   }
}