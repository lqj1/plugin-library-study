<!--
  热销商品占比图(饼图)
-->
<template>
  <div class="com-container">
    <div class="com-chart" ref="hot_ref"></div>
    <span class="iconfont arr-left" @click="toLeft">&#xe6ef;</span>
    <span class="iconfont arr-right" @click="toRight">&#xe6ed;</span>
    <span class="cat-name">{{catName}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartInstance: null,
      allData: null, // 服务器返回的所有数据
      currentIndex: 0, // 当前所展示出的一级分类数据
    }
  },
  computed: {
    catName () {
      if (!this.allData) {
        return ''
      } else {
        return this.allData[this.currentIndex].name
      }
    }
  },
  mounted () {
    this.initChart()
    this.getData()
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed () {
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods: {
    // 初始化 echartInstance 实例对象
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.hot_ref)
      const initOption = {
        series: [
          {
            type: 'pie'
          }
        ]
      }
      this.chartInstance.setOption(initOption)
    },
    // 获取服务器的数据
    async getData () {
      const { data: ret } = await this.$http.get('hotproduct')
      console.log('ret', ret);
      this.allData = ret
      this.updateChart()
    },
    // 更新图表
    updateChart () {
      // 处理图表需要的数据
      const legendData = this.allData[this.currentIndex].children.map(item => {
        return item.name
      })
      const seriesData = this.allData[this.currentIndex].children.map(item => {
        return {
          name: item.name,
          value: item.value
        }
      })
      console.log('ser', seriesData);
      const dataOption = {
        legend: {
          data: legendData
        },
        series: [
          {
            data: seriesData
          }
        ]
      }
      this.chartInstance.setOption(dataOption)
    },
    // 屏幕适配
    screenAdapter () {
      const adapterOption = {}
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    },
    toLeft () {
      this.currentIndex--
      if (this.currentIndex < 0) {
        this.currentIndex = this.allData.length - 1
      }
      this.updateChart()
    },
    toRight () {
      this.currentIndex++
      if (this.currentIndex > this.allData.length - 1) {
        this.currentIndex = 0
      }
      this.updateChart()
    }
  }
}
</script>

<style lang="less" scoped>
.arr-left {
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
}
.arr-right {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
}
.cat-name {
  position: absolute;
  left: 80%;
  bottom: 20px;
}
</style>