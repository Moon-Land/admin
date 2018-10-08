import G2 from "@antv/g2";
export default {
  render: h => {
    return h("div", {
      attrs: {
        id: "wave-chart"
      }
    });
  },
  props: ["data"],
  mounted() {
    let data = [
      {
        gender: "male",
        value: 50
      }
    ];
    const chart = new G2.Chart({
      container: "wave-chart",
      height: 300,
      forceFit: true,
      padding: 0
    });
    chart.source(data, {
      value: {
        min: 0,
        max: 100
      }
    });
    chart
      .interval()
      .position("gender*value")
      .color("gender")
      .shape("liquid-fill-gauge")
      .style({
        lineWidth: 3,
        opacity: 0.75
      });
    data.forEach(function(row) {
      chart.guide().text({
        top: true,
        position: {
          gender: row.gender,
          value: 50
        },
        content: row.value + "%",
        style: {
          opacity: 0.75,
          fontSize: 18,
          textAlign: "center"
        }
      });
    });
    chart.legend(false);
    chart.axis(false);
    chart.tooltip(false);
    chart.render();
  }
};
