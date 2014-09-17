// scraped from http://www.internal-displacement.org/themes/idmc-flat/js/global-figures-charts.js

$(function() {

    // Data
    // idpData = [[1,1989],[2,1990],[3,1991]];
    idpData = [
        ["1989", 16.5],
        ["1990", 21.3],
        ["1991", 22.5],
        ["1992", 25],
        ["1993", 27.5],
        ["1994", 28],
        ["1995", 22],
        ["1996", 19.7],
        ["1997", 17.4],
        ["1998", 19.3],
        ["1999", 21.3],
        ["2000", 21.2],
        ["2001", 25],
        ["2002", 25],
        ["2003", 24.6],
        ["2004", 25.3],
        ["2005", 23.3],
        ["2006", 24.4],
        ["2007", 26],
        ["2008", 26],
        ["2009", 27],
        ["2010", 27.5],
        ["2011", 26.4],
        ["2012", 28.8],
        ["2013", 33.3]
    ];

    // refugeeData = [
    //     ["1989", 17.2],
    //     ["1990", 19.6],
    //     ["1991", 19.5],
    //     ["1992", 20.5],
    //     ["1993", 19.1],
    //     ["1994", 18.7],
    //     ["1995", 18.1],
    //     ["1996", 16.6],
    //     ["1997", 15.5],
    //     ["1998", 15.1],
    //     ["1999", 15.4],
    //     ["2000", 15.9],
    //     ["2001", 16],
    //     ["2002", 14.6],
    //     ["2003", 13.8],
    //     ["2004", 13.8],
    //     ["2005", 13],
    //     ["2006", 14.3],
    //     ["2007", 16],
    //     ["2008", 15.2],
    //     ["2009", 10.4],
    //     ["2010", 15.4],
    //     ["2011", 9.8],
    //     ["2012", 9.9]
    // ];

    refugeeData = [
        ["1989", 14.7],
        ["1990", 17.4],
        ["1991", 16.9],
        ["1992", 17.8],
        ["1993", 16.3],
        ["1994", 15.8],
        ["1995", 14.9],
        ["1996", 13.4],
        ["1997", 12.0],
        ["1998", 11.5],
        ["1999", 11.7],
        ["2000", 12.1],
        ["2001", 12.1],
        ["2002", 10.6],
        ["2003", 9.6],
        ["2004", 9.6],
        ["2005", 8.7],
        ["2006", 9.9],
        ["2007", 11.4],
        ["2008", 10.5],
        ["2009", 10.4],
        ["2010", 10.5],
        ["2011", 10.4],
        ["2012", 10.5]
    ];

    totalRefugeeData = [
        ["1989", 17.2],
        ["1990", 19.6],
        ["1991", 19.5],
        ["1992", 20.5],
        ["1993", 19.1],
        ["1994", 18.7],
        ["1995", 18.1],
        ["1996", 16.6],
        ["1997", 15.5],
        ["1998", 15.1],
        ["1999", 15.4],
        ["2000", 15.87],
        ["2001", 15.93],
        ["2002", 14.63],
        ["2003", 13.84],
        ["2004", 13.8],
        ["2005", 13.05],
        ["2006", 14.35],
        ["2007", 15.96],
        ["2008", 15.17],
        ["2009", 15.17],
        ["2010", 15.52],
        ["2011", 15.2],
        ["2012", 15.42],
        ["2013", 16.7]

    ];

    // assistedIdpData = [
    //     ["1989", 0],
    //     ["1990", 0],
    //     ["1991", 0],
    //     ["1992", 0],
    //     ["1993", 0],
    //     ["1994", 0],
    //     ["1995", 0],
    //     ["1996", 0],
    //     ["1997", 0],
    //     ["1998", 0],
    //     ["1999", 0],
    //     ["2000", 0],
    //     ["2001", 0],
    //     ["2002", 0],
    //     ["2003", 0],
    //     ["2004", 0],
    //     ["2005", 0],
    //     ["2006", 12.8],
    //     ["2007", 13.7],
    //     ["2008", 14.4],
    //     ["2009", 15.5],
    //     ["2010", 14.7],
    //     ["2011", 15.5],
    //     ["2012", 17.7]
    // ];

    assistedIdpData = [
        ["1989", 0],
        ["1990", 0],
        ["1991", 0],
        ["1992", 0],
        ["1993", 0],
        ["1994", 0],
        ["1995", 0],
        ["1996", 0],
        ["1997", 4.6],
        ["1998", 5.1],
        ["1999", 4.0],
        ["2000", 6.0],
        ["2001", 5.1],
        ["2002", 4.6],
        ["2003", 4.2],
        ["2004", 5.4],
        ["2005", 6.6],
        ["2006", 12.8],
        ["2007", 13.7],
        ["2008", 14.4],
        ["2009", 15.6],
        ["2010", 14.7],
        ["2011", 15.5],
        ["2012", 17.7],
        ["2013", 23.9]
    ];

    $('#conflict-chart').highcharts({
        chart: {
            type: 'column',
            backgroundColor: null
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'IDP and refugee numbers worldwide'
        },
        xAxis: {
            categories: [
                "1989",
                "1990",
                "1991",
                "1992",
                "1993",
                "1994",
                "1995",
                "1996",
                "1997",
                "1998",
                "1999",
                "2000",
                "2001",
                "2002",
                "2003",
                "2004",
                "2005",
                "2006",
                "2007",
                "2008",
                "2009",
                "2010",
                "2011",
                "2012",
                "2013"
            ]
        },
        yAxis: {
            title: {
                text: 'People (Millions)'
            }
        },
        tooltip: {
            shared: true
        },
        series: [{
            name: 'Total IDPs',
            data: idpData
        }, {
            name: 'IDPs protected/assisted by UNHCR',
            data: assistedIdpData
        }, {
            name: 'Total Refugees',
            data: totalRefugeeData
        }]
    });


});


$(function() {
    $('#disaster-chart').highcharts({
        chart: {
            type: 'column',
            backgroundColor: null
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'The scale of global displacement by disasters, 2008-2013'
        },
        xAxis: {
            categories: ['2008', '2009', '2010', '2011', '2012', '2013']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'People Displaced (Millions)'
            }
        },
        tooltip: {
            pointFormat: '{point.y} M<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                color: '#434248',
                dataLabels: {
                    enabled: true,
                    format: '{y} M',
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [{
            name: 'Displacement by Disasters',
            data: [36.5, 16.7, 42.4, 15.0, 32.4, 21.9]
        }]
    });
});

// $(function() {
//     $('#disaster-chart').highcharts({
//         chart: {
//             type: 'column',
//             backgroundColor: null
//         },
//         credits: {
//             enabled: false
//         },
//         title: {
//             text: 'Global displacement by disasters related to weather vs. geophysical hazards'
//         },
//         xAxis: {
//             categories: ['2008', '2009', '2010', '2011', '2012', '2013']
//         },
//         yAxis: {
//             min: 0,
//             title: {
//                 text: 'People Displaced (Millions)'
//             }
//         },
//         tooltip: {
//             pointFormat: '<span style="color:{series.color}">{series.name}</span>: {point.y}M<br/>',
//             shared: true
//         },
//         plotOptions: {
//             column: {
//                 stacking: 'normal',
//                 dataLabels: {
//                     enabled: true,
//                     format: '{y}M',
//                     color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
//                     style: {
//                         textShadow: '0 0 3px black, 0 0 3px black'
//                     }
//                 }
//             }
//         },
//         series: [{
//             name: 'Weather-related',
//             data: [19.3, 15.3, 38.3, 15.3, 31.7, 20.6]
//         }, {
//             name: 'Geophysical',
//             data: [16.7, 1.5, 4, 1.1, 0.7, 1.2]
//         }]
//     });
// });