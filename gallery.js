$(function(){
    let imageList = ["imgs/lights1.jpg","imgs/lights2.jpg","imgs/lights3.jpg","imgs/lights4.jpg","imgs/lights5.jpg",
    "imgs/lights6.jpg","imgs/lights7.jpg","imgs/lights8.jpg","imgs/lights9.jpg","imgs/lights10.jpg",
    "imgs/lights11.jpg","imgs/lights12.jpg","imgs/lights13.jpg","imgs/lights14.jpg","imgs/lights15.jpg"];
    let messages = ["Image 1 of 5",
                    "Image 2 of 5",
                    "Image 3 of 5", 
                    "Image 4 of 5",
                    "Image 5 of 5",
                    "Image 1 of 5",
                    "Image 2 of 5",
                    "Image 3 of 5",
                    "Image 4 of 5",
                    "Image 5 of 5",
                    "Image 1 of 5",
                    "Image 2 of 5",
                    "Image 3 of 5",
                    "Image 4 of 5",
                    "Image 5 of 5"];
    var iterator = 0;
    
    $("#leftHalf").css("display","none");
    $("#rightHalf").css("display","none");
    $("#img1, #img2, #img3, #img4, #img5").click(function(e){
        iterator = Number(String(e.target.id).replace("img","")) - 1;
        setUpPic();
    });
    $("#img6, #img7, #img8, #img9, #img10").click(function(e){
        iterator = Number(String(e.target.id).replace("img","")) - 1;
        setUpPic();
    });
    $("#img11, #img12, #img13, #img14, #img15").click(function(e){
        iterator = Number(String(e.target.id).replace("img","")) - 1;
        setUpPic();
    });
    // $("#img2").click(function(){
    //     iterator = 1;
    //     setUpPic();


    // });
    // $("#img3").click(function(){
    //     iterator = 2;
    //     setUpPic();


    // });
    // $("#img4").click(function(){
    //     iterator = 3;
    //     setUpPic();


    // });
    // $("#img5").click(function(){
    //     iterator = 4;
    //     setUpPic();


    // });

    $("#bigImg").focusin(function(){
        $("#background-fade").css("pointer-events","none");
    });
    $("#bigImg").focusout(function(){
        $("#background-fade").css("pointer-events","all");
    });
    
    $("#background-fade").click(function(){
        
        $(this).animate({
            opacity: "0"
        },1000);
        
        
        $("#bigImg").animate({
            opacity: "0"
        },1000,function(){
            $("#image-container").css({"z-index": "auto"});
            $(this).css({"display":"none",
                "z-index":"auto"});
                $("#message").text("");
        });
    });

    $("#leftHalf").click(function(){
        if(iterator !== 0 && iterator !== 5 && iterator !== 10){
            iterator--;
            $("#message").text("");
            $("#leftHalf").css("display","none");
            $("#rightHalf").css("display","none");
            $("#mainImg").css("display","none");
            $("#mainImg").attr("src",imageList[iterator]);
            $("#bigImg").animate({
                width: `${Number($("#mainImg").css("width").replace("px","")) + 50}px`,
                height: `${Number($("#mainImg").css("height").replace("px","")) + 50}px`,
                marginLeft: `${((-Number($("#mainImg").css("width").replace("px","")) + 50) / 2)}px`,
                marginTop: `${((-Number($("#mainImg").css("height").replace("px","")) + 50) / 2)}px`
            },1500,function(){
                $("#mainImg").css("display","block");
                $("#leftHalf").css("display","block");
                $("#rightHalf").css("display","block");
                $("#message").text(messages[iterator]);
            });
        }
        
    });
    $("#rightHalf").click(function(){
        if(iterator !== 4 && iterator !== 9 && iterator !== (imageList.length - 1)){
            iterator++;
            $("#message").text("");
            $("#leftHalf").css("display","none");
            $("#rightHalf").css("display","none");
            $("#mainImg").css("display","none");
            $("#mainImg").attr("src",imageList[iterator]);
            $("#bigImg").animate({
                width: `${Number($("#mainImg").css("width").replace("px","")) + 50}px`,
                height: `${Number($("#mainImg").css("height").replace("px","")) + 50}px`,
                marginLeft: `${((-Number($("#mainImg").css("width").replace("px","")) + 50) / 2)}px`,
                marginTop: `${((-Number($("#mainImg").css("height").replace("px","")) + 50) / 2)}px`
            },1500,function(){
                $("#mainImg").css("display","block");
                $("#leftHalf").css("display","block");
                $("#rightHalf").css("display","block");
                $("#message").text(messages[iterator]);
            });
        }
    });
    $("#leftHalf").hover(function(){
        if(iterator !== 0 && iterator !== 5 && iterator !== 10){
            
            $("#left").css("display","block");
        }
        
    },function(){
        $("#left").css("display","none");
    });
    $("#rightHalf").hover(function(){
        if(iterator !== 4 && iterator !== 9 && iterator !== (imageList.length - 1)){
            
            $("#right").css("display","block");
        }
        
    },function(){
        $("#right").css("display","none");
    });
        
    function setUpPic(){
        $("#leftHalf").css("display","none");
        $("#rightHalf").css("display","none");
        $("#image-container").css({"z-index": "-1"});
        $("#background-fade").animate({
            opacity: ".7"
        },1500);
        $("#bigImg").css({"display":"flex",
                          "z-index":"2"});
        $("#mainImg").css("display","none");
        $("#mainImg").attr("src", imageList[iterator]);
        $("#bigImg").animate({
            width: `${Number($("#mainImg").css("width").replace("px","")) + 50}px`,
            height: `${Number($("#mainImg").css("height").replace("px","")) + 50}px`,
            marginLeft: `${((-Number($("#mainImg").css("width").replace("px","")) + 50) / 2)}px`,
            marginTop: `${((-Number($("#mainImg").css("height").replace("px","")) + 50) / 2)}px`,
            opacity: "1"
        },1500,function(){
            $("#mainImg").css("display","block");
            $("#leftHalf").css("display","block");
            $("#rightHalf").css("display","block");
            $("#message").text(messages[iterator]);

        });
    }

    
});