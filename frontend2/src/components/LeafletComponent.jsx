import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const LeafletMap = () => {
  useEffect(() => {
    // Initialize the map
    // const map = L.map('map').setView([20.5937, 78.9629], 5);
    const map = L.map('map').setView([15.3173, 77.7139], 7); // Coordinates for Karnataka

    // Add a base tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Define marker coordinates and content
    const markerData = [
  { coordinates: [13.24309, 77.7049], content: 'G lps A.ranganathapura' },
  { coordinates: [12.87071, 77.61934], content: 'G lps Acharlahalli' },
  { coordinates: [13.24337, 77.47179], content: 'G lps Adakavala' },
  { coordinates: [12.96199, 77.61457], content: 'G LPS MOPARAHALLI' },
  { coordinates: [13.05016, 77.748177], content: 'G LPS AGALAKOTE' },
  { coordinates: [13.10562, 77.3827], content: 'G HPS AGALAKUPPE' },
  { coordinates: [12.9290111674064, 77.8598661395488], content: 'G LPS KRISHNAPURA' },
  { coordinates: [13.1119841644808, 77.3610235646895], content: 'G LPS ANCHEPALYA' },
  { coordinates: [13.2698498595909, 77.1911], content: 'G HS (COMP) DEVARAHOSAHALLI School' },
  { coordinates: [13.2398015288773, 77.9281530252685], content: 'G LPS AGASARAHALLI' },
  { coordinates: [13.1478777284521, 77.3388737123759], content: 'G HS t .beguru' },
  { coordinates: [13.3166638852397, 77.4010156], content: 'G LPS AKKA THAMMANAHALLI' },
  { coordinates: [13.2535359055942, 77.6722245530467], content: 'G LPS AKKUPETE' },
  { coordinates: [13.2661276654799, 77.513224553047], content: 'G HPS ALAHALLI' },
  { coordinates: [13.1855600547415, 77.310422385222], content: 'G LPS ALANAYAKANAHALLI' },
  { coordinates: [13.3637594303969, 77.3615942372196], content: 'G HPS ALAPPANAHALLI' },
  { coordinates: [13.2738920889599, 77.6000007799772], content: 'G HPS DUDDANAHALLI' },
  { coordinates: [13.0878778406431, 77.4656727818262], content: 'G HPS ALURU9' },
  { coordinates: [13.3426823287834, 77.4012974799782], content: 'G LPS AMBALAGERE' },
  { coordinates: [13.1270945962582, 77.3762558529908], content: 'G LPS ANANTHAPURA' },
  { coordinates: [13.0672378995028, 77.3725039799742], content: 'G HPS HANCHIPURA' },
  { coordinates: [13.0755651486174, 77.6045351799743], content: 'G LPS ANIGHATTA' },
  { coordinates: [13.2139027170415, 77.6937334088123], content: 'G HPS ANNESHWARA' },
  { coordinates: [13.3545076086863, 77.5097121359696], content: 'G HPS ANTHARAHALLI' },
  { coordinates: [12.9558716016995, 77.8155155953163], content: 'G HPS ANUGONDANAHALLI' },
  { coordinates: [13.216185936051, 77.8562861664843], content: 'G HPS ANUPAHALLI' },
  { coordinates: [13.2414616209746, 77.3901448167185], content: 'G LPS APPAGARANAHALLI' },
  { coordinates: [13.1107596040615, 77.8257064690498], content: 'G HPS APPAGONDANAHALLI' },
  { coordinates: [13.2642017100124, 77.313152708813], content: 'G HPS ARADESHANAHALLI' },
  { coordinates: [13.2218650425443, 77.562173768336], content: 'G LPS ARALASANDRA' },
  { coordinates: [13.114001066074, 77.3553915376468], content: 'G LPS GANGABHYRAPPANAPALYA' },
  { coordinates: [13.1249401987337, 77.3146772223031], content: 'G LPS ARALEDIBBA' },
  { coordinates: [13.1448609939778, 77.3289619511393], content: 'G HPS ANANDANAGARA' },
  { coordinates: [13.1407755493832, 77.3291219971707], content: 'G LPS KHANE HOSAHALLI' },
  { coordinates: [13.2741858887196, 77.506995124157], content: 'G LPS HARALURU NAGENAHALLI' },
  { coordinates: [13.3285339231763, 77.810066479978], content: 'G LPS ARASANAHALLI' },
  { coordinates: [13.1794173047216, 77.7681415818275], content: 'G LPS GOLLARAHATTI' },
  { coordinates: [13.2635150121349, 77.555962937649], content: 'G LPS GOLLARAHATTI' },
];


    // Create an array of markers
    const markers = markerData.map((markerInfo) =>
      L.marker(markerInfo.coordinates).bindPopup(markerInfo.content).addTo(map)
    );

    // Clean up the map and markers when the component unmounts
    return () => {
      map.remove();
      markers.forEach((marker) => marker.remove());
    };
  }, []);

  return <div id="map" style={{ width: '800px', height: '600px' }}></div>;
};

export default LeafletMap;
