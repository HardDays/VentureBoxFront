var hostname = window.location.protocol+'//'+window.location.hostname+"/";
$(document).ready(function(){

    checkFooter();
    $('#btn_request').click(function(){
        email=$("#exampleInputEmail1").val().trim();
        company=$("#exampleInputCompany").val().trim();
        if (isEmail(email))
        {
            $.ajax({
                url: hostname+"proc_email.php",
                dataType: 'json',
                async: false,
                method: 'POST',
                data: {
                    mail_mode: "getstarted",
                    email: email,
                    company: company
                },
                success: function(result) {

                }
            });
            $('#thankyou_modal').modal('show');
        }
        else
        {
            alert("Enter Valid Email");    
        }



    })
    chkSearch();
});

function checkFooter(){
    var bodyHeight = $("body").height();
    var vwptHeight = $(window).height();
    var bodyDiff = $("body").position().top;
    var headerHeight=$(".header").height();
    //var ch=$('.coming-header').outerHeight();


    var gap = vwptHeight - bodyHeight+bodyDiff;
    if (gap>=0 && 0==1) {
        if (!$(".coming-header")[0]){
            $(".footer").css( "margin-top" , gap );
        }
        
    } else {
        //$(".footer").css( "margin-top" , "0" );
    }
};
function isPhone(m) {
    var regex = /[0-9 -()+]+$/;
    return regex.test(m);
}

function isEmail(m) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(m);
}

function isLatin(m) {
    var regex = /^([a-zA-Z .+-])+$/;
    return regex.test(m);
}
function chkSearch() {
    lbl=$(".search-lbl .fas");
    if (typeof lbl != 'undefined')
    {
        if (lbl.length>0) {
            sinput=$(".search-input").val();
            if (sinput.trim()=="")
            {
                lbl.removeClass("fa-times");
                lbl.addClass("fa-search");
            }
            else
                {
                lbl.removeClass("fa-search");
                lbl.addClass("fa-times");
                $('.search-lbl .fa-times').click(function(){
                    $('.search-input').val("");
                    lbl.removeClass("fa-times");
                    lbl.addClass("fa-search");
                    filterRes();

                })
            }             
        }
       
    }

}

$(window).resize(function() {
    checkFooter();
});