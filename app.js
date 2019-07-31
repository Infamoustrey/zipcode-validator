mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFyYWRheTIiLCJhIjoiTUVHbDl5OCJ9.buFaqIdaIM3iXr1BOYKpsQ";

const lat = prompt("Reference Lat", 29.750893);
const lon = prompt("Reference Long", -95.811675);
const zoom = prompt("Zoom Level", 10);

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9",
  center: { lon: lon, lat: lat },
  zoom: zoom
});

const mapIcon = document.createElement("div");
mapIcon.style.backgroundImage =
  "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABL0lEQVR4AeXUNUIEQRCF4R93d+cuuF4CdxgyyCHdO2D5kuJEkOF2BdzdtVZa2M32q2yq+o03oSmTVqZY55Iz1pmijUysheNwzossznEIx0Iqs7z4qVlSMRTJKi+KWiESIyO8aGoUAyU8aoMeKUVr3GvRJpte4RNoRHMtFrjJBiAbtzh+TTRK5WJ8/894DLuiV4FSixgeFL1B0WtBaUgMN4peg+gNo9Qjhh3Rc0SvB6UKv88omgObZ5TEo8+3lsU08qNIRmORF1EPbL+VjH9hEa1OXgyqC614jrUxx8QH56cdwUged8qYO/Iw5FIGuTCWyYnfmBOysNDsN6gFS4s+Y5axVurj9k4pBXs1XkE1/NOE+faqlszOT8wOyQQgn6OPmCPyCVDdR1AdQTCAQyh7BbZlfWC8HZtuAAAAAElFTkSuQmCC')";
mapIcon.style.width = 36 + "px";
mapIcon.style.height = 36 + "px";

new mapboxgl.Marker(mapIcon).setLngLat({ lon: lon, lat: lat }).addTo(map);

map.on("load", () => {
  let input = prompt(
    "Please Input Raw Zip Data",
    "[-95.901525,29.759882],[-95.901366,29.742121],[-95.901091,29.724786],[-95.89441,29.724865],[-95.893381,29.724362],[-95.869812,29.72454],[-95.86972,29.73234],[-95.859406,29.732284],[-95.859341,29.721668],[-95.869533,29.721585],[-95.869525,29.720377],[-95.859286,29.720384],[-95.859262,29.697587],[-95.864577,29.697385],[-95.864574,29.693168],[-95.845917,29.694699],[-95.791325,29.69918],[-95.77547,29.700572],[-95.775931,29.706436],[-95.775113,29.709554],[-95.773506,29.713202],[-95.773252,29.714063],[-95.776831,29.715081],[-95.778373,29.716153],[-95.776073,29.718278],[-95.773704,29.721169],[-95.772541,29.721228],[-95.772721,29.733553],[-95.767617,29.734539],[-95.763927,29.734415],[-95.764244,29.736898],[-95.767744,29.741014],[-95.768546,29.74282],[-95.768598,29.745249],[-95.766574,29.750172],[-95.766512,29.754874],[-95.76651,29.757015],[-95.767455,29.760761],[-95.774085,29.772819],[-95.777024,29.771996],[-95.776802,29.785178],[-95.791288,29.785392],[-95.801751,29.785675],[-95.805003,29.785799],[-95.807969,29.785427],[-95.811169,29.786018],[-95.821596,29.785738],[-95.822283,29.786058],[-95.82221,29.785747],[-95.831656,29.786173],[-95.831892,29.786078],[-95.838716,29.786124],[-95.840055,29.785847],[-95.859797,29.785933],[-95.8826,29.786303],[-95.881186,29.786039],[-95.880878,29.770496],[-95.879286,29.770838],[-95.87729,29.770266],[-95.873296,29.770318],[-95.901525,29.759882]"
  );
  input = JSON.parse('{ "data": [' + input + "]}");
  map.addLayer({
    id: "zip",
    type: "fill",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [input.data]
        }
      }
    },
    layout: {},
    paint: {
      "fill-color": "#088",
      "fill-opacity": 0.8
    }
  });
});
