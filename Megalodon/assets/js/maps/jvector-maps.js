$(function(){
    
    //World Market Dashboard
    if($("#worldMarket").length) {
        $('#worldMarket').vectorMap({
            map: 'world_mill_en',
            scaleColors: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial',
            hoverOpacity: 0.7,
            hoverColor: false,
            regionStyle:{initial:{fill:"#0D47A1"}},
            markerStyle: {
                initial: {
                fill: '#E95B4E',
                stroke: '#efefef'
                }
            },
            backgroundColor: '#fff',
            markers: [
                {latLng: [41.90, 12.45], name: 'Vatican City'},
                {latLng: [43.73, 7.41], name: 'Monaco'},
                {latLng: [-0.52, 166.93], name: 'Nauru'},
                {latLng: [-8.51, 179.21], name: 'Tuvalu'},
                {latLng: [43.93, 12.46], name: 'San Marino'},
                {latLng: [47.14, 9.52], name: 'Liechtenstein'},
                {latLng: [7.11, 171.06], name: 'Marshall Islands'},
                {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
                {latLng: [3.2, 73.22], name: 'Maldives'},
                {latLng: [35.88, 14.5], name: 'Malta'},
                {latLng: [12.05, -61.75], name: 'Grenada'},
                {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
                {latLng: [13.16, -59.55], name: 'Barbados'},
                {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
                {latLng: [-4.61, 55.45], name: 'Seychelles'},
                {latLng: [7.35, 134.46], name: 'Palau'},
                {latLng: [42.5, 1.51], name: 'Andorra'},
                {latLng: [14.01, -60.98], name: 'Saint Lucia'},
                {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
                {latLng: [1.3, 103.8], name: 'Singapore'},
                {latLng: [1.46, 173.03], name: 'Kiribati'},
                {latLng: [-21.13, -175.2], name: 'Tonga'},
                {latLng: [15.3, -61.38], name: 'Dominica'},
                {latLng: [-20.2, 57.5], name: 'Mauritius'},
                {latLng: [26.02, 50.55], name: 'Bahrain'},
                {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
            ]
        });
    }

    //World Market Dashboard
    if($("#worldMarket2").length) {
        $('#worldMarket2').vectorMap({
            map: 'world_mill_en',
            scaleColors: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial',
            hoverOpacity: 0.7,
            hoverColor: false,
            regionStyle:{initial:{fill:"#5c5c5c"}},
            markerStyle: {
                initial: {
                fill: '#E95B4E',
                stroke: '#efefef'
                }
            },
            backgroundColor: '#fff',
            markers: [
                {latLng: [41.90, 12.45], name: 'Vatican City'},
                {latLng: [43.73, 7.41], name: 'Monaco'},
                {latLng: [-0.52, 166.93], name: 'Nauru'},
                {latLng: [-8.51, 179.21], name: 'Tuvalu'},
                {latLng: [43.93, 12.46], name: 'San Marino'},
                {latLng: [47.14, 9.52], name: 'Liechtenstein'},
                {latLng: [7.11, 171.06], name: 'Marshall Islands'},
                {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
                {latLng: [3.2, 73.22], name: 'Maldives'},
                {latLng: [35.88, 14.5], name: 'Malta'},
                {latLng: [12.05, -61.75], name: 'Grenada'},
                {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
                {latLng: [13.16, -59.55], name: 'Barbados'},
                {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
                {latLng: [-4.61, 55.45], name: 'Seychelles'},
                {latLng: [7.35, 134.46], name: 'Palau'},
                {latLng: [42.5, 1.51], name: 'Andorra'},
                {latLng: [14.01, -60.98], name: 'Saint Lucia'},
                {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
                {latLng: [1.3, 103.8], name: 'Singapore'},
                {latLng: [1.46, 173.03], name: 'Kiribati'},
                {latLng: [-21.13, -175.2], name: 'Tonga'},
                {latLng: [15.3, -61.38], name: 'Dominica'},
                {latLng: [-20.2, 57.5], name: 'Mauritius'},
                {latLng: [26.02, 50.55], name: 'Bahrain'},
                {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
            ]
        });
    }
    
    //World Map
    if($("#worldMap").length) {
        $('#worldMap').vectorMap({
            map: 'world_mill_en',
            scaleColors: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial',
            hoverOpacity: 0.7,
            hoverColor: false,
            regionStyle:{initial:{fill:"#28A545"}},
            backgroundColor: '#fff',
        });
    }

    //World map with marker
    if($("#worldMapMarker").length) {
        $('#worldMapMarker').vectorMap({
            map: 'world_mill_en',
            scaleColors: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial',
            hoverOpacity: 0.2,
            hoverColor: false,
            regionStyle:{initial:{fill:"#0D47A1"}},
            markerStyle: {
                initial: {
                fill: '#5c5c5c',
                stroke: '#efefef'
                }
            },
            backgroundColor: '',
            markers: [
  {latLng: [27.9944, -81.7603], name: 'USA (Florida)'},
  {latLng: [33.8361, -81.1637], name: 'South Carolina'},
  {latLng: [23.6345, -102.5528], name: 'Mexico'},
  {latLng: [-9.1900, -75.0152], name: 'Peru'},
  {latLng: [-33.4489, -70.6693], name: 'Chile'},
  {latLng: [-38.4161, -63.6167], name: 'Argentina'},
  {latLng: [55.3781, -3.4360], name: 'UK'},
  {latLng: [50.5039, 4.4699], name: 'Belgium'},
  {latLng: [40.4637, -3.7492], name: 'Spain'},
  {latLng: [31.7917, -7.0926], name: 'Morocco'},
  {latLng: [-30.5595, 22.9375], name: 'South Africa'},
  {latLng: [36.2048, 138.2529], name: 'Japan'},
  {latLng: [20.5937, 78.9629], name: 'India'},
  {latLng: [13.41, 122.56], name: 'Philippines'},
  {latLng: [-33.8688, 151.2093], name: 'Australia (NSW)'}

            ]
        });
    }

    //USA Map
    if($("#usaMap").length) {
        $('#usaMap').vectorMap({
            map: 'us_aea_en',
            scaleColors: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial',
            hoverOpacity: 0.7,
            hoverColor: false,
            regionStyle:{initial:{fill:"#b71c1c"}},
            backgroundColor: '#fff',
        });
    }

    //UK Map
    if($("#ukMap").length) {
        $('#ukMap').vectorMap({
            map: 'uk_mill_en',
            scaleColors: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial',
            hoverOpacity: 0.7,
            hoverColor: false,
            regionStyle:{initial:{fill:"#4a148c"}},
            backgroundColor: '#fff',
        });
    }

    //UK Map
    if($("#indiaMap").length) {
        $('#indiaMap').vectorMap({
            map: 'in_mill',
            scaleColors: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial',
            hoverOpacity: 0.7,
            hoverColor: false,
            regionStyle:{initial:{fill:"#455a64"}},
            backgroundColor: '#fff',
        });
    }

    //UK Map
    if($("#canadaMap").length) {
        $('#canadaMap').vectorMap({
            map: 'ca_lcc',
            scaleColors: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial',
            hoverOpacity: 0.7,
            hoverColor: false,
            regionStyle:{initial:{fill:"#004d40"}},
            backgroundColor: '#fff',
        });
    }
});