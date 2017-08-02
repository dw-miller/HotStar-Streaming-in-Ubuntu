/**
 * Created by anmol on 27/7/17.
 */

let input;
let url="http://getcdn.hotstar.com/AVS/besc?action=GetCDN&asJson=Y&channel=TABLET&id="
let url1="&type=VOD";
$(function(){

     input=$('#Hotstar-Id');
    let button=$('#submit');

    button.click(buttonClicked)

});

function buttonClicked(ev){

    $.ajax({
        type:'GET',
        url:url+input.val()+url1,
        async: false,
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(json) {

            console.log(json.resultObj.src);

            window.open(json.resultObj.src,"_self");

        },
        error: function(e) {
            console.log(e.message);
        }
    })




}