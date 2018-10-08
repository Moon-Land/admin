import G2 from "@antv/g2";
export default {
  render: h => {
    return h("div", {
      attrs: {
        id: "chart"
      }
    });
  },
  props: ["data"],
  mounted() {
    const chart = new G2.Chart({
      container: "chart",
      height: 300,
      forceFit: true
    });
    chart.source(this.data);
    chart
      .interval()
      .position("月份*月均降雨量")
      .color("name")
      .adjust([
        {
          type: "dodge",
          marginRatio: 1 / 32
        }
      ]);
    chart.render();
  }
};
