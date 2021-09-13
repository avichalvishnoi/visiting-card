function generateCard() 
{
    // set Data part
    var formData = document.getElementById("getData");
    var formvalues = [];
    var i;
    for ( i = 0; i < formData.length-2 ;i++) 
    {
        formvalues.push(formData.elements[i].value);       
    }

    //set Canvas part 
    var canvasData = document.getElementById("card-body");
    var img = document.getElementById("output");

    var ctx = canvasData.getContext("2d");
    let canvasWidth = canvasData.width;
    let canvasHeight = canvasData.height;
    let verticalIndex = canvasHeight/10;
    let horizontalIndex = canvasWidth*(3/4);
    let region = [1, 2, 3, 4, 5, 6, 7];
    

            // designing starts here

            region[0] = new Path2D();
            region[0].moveTo(10, 0);
            region[0].lineTo(15, 5);
            region[0].lineTo(horizontalIndex/2, 5);
            region[0].lineTo(horizontalIndex/2-5, 0)
            region[0].closePath();
            ctx.fillStyle = 'blue';
            ctx.fill(region[0], 'evenodd');
            
            
            region[1] = new Path2D();
            region[1].moveTo(horizontalIndex/2, 0)
            region[1].lineTo(horizontalIndex/2+5, 5);
            region[1].lineTo(horizontalIndex-20, 5);
            region[1].lineTo(horizontalIndex-25, 0);
            region[1].closePath();
            
            

                         // top lines


            region[2] = new Path2D();
            region[2].moveTo(horizontalIndex-20, 0);
            region[2].lineTo(canvasWidth-20, canvasHeight);
            region[2].lineTo(canvasWidth-5, canvasHeight);
            region[2].lineTo(horizontalIndex-5, 0);
           

            region[3] = new Path2D();
            region[3].moveTo(horizontalIndex, 0);
            region[3].lineTo(canvasWidth, canvasHeight);
            region[3].lineTo(canvasWidth,0);
                     // right lines

            region[4] = new Path2D();
            region[4].moveTo(0, canvasHeight/1.5);
            region[4].lineTo(canvasWidth/12, canvasHeight);
            region[4].lineTo(0, canvasHeight);
                     // left line

            // bottom variables are used 

            let bottomx1 = canvasWidth/12;
            let bottomx2 = canvasWidth-20;
            let bottomcenter = (bottomx1+bottomx2)/2;

            region[5] = new Path2D();
            region[5].moveTo(bottomx1+5, canvasHeight-5);
            region[5].lineTo(bottomx1+10, canvasHeight);
            region[5].lineTo(bottomcenter, canvasHeight);
            region[5].lineTo(bottomcenter-5, canvasHeight-5);
            

            region[6] = new Path2D();
            region[6].moveTo(bottomcenter, canvasHeight-5);
            region[6].lineTo(bottomcenter+5, canvasHeight);
            region[6].lineTo(bottomx2-10, canvasHeight);
            region[6].lineTo(bottomx2-15, canvasHeight-5);
                      
            
            for(var j=0; j<region.length; j++)
            {
                if(j%2)
                {
                    ctx.fillStyle = formData.elements[i+1].value;
                }
                else
                {
                    ctx.fillStyle = formData.elements[i].value;
                }

                ctx.fill(region[j], 'evenodd');
             
            }

            // designing ends here

            ctx.drawImage(img, bottomx2-20, verticalIndex, 30, 50);

            ctx.font = "12px African Elephant Trunk";
            ctx.fillText(formvalues[0], bottomx1, verticalIndex); 
            verticalIndex += 15;
        

        ctx.font = "10px Abyssinica SIL";
        for(var i=1; i<formvalues.length; i++)
        {
            ctx.fillText(formvalues[i], bottomx1, verticalIndex); 
            verticalIndex += 15;    
        
        }
        
        
        
        ctx.stroke();
}

var  displayImage =function(event) 
{
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

