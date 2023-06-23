import React, { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell, LabelList, Tooltip, Legend } from "recharts";

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text id="pie-chart-text-anchor" x={cx} y={cy} dy={8} textAnchor="middle" fill="#000000" >
                {payload.name}
            </text>
            <Sector 
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
                backgroundColor={"red"}
                stroke="#000000"
            />
            <Sector 
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
                stroke="#000000"
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke="#000000" fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Count: ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
}

function MoodPie({ currentUser }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const moodData = [];

    for (const post of currentUser.posts) {
        const mood = post.mood;
        if (moodData.hasOwnProperty(mood)) {
            moodData[mood]++;
        } else {
            moodData[mood] = 1;
        }
    }

    const data = Object.entries(moodData).map(([name, value]) => ({ name, value }));
    console.log("Here is the mood data: ", data);

    const moodColors = {
        Ecstatic: "#519FB8",
        Happy: "#FCDC2C",
        Neutral: "#F4E7CC",
        Anxious: "#FCACA4",
        Scared: "#917960",
        Sad: "#233D5D",
        Angry: "#DC040C"
    }

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    let maxMoodKey = null;
    let maxMoodValue = Number.NEGATIVE_INFINITY;

    for (const [key, value] of Object.entries(moodData)) {
        if (value > maxMoodValue) {
            maxMoodKey = key;
            maxMoodValue = value;
        }
    }


    return (
        <div className="stat-box">
            <h2>Total Mood Distribution</h2>
            <p>
                The pie chart below shows you the breakdown of how often you report a certain Mood for the day.  Over the <strong>{currentUser.posts.length}</strong> days you've logged your feelings you most commonly reported feeling <strong>{maxMoodKey}</strong>.  This happened on <strong>{maxMoodValue}</strong> different occassions so far! 
            </p>

            <ResponsiveContainer height={350}>
                <PieChart>
                {/* <PieChart width={400} height={400}> */}
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    fill="1f1f1f"
                    dataKey="value"
                    legendType="square"
                    paddingAngle={1}
                    onMouseEnter={onPieEnter}
                    stroke="#000000"
                    wrapperStyle={{
                        border: "2px black solid"
                    }}
                >
                    {data.map((entry, index) => {
                        const nameWithoutEmojis = entry.name.replace(/[\u{1F000}-\u{1F6FF}]/gu, "").trim();
                        return <Cell key={`cell-${index}`} fill={moodColors[nameWithoutEmojis]} />;
                    })}
                </Pie>
                <Legend 
                    iconType="diamond"
                    wrapperStyle={{
                        padding: "0px",
                        maring: "0",
                        fontWeight: "bold",
                        stroke: "black"
                    }}
                />
                </PieChart>
                </ResponsiveContainer>

        </div>
    )
}

export default MoodPie;