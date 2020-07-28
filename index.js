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
                document.querySelector(".stat img").setAttribute("src","i"+i+".JPG");
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
                document.querySelector(".stat img").setAttribute("src","i"+i+".JPG");
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
                document.querySelector(".stat2 img").setAttribute("src","i1"+i+".JPG");
            }else{
                document.querySelector(".page2").style.left="100%";
                document.querySelector(".page1").style.left="0";
                document.querySelector(".page2").style.display="none";
                pbDuration(1,2)
                i=1
                document.querySelector(".stat img").setAttribute("src","i"+i+".JPG");
            }
            
        }else{
            console.log("else" + i)
            i++;
            if(i<=2){
                var p = document.querySelector(".pr"+i)
                console.log(p)
                pbDuration1(i,i-1)
                document.querySelector(".stat2 img").setAttribute("src","i1"+i+".JPG");
            }else{
                i=1
                pbDuration1(2,1)
            }
        }
    })
    function pbDuration(m,n){
        console.log("m " + m + "n " + n)
        document.querySelector('.pr'+m).style.setProperty("--width",0)
        var j;
        j=m
        if(m<n){
            console.log("if")
            document.querySelector('.pr'+n).style.setProperty("--width",0)
        }else{
            console.log("else")
            document.querySelector('.pr'+n).style.setProperty("--width",100)
        }
        k = setInterval(function(){
            var pb = getComputedStyle(document.querySelector('.pr'+j), '::before')
            var width = parseFloat(pb.getPropertyValue("--width")) || 0
            if(document.querySelector(".pr"+j).style.getPropertyValue("--width")==100){
                console.log("entered")
                if(j==2){
                    document.querySelector(".page1").style.left="-100%";
                document.querySelector(".page2").style.left="0";
                document.querySelector(".page2").style.display="block";
                clearInterval(k)
                pbDuration1(1,2)
                i=1
                document.querySelector(".stat2 img").setAttribute("src","i11.JPG");
                }
                else{
                j+=1
                i+=1
                document.querySelector(".stat img").setAttribute("src","i"+j+".JPG");
                }
            }else
            document.querySelector(".pr"+j).style.setProperty("--width",width + 10)
        },250)  
    }
    pbDuration(1,2)
    function pbDuration1(m,n){
        console.log("m " + m + "n " + n)
        document.querySelector('.pr2'+m).style.setProperty("--width",0)
        var j;
        j=m
        if(m<n){
            console.log("if")
            document.querySelector('.pr2'+n).style.setProperty("--width",0)
        }else{
            console.log("else")
            document.querySelector('.pr2'+n).style.setProperty("--width",100)
        }
        k = setInterval(function(){
            var pb = getComputedStyle(document.querySelector('.pr2'+j), '::before')
            var width = parseFloat(pb.getPropertyValue("--width")) || 0
            
            if(document.querySelector(".pr2"+j).style.getPropertyValue("--width")==100){
                console.log("entered")
                if(j==2){
                clearInterval(k)
                }
                else{
                j+=1
                i+=1
                document.querySelector(".stat2 img").setAttribute("src","i1"+j+".JPG");
                }
            }else{
                document.querySelector(".pr2"+j).style.setProperty("--width",width + 10)
            }
        },300)  
    }
