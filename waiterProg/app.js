function $http(config) {
  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();

    xhr.open(config.method, config.url);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status < 400) {
        resolve(JSON.parse(xhr.responseText));
      }
      if (xhr.readyState === 4 && xhr.status >= 400) {
        reject(xhr);
      }
    }

    xhr.send(null);
  })
}



$http({
    url : 'http://52.25.225.137:8080/pokemon/data/poke',
    method : 'GET'
  })
.then(function(data){
  data.forEach(function(poke) {
    var p = document.createElement('p');
    p.textContent = poke.name
    document.body.append(p);
  })
})
.catch(function(err) {
  console.log("BADT THINGS HAVE HAPPENDED");
})



// var tables = [
//   {
//     table : '1',
//     orders : [],
//     complete : false
//   },
//   {
//     table : '2',
//     orders : [],
//     complete : false
//   },
//   {
//     table : '3',
//     orders : [],
//     complete : false
//   },
//   {
//     table : '4',
//     orders : [],
//     complete : false
//   },
//   {
//     table : '5',
//     orders : [],
//     complete : false
//   },
//   {
//     table : '6',
//     orders : [],
//     complete : false
//   },
//   {
//     table : '7',
//     orders : [],
//     complete : false
//   },
//   {
//     table : '8',
//     orders : [],
//     complete : false
//   },
//   {
//     table : '9',
//     orders : [],
//     complete : false
//   },
// ];
//
// var menu = [
//   'chow mein',
//   'wonton soup',
//   'lo mein',
//   'sesame shrimp',
//   'peking duck',
//   'mongolian beef'
// ];
//
// takeOrder();
//
// function randomTimeGenerator() {
//   return Math.random() * 5000;
// }
//
// function takeOrder() {
//   var table = tables.shift()
//   setTimeout(function(){
//     var numOrders = Math.random() * 6
//     for (var i = 0 ; i < numOrders ; i++) {
//       table.orders.push(menu[i]);
//     }
//     console.log('table ', table.table, 'orders taken');
//     prepareFood(table)
//     console.log('table ', table.table,' order dropped off at kitchen');
//     if (tables.length > 0) {
//       takeOrder();
//     }
//   },randomTimeGenerator())
// }
//
// function prepareFood(table) {
//   setTimeout(function() {
//     console.log('order ready: ', table.table);
//     deliverFoodToTable(table)
//   }, randomTimeGenerator())
// }
//
// function deliverFoodToTable(table) {
//   setTimeout(function() {
//     table.complete = true;
//     console.log('orders delivered to table', table.table);
//     table.orders.forEach(o => console.log('\t' + o))
//   }, randomTimeGenerator())
// }
