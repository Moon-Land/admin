<template>
  <div class="analysis">
    <Row :gutter="gutter" style="margin-bottom: 15px">
      <Col span="6">
        <Card title="总销售额">
          <Wave />
        </Card>
      </Col>
      <Col span="6">
        <Card title="访问量" style="margin-bottom: 15px">
          <Bar :data="data"/>
        </Card>
      </Col>
      <Col span="6">
        <Card title="支付笔数" style="margin-bottom: 15px">
          <Radar />
        </Card>
      </Col>
      <Col span="6">
        <Card title="运营活动效果" style="margin-bottom: 15px">
          <Pie />
        </Card>
      </Col>
    </Row>
    <Row span="6">
      <Card title="还在意" style="margin-bottom: 15px"></Card>
    </Row>
    <Row :gutter="gutter">
      <Col span="12">
        <Card title="一个标题"></Card>
      </Col>
      <Col span="12">
        <Card title="一个标题">
          <v-chart :height="400" :data="data" :forceFit="true">
            <v-tooltip></v-tooltip>
            <v-axis></v-axis>
            <v-legend></v-legend>
            <v-bar :position="'月份*月均降雨量'" :color="'name'" :adjust="adjust"></v-bar>
          </v-chart>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import Bar from './components/Bar'
import Radar from './components/Radar'
import Pie from './components/Pie'
import Wave from './components/Wave'
const data = [
  { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
  { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
  { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
  { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
  { name: 'London', 月份: 'May.', 月均降雨量: 47   },
  { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
  { name: 'London', 月份: 'Jul.', 月均降雨量: 24   },
  { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
  { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
  { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
  { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
  { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
  { name: 'Berlin', 月份: 'May.', 月均降雨量: 52.6 },
  { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
  { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
  { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 }
];
export default {
  components: {
    Bar,
    Radar,
    Pie,
    Wave
  },
  data() {
    return {
      data,
      adjust: {
        type: 'dodge',
        marginRatio: 0.05,
      },
      gutter: 15
    };
  },
};
</script>

<style  lang="scss">
.analysis {
  margin-top: 15px;
}
</style>
