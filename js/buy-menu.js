function buyButton()
{
    var licensePlate = $("#licence-plate-number").val();
    var secondsToBuy = parseInt($("#hours-number").val());
    
    if(secondsToBuy == NaN)
    {
        alert("Not a number");
        return;
    }

    secondsToBuy = secondsToBuy * 60 * 60;
    var remoteUrl = "http://" + remoteServerIp + ":" + serverPort + "/parks/purchase.psp?client=" + licensePlate + "&time=" + secondsToBuy;
 
    alert(remoteUrl);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if(this.readyState== 4 &&this.status == 200)
        {
            alert("OK");
        }
    }
    xhttp.open("GET", remoteUrl, true);
    xhttp.send();

    // $.ajax({
    //     url : remoteUrl,
    //     success : function(data)
    //     {
    //         alert("Paid for parking !");
    //     },
    //     error : function()
    //     {
    //         alert("Connection to server failed");
    //     }
    // });
}
