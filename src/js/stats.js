// Referencia a la colección 'datos' en Firestore
const dbRef = db.collection('datos');

// Contadores para cajas aprobadas y no aprobadas
let cajasAprobadas = 0;
let cajasNoAprobadas = 0;

//Razones de cajas no aprobadas
let alto = 0;
let ancho = 0;
let peso = 0;

// Obtener los datos de las cajas
dbRef.get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const caja = doc.data();
    if (caja.aprobado === true) {
      cajasAprobadas++;
    } else {
      cajasNoAprobadas++;
      if (caja.ancho > 15 || caja.ancho < 10) ancho ++;
      if (caja.altura > 15 || caja.altura < 10) alto ++;
      if (caja.peso > 3 || caja.peso < 1) peso ++;
    }
    
  });

  // Imprimir los contadores después de que los datos se hayan leído
  drawCake(cajasAprobadas, cajasNoAprobadas);
  drawColumns(ancho, alto, peso);
  
}).catch(function(error) {
  console.error("Error al leer datos:", error);
});

function drawCake(cajasAprobadas, cajasNoAprobadas){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Cajas', 'Cantidad'],
            ['Aprobadas',   cajasAprobadas],
            ['No Aprobadas', cajasNoAprobadas]
        ]);

        var options = {
            title: 'Estadisticas Cajas'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }

}

function drawColumns(ancho, alto, peso){
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Errores', 'Altura', 'Anchura', 'Peso'],
          ['Estimaciones', alto, ancho, peso]
        ]);

        var options = {
          chart: {
            title: 'Errores de produccion en las cajas',
            subtitle: 'Altura, ancho o peso',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
}