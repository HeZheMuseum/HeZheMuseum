<template>
  <div class="home">
    <!-- 全屏图片显示 -->
    <div class="fullscreen-image-container">
      <img 
        :src="isMobile ? './Assets/2.png' : './Assets/1.png'" 
        :alt="isMobile ? '移动端首页图片' : '桌面端首页图片'"
        class="fullscreen-image"
        @load="onImageLoad"
      />
      
      <!-- 图片加载遮罩 -->
      <div v-if="!imageLoaded" class="image-loading">
        <div class="loading-spinner"></div>
        <p>正在加载精美图片...</p>
      </div>
      
      <!-- 图片覆盖层内容 -->
      <div class="image-overlay" :class="{ 'visible': imageLoaded }">
        <div class="overlay-content fade-in-up">
          <h1 class="welcome-title">欢迎来到抚远市非物质文化遗产数字博物馆</h1>
          <p class="welcome-subtitle">首期将聚焦国家级非物质文化遗产代表性项目——赫哲族鱼皮制作技艺</p>
          <div class="welcome-actions">
            <router-link to="/about" class="btn btn-primary">
              开始探索
            </router-link>
            <router-link to="/map" class="btn btn-outline">
              文化地图
            </router-link>
          </div>
        </div>
        
        <!-- 滚动提示 -->
        <div class="scroll-hint">
          <span>向下滚动探索更多</span>
          <div class="scroll-arrow">↓</div>
        </div>
      </div>
    </div>
    
    <!-- 快速导航区域 -->
    <section class="quick-nav-section">
      <div class="container">
        <h2 class="section-title text-center">快速导航</h2>
        <div class="quick-nav-list">
          <router-link to="/introduction" class="quick-nav-item">
            <div class="nav-content">
              <div class="nav-icon"></div>
              <div class="nav-info">
                <h3>赫哲族介绍</h3>
                <p>了解赫哲族的历史文化</p>
              </div>
            </div>
            <div class="nav-arrow">→</div>
          </router-link>
          
          <router-link to="/crafts" class="quick-nav-item">
            <div class="nav-content">
              <div class="nav-icon"></div>
              <div class="nav-info">
                <h3>制作工艺</h3>
                <p>探索传统手工艺技术</p>
              </div>
            </div>
            <div class="nav-arrow">→</div>
          </router-link>
          
          <router-link to="/exhibition" class="quick-nav-item">
            <div class="nav-content">
              <div class="nav-icon"></div>
              <div class="nav-info">
                <h3>作品展示</h3>
                <p>欣赏精美的传统作品</p>
              </div>
            </div>
            <div class="nav-arrow">→</div>
          </router-link>
          
          <router-link to="/costumes" class="quick-nav-item">
            <div class="nav-content">
              <div class="nav-icon"></div>
              <div class="nav-info">
                <h3>传统服饰</h3>
                <p>领略绚丽的服饰文化</p>
              </div>
            </div>
            <div class="nav-arrow">→</div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Home',
  setup() {
    const isMobile = ref(false)
    const imageLoaded = ref(false)
    
    const checkMobile = () => {
      isMobile.value = window.innerWidth <= 768
    }
    
    const onImageLoad = () => {
      setTimeout(() => {
        imageLoaded.value = true
      }, 500) // 添加一点延迟以显示加载效果
    }
    
    onMounted(() => {
      checkMobile()
      window.addEventListener('resize', checkMobile)
    })
    
    onUnmounted(() => {
      window.removeEventListener('resize', checkMobile)
    })
    
    return {
      isMobile,
      imageLoaded,
      onImageLoad
    }
  }
}
</script>

<style scoped>
.home {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100vw;
  box-sizing: border-box;
}

.fullscreen-image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

.fullscreen-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform var(--transition-slow);
}

.fullscreen-image:hover {
  transform: scale(1.02);
}

/* 图片加载状态 */
.image-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-gradient);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid var(--border-light);
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: var(--spacing-lg);
}

.image-loading p {
  color: var(--text-color);
  font-size: var(--font-size-lg);
  margin: 0;
}

/* 图片覆盖层 - 增强对比度 */
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity var(--transition-slow);
  z-index: 1;
}

.image-overlay.visible {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: white;
  max-width: 800px;
  padding: var(--spacing-xl);
}

.welcome-title {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.9), 1px 1px 3px rgba(0, 0, 0, 0.8);
  letter-spacing: 2px;
  color: #FFFFFF;
}

.welcome-subtitle {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-xxl);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), 1px 1px 2px rgba(0, 0, 0, 0.8);
  opacity: 1;
  color: #F5F5F5;
  font-weight: 500;
}

.welcome-actions {
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  flex-wrap: wrap;
}

.welcome-actions .btn {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-size-lg);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
}

/* 滚动提示 - 增强可见性 */
.scroll-hint {
  position: absolute;
  bottom: var(--spacing-xl);
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #FFFFFF;
  animation: bounce 2s infinite;
  background: rgba(0, 0, 0, 0.4);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
  backdrop-filter: blur(5px);
}

.scroll-hint span {
  display: block;
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-xs);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  font-weight: 500;
}

.scroll-arrow {
  font-size: var(--font-size-xl);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-10px) translateX(-50%);
  }
  60% {
    transform: translateY(-5px) translateX(-50%);
  }
}

/* 快速导航区域 */
.quick-nav-section {
  padding: var(--spacing-xxl) 0;
  background: var(--panel-bg);
}

.section-title {
  font-size: var(--font-size-3xl);
  color: var(--primary-color);
  margin-bottom: var(--spacing-xxl);
  font-weight: 600;
}

.quick-nav-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
}

.quick-nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: var(--text-color);
  background: var(--panel-bg);
  border-radius: var(--border-radius-small);
  padding: var(--spacing-lg);
  border-left: 4px solid var(--primary-color);
  transition: all var(--transition-normal);
  box-shadow: 0 2px 8px var(--shadow-light);
}

.quick-nav-item:hover {
  transform: translateX(8px);
  border-left-color: var(--secondary-color);
  background: var(--card-bg);
  box-shadow: 0 4px 16px var(--shadow-color);
}

.nav-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  flex: 1;
}

.nav-icon {
  font-size: var(--font-size-3xl);
  flex-shrink: 0;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
}

.nav-info {
  flex: 1;
}

.nav-info h3 {
  font-size: var(--font-size-xl);
  color: var(--primary-color);
  margin: 0 0 var(--spacing-xs) 0;
  font-weight: 600;
}

.nav-info p {
  color: var(--text-light);
  margin: 0;
  font-size: var(--font-size-sm);
  line-height: 1.4;
}

.nav-arrow {
  font-size: var(--font-size-xl);
  color: var(--accent-color);
  transition: transform var(--transition-normal);
  flex-shrink: 0;
}

.quick-nav-item:hover .nav-arrow {
  transform: translateX(4px);
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .welcome-title {
    font-size: var(--font-size-3xl);
  }
  
  .welcome-subtitle {
    font-size: var(--font-size-lg);
  }
  
  .welcome-actions {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-md);
  }
  
  .welcome-actions .btn {
    padding: var(--spacing-sm) var(--spacing-lg);
    font-size: var(--font-size-base);
    width: 200px;
  }
  
  .quick-nav-list {
    gap: var(--spacing-sm);
  }
  
  .quick-nav-item {
    padding: var(--spacing-md);
  }
  
  .nav-content {
    gap: var(--spacing-md);
  }
  
  .nav-icon {
    font-size: var(--font-size-2xl);
  }
  
  .nav-info h3 {
    font-size: var(--font-size-lg);
  }
  
  .nav-info p {
    font-size: var(--font-size-xs);
  }
}

@media (max-width: 480px) {
  .overlay-content {
    padding: var(--spacing-lg);
  }
  
  .welcome-title {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-md);
  }
  
  .welcome-subtitle {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-lg);
  }
  
  .welcome-actions .btn {
    padding: var(--spacing-xs) var(--spacing-md);
    font-size: var(--font-size-sm);
    width: 150px;
  }
  
  .scroll-hint {
    bottom: var(--spacing-lg);
  }
  
  .scroll-hint span {
    font-size: var(--font-size-xs);
  }
  
  .quick-nav-section {
    padding: var(--spacing-xl) 0;
  }
  
  .section-title {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-lg);
  }
  
  .quick-nav-list {
    gap: var(--spacing-xs);
  }
  
  .quick-nav-item {
    padding: var(--spacing-sm);
    flex-direction: column;
    text-align: center;
  }
  
  .nav-content {
    flex-direction: column;
    gap: var(--spacing-sm);
    text-align: center;
  }
  
  .nav-icon {
    font-size: var(--font-size-xl);
  }
  
  .nav-info h3 {
    font-size: var(--font-size-base);
  }
  
  .nav-info p {
    font-size: var(--font-size-xs);
  }
  
  .nav-arrow {
    margin-top: var(--spacing-xs);
  }
  
  .quick-nav-item:hover {
    transform: translateY(-2px);
  }
}

@media (max-width: 320px) {
  .welcome-title {
    font-size: var(--font-size-xl);
    letter-spacing: 1px;
  }
  
  .welcome-subtitle {
    font-size: var(--font-size-sm);
  }
  
  .welcome-actions .btn {
    width: 120px;
    font-size: var(--font-size-xs);
  }
  
  .quick-nav-item .nav-icon {
    font-size: 1.5rem;
  }
  
  .quick-nav-item h3 {
    font-size: var(--font-size-base);
  }
  
  .quick-nav-item p {
    font-size: var(--font-size-sm);
  }
}
</style>
