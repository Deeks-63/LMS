// import { ResponsiveStream } from "@nivo/stream";

// const streamData = [{
//         Leaves: 116,
//     },
//     {
//         Leaves: 101,
//     },
//     {
//         Leaves: 156,
//     },

// ];

// const Stream = () => {
//     return ( <
//         div style = {
//             { height: "400px" }
//         } >
//         <
//         h2 style = {
//             { fontFamily: "Fredericka the Great", color: "#181D31", padding: "10px" }
//         }
//         className = "text-center" > Analsys of Leaves < /h2> <
//         ResponsiveStream data = { streamData }
//         keys = {
//             ["Leaves"]
//         }
//         margin = {
//             {
//                 top: 30,
//                 right: 180,
//                 bottom: 30,
//                 left: 100,
//             }
//         }
//         axisTop = { null }
//         axisRight = { null }
//         axisBottom = {
//             {
//                 orient: "bottom",
//                 tickSize: 5,
//                 tickPadding: 5,
//                 tickRotation: 0,
//                 legend: "Year Wise",
//                 legendOffset: 36,
//             }
//         }
//         axisLeft = {
//             {
//                 orient: "left",
//                 tickSize: 5,
//                 tickPadding: 5,
//                 tickRotation: 0,
//                 legend: "Number of Leaves",
//                 legendOffset: -40,
//             }
//         }
//         offsetType = "silhouette"
//         colors = {
//             { scheme: "accent" }
//         }
//         fillOpacity = { 0.85 }
//         borderColor = {
//             { theme: "background" }
//         }
//         dotBorderColor = {
//             {
//                 from: "color",
//                 modifiers: [
//                     ["darker", 0.7]
//                 ],
//             }
//         }

//         />  < /
//         div >
//     );
// };

// export default Stream;

import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, LineChart, Line } from 'recharts';


const Stream = () => {

    // Sample data
    const data = [
        { month: 'January', leaves: 400 },
        { month: 'February', leaves: 700 },
        { month: 'March', leaves: 200 },
        { month: 'April', leaves: 1000 },
        { month: 'May', leaves: 1000 },
        { month: 'June', leaves: 1000 },
        { month: 'July', leaves: 1000 },
        { month: 'August', leaves: 1000 },
        { month: 'September', leaves: 1000 },
        { month: 'October', leaves: 1000 },
        { month: 'November', leaves: 1000 },
        { month: 'December', leaves: 1000 },
    ];


    return ( < >
        <
        div className = 'row' >
        <
        h1 style = {
            { fontFamily: "Zen Dots", color: "#181D31", padding: "10px" }
        }
        className = "text-center" > Analysis of Leaves < /h1> < /
        div > <
        LineChart width = { 1000 }
        height = { 500 }
        data = { data } >
        <
        XAxis dataKey = "month" / >
        <
        YAxis / >
        <
        CartesianGrid stroke = "#eee"
        strokeDasharray = "5 5" / >
        <
        Line type = "monotone"
        dataKey = "leaves"
        stroke = "#8884d8" / >
        <
        /LineChart></ >
    );
}

export default Stream;