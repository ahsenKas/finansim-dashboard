const takvim = document.querySelector(".takvim");

takvim.valueAsDate = new Date();

/* Harcamalarım Grafiği*/

const gelirler = [1600, 1300, 1950, 1450, 1700, 1250, 1500];

const giderler = [900, 600, 1200, 750, 850, 650, 800];

const grafik = document.getElementById("harcamaChart");

new Chart(grafik, {
  type: "line",

  data: {
    labels: ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"],

    datasets: [
      {
        label: "Gelir",
        data: gelirler,
        borderColor: "green",
        tension: 0.3,
      },
      {
        label: "Gider",
        data: giderler,
        borderColor: "red",
        tension: 0.3,
      },
    ],
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        position: "top",
        align: "start",
      },
    },

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const kategoriler = ["Konut", "Yemek", "Ulaşım", "Eğlence", "Diğer"];

const kategoriMiktarlari = [3200, 2150, 1450, 1000, 650];

const kategoriGrafik = document.getElementById("kategoriChart");

new Chart(kategoriGrafik, {
  type: "doughnut",

  data: {
    labels: kategoriler,

    datasets: [
      {
        data: kategoriMiktarlari,

        backgroundColor: ["navy", "green", "gold", "purple", "gray"],
      },
    ],
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        position: "right",
      },
    },
  },
});
