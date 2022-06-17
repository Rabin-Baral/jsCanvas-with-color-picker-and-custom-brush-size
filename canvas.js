window.addEventListener('load', ()=>{
    const canvas = document.querySelector('#myCanvas')
    const context = canvas.getContext('2d')
    let pickedColor = document.querySelector('#colorPicker')    //picking up the color for painting
    let brush = document.querySelector('#brushSize')
    //Resizing the width & height of the canvas
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    //variables : mouse actions as variables
    let painting = false

    //functions for drawing
    function startPainting(e){   //if you start(click the mosue) painting set painting - true
        painting = true
        draw(e)     //draw dot(.) if we just click the mouse button
    }

    function finishPainting(){ //if your finished(released the mouse) set painting to the false
        painting = false
        context.beginPath() //resetting the old drawing path and beginning to draw new line(path)
    }

    //actually drawing
    function draw(e){
        if(!painting){return}
        else{
            let color = pickedColor.value
            context.strokeStyle = color
            let brushSize = brush.value
            context.lineWidth = brushSize   //line weight
            context.lineCap = 'round'      //brush style
            context.lineTo(e.clientX, e.clientY)    //getting mouse pointer location
            context.stroke()    //drawing
            // context.beginPath()
            context.moveTo(e.clientX, e.clientY)    //getting new mouse pointer location after relasing the mouse button
        }

    }

    //Eventlistener for the cnavas
    canvas.addEventListener('mousedown', startPainting)
    canvas.addEventListener('mouseup', finishPainting)
    canvas.addEventListener('mousemove', draw)

})
