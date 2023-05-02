const buttons=document.querySelectorAll("button");
const display=document.querySelector("#disp input");
var p = display.value;
Array.from(buttons).forEach(bun=>{
    bun.addEventListener("click",e=>{
        if (display.value === "" && (e.target.value === "/" || e.target.value === "*" || e.target.value === "%" || e.target.value === "-")) {
            // do nothing
        }
        else if( e.target.value=='delete'){
          display.value=display.value.slice(0,-1);
        }
        else if(e.target.value=="clear"){
            display.value="";
            p=""
        }
        else if(e.target.value=="="){
            const res=eval(display.value);
            display.value=res;
            p=res
        }
        else if(e.target.value=="/" || e.target.value=="+" ||e.target.value=="*" ||e.target.value=="%" ||e.target.value=="-" )
        {
            if(p[p.length-1]=='+' || p[p.length-1]=='-' || p[p.length-1]=='%' || p[p.length-1]=='*' || p[p.length-1]=='/' )
            {
                display.value=display.value.slice(0,-1);
                p=p.slice(0,-1)
                display.value+=e.target.value
                p+=e.target.value
            }
            else{
                display.value+=e.target.value
                p+=e.target.value
            }
        }
        else if (e.target.value == ".") {
            const lastOperatorIndex = Math.max(
              p.lastIndexOf("+"),
              p.lastIndexOf("-"),
              p.lastIndexOf("*"),
              p.lastIndexOf("/"),
              p.lastIndexOf("%")
            );
            if (p.slice(lastOperatorIndex).includes(".")) {
              // Do nothing if a decimal point is already present after an operator
            } else {
              display.value += ".";
              p += ".";
            }
        }
        else{
            display.value+=e.target.value;
            p+=e.target.value
        }
    });
});