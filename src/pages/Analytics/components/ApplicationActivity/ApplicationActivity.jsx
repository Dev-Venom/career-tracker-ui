import "./ApplicationActivity.css";

import ReactECharts from "echarts-for-react";

function ApplicationActivity() {
  const option = {
    tooltip: {
      trigger: "axis",
    },

    grid: {
      left: "3%",
      right: "3%",
      top: "8%",
      bottom: "8%",
      containLabel: true,
    },

    xAxis: {
      type: "category",

      boundaryGap: false,

      data: [
        "Jul 1",
        "Jul 5",
        "Jul 10",
        "Jul 15",
        "Jul 20",
        "Jul 25",
        "Jul 30",
      ],

      axisLine: {
        lineStyle: {
          color: "#E5E7EB",
        },
      },

      axisLabel: {
        color: "#9CA3AF",
      },
    },

    yAxis: {
      type: "value",

      minInterval: 1,

      splitLine: {
        lineStyle: {
          color: "#F1F5F9",
        },
      },

      axisLabel: {
        color: "#9CA3AF",
      },
    },

    series: [
      {
        name: "Applications",

        type: "line",

        smooth: true,

        data: [2, 5, 3, 7, 4, 8, 6],

        symbol: "circle",

        symbolSize: 7,

        lineStyle: {
          width: 3,
        },

        areaStyle: {
          opacity: 0.08,
        },

        emphasis: {
          focus: "series",
        },
      },
    ],
  };

  return (
    <section className="application-activity">
      <div className="application-activity__header">
        <div>
          <span className="application-activity__eyebrow">
            APPLICATION ACTIVITY
          </span>

          <h2 className="application-activity__title">
            Your application momentum.
          </h2>
        </div>

        <p className="application-activity__description">
          Track how consistently you've been applying throughout your job
          search.
        </p>
      </div>

      <div className="application-activity__card">
        <div className="application-activity__card-header">
          <div>
            <span className="application-activity__metric-label">
              Applications
            </span>

            <strong className="application-activity__metric-value">35</strong>
          </div>

          <span className="application-activity__period">Last 30 days</span>
        </div>

        <div className="application-activity__chart">
          <ReactECharts
            option={option}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default ApplicationActivity;
