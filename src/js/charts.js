google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChartAltura);
google.charts.setOnLoadCallback(drawChartAncho);
google.charts.setOnLoadCallback(drawChartPeso);

function drawChartAltura(){
    var dataAlt = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Altura', 0]
    ]);

    var optionsAlt = {
        width: 250, 
        height: 250,
        greenFrom: 10, 
        greenTo: 14,
        yellowFrom: 14, 
        yellowTo: 15,
        redFrom: 15, 
        redTo: 20,
        majorTicks: ['0', '5', '10', '15', '20'],
        minorTicks: 1,
        min: 0,
        max: 20
    };

    var chartAlt = new google.visualization.Gauge(document.getElementById("chart_Alt"));

    chartAlt.draw(dataAlt, optionsAlt);

    var alt = database.ref('caja_valores/altura');
    alt.on('value', function(snapshot){
        alt = snapshot.val();
    });
    
    setInterval(function() {
        dataAlt.setValue(0, 1, alt);
        chartAlt.draw(dataAlt, optionsAlt);
    }, 1300);
}

function drawChartAncho(){
    var dataAnch = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Ancho', 0]
    ]);

    var optionsAnch = {
        width: 250, 
        height: 250,
        greenFrom: 10, 
        greenTo: 14,
        yellowFrom: 14, 
        yellowTo: 15,
        redFrom: 15, 
        redTo: 20,
        majorTicks: ['0', '5', '10', '15', '20'],
        minorTicks: 1,
        min: 0,
        max: 20
    };

    var chartAn = new google.visualization.Gauge(document.getElementById("chart_Anch"));

    chartAn.draw(dataAnch, optionsAnch);

    var an = database.ref('caja_valores/ancho');
    an.on('value', function(snapshot){
        an = snapshot.val();
    });
    
    setInterval(function() {
        dataAnch.setValue(0, 1, an);
        chartAn.draw(dataAnch, optionsAnch);
    }, 1300);
}

function drawChartPeso(){
    var dataPeso = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Peso', 0]
    ]);

    var optionsPeso = {
        width: 250, 
        height: 250,
        greenFrom: 0.75, 
        greenTo: 1.87,
        yellowFrom: 1.72, 
        yellowTo: 2.25,
        redFrom: 2.25, 
        redTo: 3,
        majorTicks: ['0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4'],
        minorTicks: 1,
        min: 0,
        max: 3
    };

    var chartPeso = new google.visualization.Gauge(document.getElementById("chart_Peso"));

    chartPeso.draw(dataPeso, optionsPeso);

    var pe = database.ref('caja_valores/peso');
    pe.on('value', function(snapshot){
        pe = snapshot.val();
    });
    
    setInterval(function() {
        dataPeso.setValue(0, 1, pe);
        chartPeso.draw(dataPeso, optionsPeso);
    }, 1300);
}


