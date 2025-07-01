<template>
  <div class="map-page">
    <div class="page-background"></div>
    <div class="container">
      <!-- 页面标题区域 -->
      <div class="page-header fade-in">
        <div class="header-decoration">
          <div class="decoration-line"></div>
          <span class="decoration-icon"></span>
          <div class="decoration-line"></div>
        </div>
        <h1 class="page-title">赫哲族数字博物馆</h1>
        <p class="page-subtitle">探索千年文化，传承民族智慧</p>
      </div>

      <!-- 博物馆简介 -->
      <div class="museum-intro fade-in">
        <div class="intro-header">
          <div class="intro-icon"></div>
          <h2 class="intro-title">博物馆简介</h2>
        </div>
        <div class="intro-content">
          <div class="intro-highlight">
            <span class="highlight-icon"></span>
            <span class="highlight-text">三江流域的古老民族</span>
          </div>
          <p class="intro-description">赫哲族是中国北方古老的渔猎民族，主要分布在黑龙江、松花江、乌苏里江流域。本数字博物馆致力于保护和传承赫哲族珍贵的文化遗产，通过现代科技手段展现这个民族独特的历史文化、传统工艺、服饰艺术和生活方式。</p>
          <p class="intro-description">在这里，您可以深入了解赫哲族的历史变迁、精湛的鱼皮制作工艺、绚丽多彩的传统服饰，以及丰富的文化作品。让我们一同走进这个充满智慧与美丽的民族世界。</p>
          <div class="intro-stats">
            <div class="stat-item">
              <div class="stat-number">4</div>
              <div class="stat-label">主要展区</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">千年</div>
              <div class="stat-label">文化传承</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">数字化</div>
              <div class="stat-label">展示方式</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 地图容器 -->
      <div class="map-container fade-in">
        <div class="map-header">
          <h2 class="map-title">
            <span class="title-icon"></span>
            文化展览导览图
            <span class="title-decoration"></span>
          </h2>
          <p class="map-subtitle">点击地图上的展区进入详细介绍</p>
        </div>
        <div class="map-wrapper">
          <div id="map" ref="mapContainer"></div>
          <div class="map-overlay" v-if="isMapLoading">
            <div class="loading-spinner"></div>
            <p class="loading-text">正在加载地图...</p>
          </div>
        </div>
        <div class="map-legend">
          <h3 class="legend-title">展区导览</h3>
          <div class="legend-items">
            <div class="legend-item" @click="navigateToSection('introduction')">
              <div class="legend-color" style="background: #ff6b6b;"></div>
              <span class="legend-text">赫哲族历史文化展区</span>
              <span class="legend-arrow">→</span>
            </div>
            <div class="legend-item" @click="navigateToSection('crafts')">
              <div class="legend-color" style="background: #4ecdc4;"></div>
              <span class="legend-text">传统制作工艺展区</span>
              <span class="legend-arrow">→</span>
            </div>
            <div class="legend-item" @click="navigateToSection('exhibition')">
              <div class="legend-color" style="background: #45b7d1;"></div>
              <span class="legend-text">文化作品展示区</span>
              <span class="legend-arrow">→</span>
            </div>
            <div class="legend-item" @click="navigateToSection('costumes')">
              <div class="legend-color" style="background: #f9ca24;"></div>
              <span class="legend-text">传统服饰展区</span>
              <span class="legend-arrow">→</span>
            </div>
          </div>
        </div>
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
    const isMapLoading = ref(true)
    let map = null
    
    const navigateToSection = (section) => {
      const routes = {
        'introduction': '/introduction',
        'crafts': '/crafts',
        'exhibition': '/exhibition',
        'costumes': '/costumes'
      }
      if (routes[section]) {
        router.push(routes[section])
      }
    }
    
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
      
      // 地图加载完成后隐藏加载状态
      setTimeout(() => {
        isMapLoading.value = false
      }, 1500)
    }
    
    onMounted(() => {
      initMap()
    })
    
    return {
      mapContainer,
      isMapLoading,
      navigateToSection
    }
  }
}
</script>

<style scoped>
.map-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow-x: hidden;
}

.page-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>') repeat;
  pointer-events: none;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--spacing-xl) var(--spacing-lg);
  position: relative;
  z-index: 1;
}

/* 页面标题区域 */
.page-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
  color: white;
  opacity: 0;
  transform: translateY(30px);
}

.header-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-lg);
  opacity: 0.8;
}

.decoration-line {
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
}

.decoration-icon {
  margin: 0 var(--spacing-md);
  font-size: 2rem;
  filter: drop-shadow(0 0 10px rgba(255,255,255,0.5));
}

.page-title {
  font-size: 3.5rem;
  margin-bottom: var(--spacing-sm);
  background: linear-gradient(45deg, #ffffff, #f0f8ff, #e6f3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  font-weight: 700;
  letter-spacing: 1px;
}

.page-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  font-weight: 300;
  letter-spacing: 2px;
}

/* 博物馆简介 */
.museum-intro {
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--border-radius-large);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
}



.intro-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-lg);
  gap: var(--spacing-md);
}

.intro-icon {
  font-size: 2.5rem;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
}

.intro-title {
  color: var(--primary-color);
  font-size: 2.2rem;
  margin: 0;
  font-weight: 600;
  letter-spacing: 1px;
}

.intro-content {
  text-align: center;
}

.intro-highlight {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius-large);
  margin-bottom: var(--spacing-lg);
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.highlight-icon {
  font-size: 1.2rem;
}

.intro-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: var(--spacing-lg);
  text-align: justify;
  text-indent: 2em;
}

.intro-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.stat-item {
  text-align: center;
  padding: var(--spacing-lg);
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border-radius: var(--border-radius);
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 500;
  letter-spacing: 1px;
}

/* 地图容器 */
.map-container {
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--border-radius-large);
  padding: var(--spacing-xl);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
}



.map-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.map-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  color: var(--primary-color);
  font-size: 2.2rem;
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
  letter-spacing: 1px;
}

.title-icon {
  font-size: 2rem;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
}

.title-decoration {
  font-size: 1.5rem;
  animation: sparkle 2s ease-in-out infinite;
}

.map-subtitle {
  color: var(--text-muted);
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.8;
}

.map-wrapper {
  position: relative;
  margin-bottom: var(--spacing-xl);
}

#map {
  height: 700px;
  width: 100%;
  border-radius: var(--border-radius);
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.1), 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(102, 126, 234, 0.2);
  overflow: hidden;
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  backdrop-filter: blur(10px);
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(102, 126, 234, 0.2);
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: var(--spacing-md);
}

.loading-text {
  color: var(--primary-color);
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
}

/* 地图图例 */
.map-legend {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.legend-title {
  color: var(--primary-color);
  font-size: 1.3rem;
  margin-bottom: var(--spacing-md);
  text-align: center;
  font-weight: 600;
}

.legend-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.7);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.legend-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.legend-text {
  flex: 1;
  font-size: 0.95rem;
  color: var(--text-color);
  font-weight: 500;
}

.legend-arrow {
  color: var(--primary-color);
  font-weight: bold;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.legend-item:hover .legend-arrow {
  opacity: 1;
  transform: translateX(3px);
}

/* 动画 */
.fade-in {
  animation: fadeInUp 0.8s ease-out both;
}

.fade-in:nth-child(1) { animation-delay: 0.1s; }
.fade-in:nth-child(2) { animation-delay: 0.3s; }
.fade-in:nth-child(3) { animation-delay: 0.5s; }

@keyframes sparkle {
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
  50% { transform: scale(1.2) rotate(180deg); opacity: 0.8; }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .container {
    padding: var(--spacing-lg) var(--spacing-md);
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .page-subtitle {
    font-size: 1.1rem;
  }
  
  .intro-stats {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  #map {
    height: 500px;
  }
  
  .legend-items {
    grid-template-columns: 1fr;
  }
  
  .decoration-line {
    width: 60px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: var(--spacing-md) var(--spacing-sm);
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .intro-title {
    font-size: 1.8rem;
  }
  
  .map-title {
    font-size: 1.8rem;
    flex-direction: column;
    gap: var(--spacing-sm);
  }
  
  .intro-description {
    font-size: 1rem;
    text-indent: 1em;
  }
  
  #map {
    height: 400px;
  }
  
  .decoration-line {
    width: 40px;
  }
}
</style>