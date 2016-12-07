var canvas = document.getElementById("skillChart");
    var myChart = new Chart(canvas, {
    type: 'bar',
    data: {
        labels: ["Android", "Java", "Web", "Design"],
        datasets: [{
            data: [6, 6, 5, 4],
            backgroundColor: [
                'rgba(221,75,57,0.8)',
                'rgba(25, 118, 210,0.8)',
                'rgba(255, 193, 7,0.8)',
                'rgba(67, 160, 71,0.8)',
                'rgba(103, 58, 183,0.8)'
            ],
            borderColor: [
                'rgb(221,75,57)',
                'rgb(25, 118, 210)',
                'rgb(255, 193, 7)',
                'rgb(67, 160, 71)',
                'rgb(103, 58, 183)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        tooltips:{
            enabled:false
        },
        legend: {
            display:false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    color:'rgb(200,200,200)'
                }
            }],
            yAxes: [{
                gridLines: {
                    color:'rgb(200,200,200)'
                },
                ticks: {
                    min:0,
                    max:8,
                  
                    callback: function(label, index, labels) {
                        switch(label){
                            case 2 : 
                                return 'Beginner';
                            case 4:
                                return 'Intermediate';
                            case 6:
                                return 'Expert';
                            case 8:
                                return 'God';
                            default:
                                return null;
                        }
                        return label;
                    }
                }
            }]
        }
    }
});