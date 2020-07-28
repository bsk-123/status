var i=1;
    var st;
    var k;
    document.querySelector(".page1").addEventListener("click",function(event){
        
        clearInterval(k)
        console.log("event")
        var x = screen.width/2
        if(event.clientX<x)
        {
            console.log("if " + event.clientX +  x + i)
            i--;
            if(i>=1){
                var p = document.querySelector(".pr"+i)
                console.log(p)
                pbDuration(i,i+1)
                document.querySelector(".stat img").setAttribute("src","i"+i+".jpg");
            }else{
                i=1
                pbDuration(1,2)
            }
            
        }else{
            console.log("else" + i)
            i++;
            if(i<=2){
                var p = document.querySelector(".pr"+i)
                console.log(p)
                pbDuration(i,i-1)
                document.querySelector(".stat img").setAttribute("src","i"+i+".jpg");
            }else{
                document.querySelector(".page1").style.left="-100%";
                document.querySelector(".page2").style.left="0";
                document.querySelector(".page2").style.display="block";
                pbDuration1(1,2)
                i=1
            }
        }
    })
    document.querySelector(".page2").addEventListener("click",function(event){
        clearInterval(k)
        console.log("event")
        var x = screen.width/2
        if(event.clientX<x)
        {
            console.log("if " + event.clientX +  x + i)
            i--;
            if(i>=1){
                var p = document.querySelector(".pr2"+i)
                console.log(p)
                pbDuration1(i,i+1)
                document.querySelector(".stat2 img").setAttribute("src","i1"+i+".jpg");
            }else{
                document.querySelector(".page2").style.left="100%";
                document.querySelector(".page1").style.left="0";
                document.querySelector(".page2").style.display="none";
                pbDuration(1,2)
                i=1
                document.querySelector(".stat img").setAttribute("src","i"+i+".jpg");
            }
            
        }else{
            console.log("else" + i)
            i++;
            if(i<=2){
                var p = document.querySelector(".pr"+i)
                console.log(p)
                pbDuration1(i,i-1)
                document.querySelector(".stat2 img").setAttribute("src","i1"+i+".jpg");
            }else{
                i=1
                pbDuration1(2,1)
            }
        }
    })
    function pbDuration(m,n){
        console.log("m " + m + "n " + n)
        document.querySelector(".pr"+m).value=0
        var j;
        j=m
        if(m<n){
            console.log("if")
            document.querySelector(".pr"+n).value=0
        }else{
            console.log("else")
            document.querySelector(".pr"+n).value=10
        }
        k = setInterval(function(){
            document.querySelector(".pr"+j).value=document.querySelector(".pr"+j).value+1
            if(document.querySelector(".pr"+j).value==10){
                if(j==2){
                    document.querySelector(".page1").style.left="-100%";
                document.querySelector(".page2").style.left="0";
                document.querySelector(".page2").style.display="block";
                clearInterval(k)
                pbDuration1(1,2)
                i=1
                document.querySelector(".stat2 img").setAttribute("src","i11.jpg");
                }
                else{
                j+=1
                i+=1
                document.querySelector(".stat img").setAttribute("src","i"+j+".jpg");
                }
            }
        },5)  
    }
    pbDuration(1,2)
    function pbDuration1(m,n){
        console.log("m " + m + "n " + n)
        document.querySelector(".pr2"+m).value=0
        var j;
        j=m
        if(m<n){
            console.log("if")
            document.querySelector(".pr2"+n).value=0
        }else{
            console.log("else")
            document.querySelector(".pr2"+n).value=10
        }
        k = setInterval(function(){
            document.querySelector(".pr2"+j).value=document.querySelector(".pr2"+j).value+1
            if(document.querySelector(".pr2"+j).value==10){
                if(j==2){
                clearInterval(k)
                }
                else{
                j+=1
                i+=1
                document.querySelector(".stat2 img").setAttribute("src","i1"+j+".jpg");
                }
            }
        },5)  
    }
