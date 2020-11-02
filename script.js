//window.onload = function () {
//    var basemap1 = L.tileLayer('https://tiles.openstreetmap.org.ua/osm/{z}/{x}/{y}.png', {
//        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
//    });
//
//    var oblast = new L.GeoJSON.AJAX('ADMIN_UKR/ADMIN_1.geojson', {
//        style: function () {
//            return {
//                color: 'blue'
//            }
//        },
//        onEachFeature: function (feature, layer) {
//            layer.bindPopup(feature.properties.ADMIN_1);
//            layer.on('mouseover', function () {
//                this.setStyle({
//                    color: '#ffff00'
//                });
//            });
//            layer.on('mouseout', function () {
//                this.setStyle({
//                    color: 'blue'
//                });
//            });
//        }
//    });
//    var rayon = new L.GeoJSON.AJAX('ADMIN_UKR/ADMIN_2.geojson', {
//        style: function () {
//            return {
//                color: 'blue'
//            }
//        },
//        onEachFeature: function (feature, layer) {
//            layer.bindPopup(feature.properties.ADMIN_1 + '<br /><br />' + feature.properties.ADMIN_2);
//            layer.on('mouseover', function () {
//                this.setStyle({
//                    color: '#ffff00'
//                });
//            });
//            layer.on('mouseout', function () {
//                this.setStyle({
//                    color: 'blue'
//                });
//            });
//        }
//    });
//    var terhromad = new L.GeoJSON.AJAX('ADMIN_UKR/ADMIN_3.geojson', {
//        style: function () {
//            return {
//                color: 'blue'
//            }
//        },
//        onEachFeature: function (feature, layer) {
//            layer.bindPopup(feature.properties.ADMIN_1 + '<br /><br />' + feature.properties.ADMIN_2 + '<br /><br />' + feature.properties.ADMIN_3 + ' ТГ');
//            layer.on('mouseover', function () {
//                this.setStyle({
//                    color: '#ffff00'
//                });
//            });
//            layer.on('mouseout', function () {
//                this.setStyle({
//                    color: 'blue'
//                });
//            });
//        }
//    });
//
//    $.getJSON("ADMIN_UKR/ADMIN_1.geojson", function (data) {
//
//        var geojson = L.geoJson(data, {
//            onEachFeature: function (feature, layer) {
//                layer.bindPopup(feature.properties.Area_Name);
//            }
//        });
//
//
//        var map = L.map('my-map', {
//            layers: [basemap1, geojson, rayon, oblast, terhromad],
//            default: [basemap1, geojson]
//        }).fitBounds(geojson.getBounds());
//
//        var baseMaps = {
//            "Область": oblast,
//            "Район": rayon,
//            "Територіальна громада": terhromad,
//
//        };
//
//        //        var overlayMaps = [geojson];
//
//        L.control.layers(baseMaps, null).addTo(map);
//        L.control.scale({
//            options: {
//                position: 'bottomleft',
//                maxWidth: 500,
//                metric: true,
//                imperial: false,
//                updateWhenIdle: false
//            }
//        }).addTo(map);
//
//
//
//    });
//};

function enable()
{

    var mainPin = document.querySelector('#checkbox1');
   var downloadButton = document.querySelectorAll('#download-button');


//mainPin.addEventListener('click', function () {
//    console.log(downloadButton);
//  downloadButton.forEach(function(item) {
//       item.removeAttribute("disabled");
//      console.log('disabled');
//  })
//});

if (mainPin.checked === true){
  downloadButton.forEach(function(item) {
   console.log('disabled:false');
       item.disabled = false;
  })
} else if (mainPin.checked === false) { 
    downloadButton.forEach(function(item) {
      item.disabled = true;
        console.log('disabled:true');
  })
}
}


  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });


function changeImg(image1, image2) {
    var imghol = document.getElementById("image-holder1");
    imghol.src = image1;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"

    if (image1 === "") {
        imghol.style.visibility = "hidden";
    }
    var imghol = document.getElementById("image-holder2");
    imghol.src = image2;
    imghol.style = "width:100%;height:100%";
    imghol.style.visibility = "visible"
    if (image2 === "") {
        imghol.style.visibility = "hidden";
    }
};

window.addEventListener("load", function () {
    console.log('query');
    var base_dir = 'static/atlas_materials/';



    var svgObject = document.getElementById('svg-object').contentDocument;

    var svg = svgObject.getElementById('obl_crimea');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'ARK1.png', base_dir + 'ARK2.png')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_zhytomyr');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'zhytomyr1.png', base_dir + 'zhytomyr2.png')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_vinnytsia');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'vinnytsa1.png', base_dir + 'vinnytsa2.png')
        $('#exampleModalCenter').modal('show');
    });


    var svg = svgObject.getElementById('obl_volyn');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'volynska1.png', base_dir + 'volynska2.png')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_dnipro');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'dnipro1.png', base_dir + 'dnipro2.png')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_donetsk');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'donetsk1.png', base_dir + 'donetsk2.png')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_zakarpattia');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'zakarpattya1.png', base_dir + 'zakarpattya2.png')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_zaporizhzhia');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'zaporizhya1.png', base_dir + 'zaporizhya2.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_frankivsk');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'ivano-frank1.png', base_dir + 'ivano-frank2.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_kyiv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'kyivska1.png', base_dir + 'kyivska2.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_kirovohrad');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'kirovohrad1.png', base_dir + 'kirovohrad2.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_luhansk');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'luhanska1.png', base_dir + 'luhanska2.png')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_lviv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'lvivska1.png', base_dir + 'lvivska2.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_mykolaiv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'mykolaivska1.png', base_dir + 'mykolaivska2.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_odesa');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'odeska1.png', base_dir + 'odeska2.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_poltava');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'poltavska2.png', base_dir + 'poltavska1.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_rivne');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'rivno1.png', base_dir + 'rivno2.png')
        $('#exampleModalCenter').modal('show');
    });


    var svg = svgObject.getElementById('obl_sumy');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'sumy1.png', base_dir + 'sumy2.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_ternopil');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'ternopil1.png', base_dir + 'ternopil2.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_kharkiv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'kharkiv1.png', base_dir + 'kharkiv2.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_kherson');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'kherson1.png', base_dir + 'kherson2.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_khmelnytsk');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'khmelnytsk1.png', base_dir + 'khmelnytsk2.png')
        $('#exampleModalCenter').modal('show');
    });

    var svg = svgObject.getElementById('obl_cherkasy');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'cherkasy1.png', base_dir + 'cherkasy2.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_chernihiv');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'chernihiv1.png', base_dir + 'chernihiv2.png')
        $('#exampleModalCenter').modal('show');
    });
    var svg = svgObject.getElementById('obl_chernivtsi');
    svg.addEventListener('click', event => {
        changeImg(base_dir + 'chernivtsi1.png', base_dir + 'chernivtsi2.png')
        $('#exampleModalCenter').modal('show');
    });
});



//  http://{s}.tile.osm.org/{z}/{x}/{y}.png