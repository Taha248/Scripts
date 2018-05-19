
    $(document).ready(function(){
        var button = document.createElement("button");
button.innerHTML = "Stats";
//button.setAttribute("style","position:relative");
// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
        var p = document.getElementById("degreeSelection");
p.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
   var rowLenght =   $(".transcript-content").length; 
        var y =  $("tbody .transcript-content").length;
     
    
        var val=4,totalWeightedGPA=0,totalCourses=0,totalCreditHours=0,FailedCount=0,A=0,Bplus=0,B=0,Cplus=0,C=0;
        for(var i=1;i<=rowLenght;i++){
        var GPA =  $("tbody .transcript-content").children().eq(val).html();
        var CrHr =  $("tbody .transcript-content").children().eq(val-2).html(); 
        var Grade =  $("tbody .transcript-content").children().eq(val-1).html(); 
            
          //	var FailedCount=0,A=0,Bplus=0,B=0,Cplus=0,C=0;
    switch(Grade) {
        case "A":
            A++;
        break;
        case "B+":
        Bplus++;
        break;
        case "B":
       B++;
        break;
        case "C+":
       Cplus++;
        break;
        case "C":
       C++;
        break;
        case "F":
        FailedCount++;
        break;
        case "W":
        break;
      
      default:
       alert("abc");
    }
            
            if(GPA==0)
              {
                  val+=5;  continue;
              }
            
            totalCourses++;
       totalWeightedGPA+=(GPA*CrHr);
            totalCreditHours+=parseInt(CrHr);
            
         val+=5;
            }
        //alert("Total GPA: "+totalWeightedGPA+ "Total Credit Hour" +totalCreditHours);
        var CGPA = totalWeightedGPA/totalCreditHours;
        alert("CGPA : "+Math.round(CGPA*100)/100 +" \nNumber of A= "+A+ "\nNumber of B+= "+Bplus+"\nNumber of B= "+B+"\nNumber of C+ ="+Cplus+"\nNumber of C= "+C+"\nFailed Courses ="+FailedCount+"\nTotal Credit Hour = "+totalCreditHours+ "\nTotal Courses= "+totalCourses );
            
  //      }
});
//        for(var i = 0 ; i<=999;i++){
         
    });