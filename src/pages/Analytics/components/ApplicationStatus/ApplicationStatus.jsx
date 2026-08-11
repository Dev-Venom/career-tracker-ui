import "./ApplicationStatus.css";

import ReactECharts from "echarts-for-react";

function ApplicationStatus({ statusData }) {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },

    grid: {
      left: "4%",
      right: "5%",
      top: "8%",
      bottom: "8%",
      containLabel: true,
    },

    xAxis: {
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

    yAxis: {
      type: "category",

      data: ["Applied", "Interview", "Offer", "Rejected"],

      axisLine: {
        show: false,
      },

      axisTick: {
        show: false,
      },

      axisLabel: {
        color: "#374151",
        fontWeight: 600,
      },
    },

    series: [
      {
        name: "Applications",

        type: "bar",

        data: [
          statusData?.applied ?? 0,
          statusData?.interview ?? 0,
          statusData?.offer ?? 0,
          statusData?.rejected ?? 0,
        ],

        barWidth: 18,

        itemStyle: {
          borderRadius: [0, 8, 8, 0],
        },

        label: {
          show: true,

          position: "right",

          color: "#374151",

          fontWeight: 700,
        },
      },
    ],
  };

  return (
    <section className="application-status">
      <div className="application-status__header">
        <div>
          <span className="application-status__eyebrow">
            APPLICATION STATUS
          </span>

          <h2 className="application-status__title">
            Where your applications stand.
          </h2>
        </div>

        <p className="application-status__description">
          See how your applications are distributed across the hiring pipeline.
        </p>
      </div>

      <div className="application-status__card">
        <div className="application-status__chart">
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

export default ApplicationStatus;
