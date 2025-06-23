<template>
  <div class="map-page">
    <div class="container">
      <div class="museum-intro fade-in">
        <h2>博物馆简介</h2>
        <p>赫哲族是中国北方古老的渔猎民族，主要分布在黑龙江、松花江、乌苏里江流域。本数字博物馆致力于保护和传承赫哲族珍贵的文化遗产，通过现代科技手段展现这个民族独特的历史文化、传统工艺、服饰艺术和生活方式。</p>
        <p>在这里，您可以深入了解赫哲族的历史变迁、精湛的鱼皮制作工艺、绚丽多彩的传统服饰，以及丰富的文化作品。让我们一同走进这个充满智慧与美丽的民族世界。</p>
      </div>
      
      <div class="map-container fade-in">
        <h2 class="map-title">文化展览导览图</h2>
        <div id="map" ref="mapContainer"></div>
      </div>
      

    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import L from 'leaflet'

export default {
  name: 'Map',
  setup() {
    const mapContainer = ref(null)
    const router = useRouter()
    let map = null
    
    const initMap = () => {
      // 图片尺寸
      const imageWidth = 1367
      const imageHeight = 606
      
      // 创建简单坐标系的CRS
      const SimpleCRS = L.extend({}, L.CRS.Simple, {
        transformation: new L.Transformation(1, 0, 1, 0)
      })
      
      // 初始化地图
      map = L.map(mapContainer.value, {
        crs: SimpleCRS,
        minZoom: -2,
        maxZoom: 3,
        zoomControl: true,
        attributionControl: false
      })
      
      // 计算图片边界
      const bounds = [[0, 0], [imageHeight, imageWidth]]
      
      // 添加图片图层
      const imageOverlay = L.imageOverlay('./Assets/map/layer1.png', bounds, {
        opacity: 1.0,
        interactive: false
      }).addTo(map)
      
      // 设置地图视图到图片范围
      map.fitBounds(bounds)
      

      

      
      // 赫哲族历史展区
      const hezheHistoryBounds = [[184, 163], [301, 413]]
      const hezheRectangle = L.rectangle(hezheHistoryBounds, {
        color: 'transparent',
        weight: 0,
        fillColor: 'transparent',
        fillOpacity: 0,
        interactive: true
      }).addTo(map)
      
      hezheRectangle.on('click', () => {
        router.push('/introduction')
      })
      
      hezheRectangle.bindTooltip('赫哲族历史文化展区 - 点击进入详细介绍', {
        permanent: false,
        direction: 'top'
      })
      
      // 制作工艺展区
      const craftBounds = [[435, 154], [566, 407]]
      const craftRectangle = L.rectangle(craftBounds, {
        color: 'transparent',
        weight: 0,
        fillColor: 'transparent',
        fillOpacity: 0,
        interactive: true
      }).addTo(map)
      
      craftRectangle.on('click', () => {
        router.push('/crafts')
      })
      
      craftRectangle.bindTooltip('传统制作工艺展区 - 点击进入详细介绍', {
        permanent: false,
        direction: 'top'
      })
      
      // 作品展示区
      const exhibitionBounds = [[188, 925], [297, 1184]]
      const exhibitionRectangle = L.rectangle(exhibitionBounds, {
        color: 'transparent',
        weight: 0,
        fillColor: 'transparent',
        fillOpacity: 0,
        interactive: true
      }).addTo(map)
      
      exhibitionRectangle.on('click', () => {
        router.push('/exhibition')
      })
      
      exhibitionRectangle.bindTooltip('文化作品展示区 - 点击进入详细介绍', {
        permanent: false,
        direction: 'top'
      })
      
      // 传统服饰展区
      const costumeBounds = [[433, 931], [564, 1185]]
      const costumeRectangle = L.rectangle(costumeBounds, {
        color: 'transparent',
        weight: 0,
        fillColor: 'transparent',
        fillOpacity: 0,
        interactive: true
      }).addTo(map)
      
      costumeRectangle.on('click', () => {
        router.push('/costumes')
      })
      
      costumeRectangle.bindTooltip('传统服饰展区 - 点击进入详细介绍', {
        permanent: false,
        direction: 'top'
      })
      
      // 添加比例尺控件
      L.control.scale({
        position: 'bottomright',
        metric: false,
        imperial: false
      }).addTo(map)
      
      console.log('赫哲族数字博物馆地图初始化完成')
    }
    
    onMounted(() => {
      initMap()
    })
    
    return {
      mapContainer
    }
  }
}
</script>

<style scoped>
.map-page {
  min-height: calc(100vh - 200px);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px 20px;
}

.museum-intro {
  background: var(--panel-bg);
  border: 2px solid var(--border-color);
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 8px 20px var(--shadow-color);
  position: relative;
}

.museum-intro::before {
  content: '◆';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--panel-bg);
  color: var(--primary-color);
  font-size: 20px;
  padding: 0 10px;
}

.museum-intro h2 {
  color: var(--primary-color);
  text-align: center;
  margin-top: 0;
  font-size: 1.8em;
  border-bottom: 2px solid var(--accent-color);
  padding-bottom: 10px;
}

.museum-intro p {
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 15px;
  text-indent: 2em;
}

.map-container {
  background: var(--panel-bg);
  border: 3px solid var(--border-color);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 12px 30px var(--shadow-color);
  position: relative;
  margin-bottom: 30px;
}



.map-title {
  text-align: center;
  color: var(--primary-color);
  font-size: 1.6em;
  margin-bottom: 20px;
  font-weight: 600;
}

#map {
  height: 700px;
  width: 100%;
  border: 2px solid var(--border-color);
  border-radius: 12px;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.1);
}



@media (max-width: 768px) {
  .container {
    padding: 20px 15px;
  }
  
  #map {
    height: 500px;
  }
}
</style>