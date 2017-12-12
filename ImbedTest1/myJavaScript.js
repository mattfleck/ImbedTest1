var SERVERURL = 'http://52.183.64.63:9017';
var USER = 'username';
var PASS = 'password';
var viz, workbook;

window.onload = function () {
    var vizDiv = document.getElementById('TableauViz');
    var vizURL = "http://public.tableau.com/views/Presents/TreeMap";
    var vizURL = "http://52.183.64.63:9017/#/views/GridReportV2_0e/GridReport?:iid=1"
    var options = {
        width: '600px',
        height: '540px'
    };
    viz = new tableau.Viz(vizDiv, vizURL, options);
    loadReport();

    function receiveMessage(event) {
        //console.log(event);
    }
    //window.addEventListener("message", receiveMessage, false);

    var logon = function () {
        // logon to Tableau
        //$contentWindow.postMessage(
        //    JSON.stringify(
        //        {
        //            "url": SERVERURL + "/api/2.0/auth/signin",
        //            "dataType": "xml",
        //            "type": "POST",
        //            "data": "<tsRequest><credentials name=\"" + USER + "\" password=\"" + PASS + "\" ><site contentUrl=\"\" /></credentials></tsRequest>"
        //        }),
        //    SERVERURL + "/");
    }

    function loadReport() {
        console.log("loadReport");
        var vizDiv = document.getElementById('TableauViz');
        var vizURL = 'http://52.183.64.63:9017/#/views/GridReportV2_0e/GridReport?:iid=1';
        var options = {
            //width: '1180px',
            //height: '836px',
            //hideToolbar: true,
            //hideTabs: true
        }
        viz = new tableau.Viz(vizDiv, vizURL, options);
        return false;
    }

};
