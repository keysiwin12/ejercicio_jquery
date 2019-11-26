$(document).ready(function () {
    let num = 0;
    $('#despues').click(function () { 
        num++;
        $(`.${num} `).hide();
        if(num==5) 
            num = 0;
        $(`.${num+1}`).show();        
    });
    $('#antes').click(function (e) { 
        $('img').hide();
        if(num==0)
            num = 5;
        $(`.${num}`).show();    
        num--;
    });   
});

