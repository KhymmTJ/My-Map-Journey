var map = L.map('map').setView([14.3252129, 121.4775443], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

var places = [
  {
    coords: [14.327716, 121.479856],
    name: "San Juan Kalayaan Plaza",
    note: "I don't usually go here, it's too loud in here. Though I still to sometimes"
  },
  {
    coords: [14.4129582, 121.4483264],
    name: "LSPU Host Campus",
    note: "Where I study and learn new things. Crazy long ride tho."
  },
  {
    coords: [14.4161840, 121.4465494],
    name: "O! Save",
    note: "Almost every end of school hours, we go here to buy something before going home."
  },
  {
    coords: [14.286675, 121.412313],
    name: "Rivera Restaurant",
    note: "Our family's go to restaurant whenever we wanna bond or just eat."
  },
  {
    coords: [14.3272052, 121.4707154],
    name: "Wawa ng San Juan",
    note: "Goes here sometimes to watch the sunset, it's pretty cool."
  }
];

places.forEach(function(place) {
  L.marker(place.coords)
    .addTo(map)
    .bindPopup("<b>" + place.name + "</b><br>" + place.note);
});
