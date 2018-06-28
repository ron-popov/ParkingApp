function buyButton()
{
    var licensePlate = $("#licence-plate-number").val();
    var secondsToBuy = parseInt($("#hours-number").val());
    
    if(secondsToBuy == NaN)
    {
        label("Not a number");
        return;
    }

    secondsToBuy = secondsToBuy * 60 * 60;
    var remoteUrl = remoteServerIp + ":" + serverPort + "/parks/purchase.psp?client=" + licensePlate + "&time=" + secondsToBuy;
 
    alert(remoteUrl);

    $.ajax({
        url : remoteUrl,
        success : function(data)
        {
            label("Paid for parking !");
        },
        error : function()
        {
            label("Connection to server failed");
        }
    });
}

function label(txt)
{
    $("#label").text(txt);
}
