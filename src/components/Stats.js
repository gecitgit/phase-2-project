import React, { useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import SleepByDayBar from "./SleepByDayBar";
import MoodAndEnergyBar from "./MoodAndEnergyBar";
import EnergyPie from "./EnergyPie";
import MoodPie from "./MoodPie";
import MoodRadar from "./MoodRadar";
import EnergyRadar from "./EnergyRadar";
import ChartReadMoreToggle from "./ChartReadMoreToggle";


function Stats({ currentUser }) {
    const [chartToggle, setChartToggle] = useState({});
    const [allChartsToggle, setAllChartsToggle] = useState(false);

    function toggleChart(chartId) {
        setChartToggle(prevState => ({
            ...prevState,
            [chartId]: !prevState[chartId]
        }));
    }



    return (
        <div className="stat-container">
                        <h2 style={{ color: "red", fontSize: "28px"}}>THIS PAGE NEEDS FORMATTING. COPY IS GOOD. Mood and Energy graph needs new tooltip. Energy Pie, Mood Pie need new legends.  MOOD PIE HAS A PROBLEM WITH THE FIRST COLOR NOT BEING READ IN THE PAYLOAD</h2>
            <h1>Hello {currentUser.username}</h1>
            <p>
                Welcome to the Stats page! Here you'll find some fascinating graphs to help you visualize your mood, energy, and sleep patterns.  Click each tab to reveal the relevant graph and explore your well-being in a visual way. Dive into the data and uncover intriguing insights about yourself. Let the graphs tell your story.
            </p>

            {/* Chart 1 code */}
            <span className={`stat-row ${chartToggle['chart1'] ? 'active' : ''}`} 
                onClick={() => toggleChart('chart1')}>
                Average Sleep per Day <span>{chartToggle['chart1'] ? 'X' : '='}</span>
            </span>
            { chartToggle['chart1'] ? <SleepByDayBar currentUser={currentUser} /> : <ChartReadMoreToggle /> }

            {/* Chart 2 code */}
            <span className={`stat-row ${chartToggle['chart2'] ? 'active' : ''}`} 
                onClick={() => toggleChart('chart2')}>
                Tracking Mood and Energy Through the Week <span>{chartToggle['chart2'] ? 'X' : '='}</span>
            </span>
            { chartToggle['chart2'] ? <MoodAndEnergyBar currentUser={currentUser} /> : <ChartReadMoreToggle /> }

            {/* Chart 3 code */}
            <span className={`stat-row ${chartToggle['chart3'] ? 'active' : ''}`} 
                onClick={() => toggleChart('chart3')}>
                Energy Totals <span>{chartToggle['chart3'] ? 'X' : '='}</span>
            </span>
            { chartToggle['chart3'] ? <EnergyPie currentUser={currentUser} /> : <ChartReadMoreToggle /> }

            {/* Chart 4 code */}
            <span className={`stat-row ${chartToggle['chart4'] ? 'active' : ''}`} 
                onClick={() => toggleChart('chart4')}>
                Mood Totals <span>{chartToggle['chart4'] ? 'X' : '='}</span>
            </span>
            { chartToggle['chart4'] ? <MoodPie currentUser={currentUser} /> : <ChartReadMoreToggle /> }

            {/* Chart 5 code */}
            <span className={`stat-row ${chartToggle['chart5'] ? 'active' : ''}`} 
                onClick={() => toggleChart('chart5')}>
                Sleep vs Energy <span>{chartToggle['chart5'] ? 'X' : '='}</span>
            </span>
            { chartToggle['chart5'] ? <EnergyRadar currentUser={currentUser} /> : <ChartReadMoreToggle /> }

            {/* Chart 6 code */}            
            <span className={`stat-row ${chartToggle['chart6'] ? 'active' : ''}`} 
                onClick={() => toggleChart('chart6')}>
                Sleep vs Mood <span>{chartToggle['chart6'] ? 'X' : '='}</span>
            </span>
            { chartToggle['chart6'] ? <MoodRadar currentUser={currentUser} /> : <ChartReadMoreToggle /> }
        </div>        
    )
}
export default Stats;

// Sleep Duration by Day of the Week: BarChart



{/* <p>
Line Chart: A line chart can be suitable for showing trends and changes over time. It can be used to visualize how mood or energy levels vary across different dates or time periods.

Bar Chart: A bar chart is effective for comparing different categories or groups. You can use a bar chart to compare the average hours slept on different days of the week or to compare the distribution of moods across different categories.

Scatter Plot: A scatter plot can be useful for examining the relationship between two variables. For example, you can plot hours slept on the previous night against mood to see if there's any correlation between them.

Histogram: A histogram is suitable for visualizing the distribution of a single variable. You can use it to show the frequency or count of mood or energy levels within certain ranges.

Pie Chart: A pie chart can be used to represent the composition of different categories. For example, you can show the proportion of each mood category within all the entries.
</p>
<br></br>
<br></br>
<p>
Sleep Patterns: You can analyze sleep patterns by visualizing the hours slept on different days of the week or comparing weekday sleep with weekend sleep.

Mood and Energy Correlation: Explore the relationship between mood and energy levels by plotting them on a scatter plot or creating a grouped bar chart.

Sleep Quality: Instead of just hours slept, you can include a measure of sleep quality (e.g., rating on a scale) and visualize how it relates to other variables like mood or energy.

Notes Analysis: If you have text notes associated with each entry, you can perform text analysis to extract insights. For example, you can identify frequently mentioned keywords or sentiments and represent them in a word cloud or sentiment analysis chart.

Weekly Averages: Calculate weekly averages for mood, energy, or sleep and represent them using line charts or bar charts to highlight any patterns or trends.

Mood Distribution: Visualize the distribution of mood categories using a pie chart or stacked bar chart to see the proportion of each mood in the overall data.

Energy Levels Over Time: Plot energy levels on a line chart over time to observe any changes or patterns in energy levels.

Mood Over Time: Use a line chart to show the changes in mood over time, allowing users to spot any long-term trends or fluctuations.
</p> */}