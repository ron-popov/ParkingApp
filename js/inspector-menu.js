var remoteUrl = "http://" + remoteServerIp + ":" + serverPort + "/parks/tables.psp?table=parks";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        alert("OK");
        console.log(xhttp.responseText);
    } else {
        alert("error");
    }
};
xhttp.open("GET", remoteUrl, true);
xhttp.send();

// $.ajax({
//     url : remoteUrl,
//     contentType: "application/json",
//     success : function(data)
//     {
//         alert(data);
//         l = JSON.parse(data);
//         for(var i = 0 ; i < l.length; i++)
//         {
//             var row = l[i];

//             if(parseInt(row[1]) > 0)
//             {
//                 $("#main-table").append("<tr><td>" + row[0] + "</td></tr>");
//             }
//         }

//     },
//     error : function(data)
//     {
//         alert("Error accessing the server");
//         console.log(data);
//     }
// });
