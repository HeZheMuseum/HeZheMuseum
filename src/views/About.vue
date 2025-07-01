<template>
  <div class="about-page">
    <div class="container">
      <!-- 页面标题 -->
      <div class="page-header fade-in">
        <div class="header-decoration"></div>
        <h1 class="page-title">抚远市非物质文化遗产数字博物馆</h1>
        <p class="header-subtitle">首期将聚焦国家级非物质文化遗产代表性项目——赫哲族鱼皮制作技艺</p>
        <div class="header-ornament">
          <span class="ornament-line"></span>
          <span class="ornament-center">❋</span>
          <span class="ornament-line"></span>
        </div>
      </div>

      <!-- 四大主要板块 -->
      <div class="main-sections">
        <!-- 赫哲族介绍 -->
        <section class="main-section fade-in" @click="navigateToSection('introduction')">
          <div class="section-background"></div>
          <div class="section-icon">
            <span class="icon-symbol"></span>
            <div class="icon-glow"></div>
          </div>
          <div class="section-content">
            <h2 class="section-title">赫哲族介绍</h2>
            <p class="section-description">深入了解赫哲族的历史渊源、民族概况、文化特色和现代发展</p>
            <div class="section-features">
              <span class="feature-tag">实地考察调研纪实</span>
              <span class="feature-tag">民族历史文化</span>
              <span class="feature-tag">现代发展状况</span>
            </div>
          </div>
          <div class="section-arrow">
            <span class="arrow-text">探索</span>
            <span class="arrow-icon">→</span>
          </div>
        </section>

        <!-- 制作工艺 -->
        <section class="main-section fade-in" @click="navigateToSection('crafts')">
          <div class="section-background"></div>
          <div class="section-icon">
            <span class="icon-symbol"></span>
            <div class="icon-glow"></div>
          </div>
          <div class="section-content">
            <h2 class="section-title">制作工艺</h2>
            <p class="section-description">探索赫哲族传统手工艺的精湛技艺和制作流程</p>
            <div class="section-features">
              <span class="feature-tag">鱼皮制作工艺</span>
              <span class="feature-tag">工艺视频介绍</span>
              <span class="feature-tag">制作步骤详解</span>
            </div>
          </div>
          <div class="section-arrow">
            <span class="arrow-text">探索</span>
            <span class="arrow-icon">→</span>
          </div>
        </section>

        <!-- 作品展示区 -->
        <section class="main-section fade-in" @click="navigateToSection('exhibitions')">
          <div class="section-background"></div>
          <div class="section-icon">
            <span class="icon-symbol"></span>
            <div class="icon-glow"></div>
          </div>
          <div class="section-content">
            <h2 class="section-title">作品展示区</h2>
            <p class="section-description">欣赏赫哲族传统工艺品和现代传承创新作品</p>
            <div class="section-features">
              <span class="feature-tag">传统工艺品</span>
              <span class="feature-tag">现代创新作品</span>
              <span class="feature-tag">动态效果展示</span>
            </div>
          </div>
          <div class="section-arrow">
            <span class="arrow-text">探索</span>
            <span class="arrow-icon">→</span>
          </div>
        </section>

        <!-- 赫哲族传统服饰 -->
        <section class="main-section fade-in" @click="navigateToSection('costumes')">
          <div class="section-background"></div>
          <div class="section-icon">
            <span class="icon-symbol"></span>
            <div class="icon-glow"></div>
          </div>
          <div class="section-content">
            <h2 class="section-title">赫哲族传统服饰</h2>
            <p class="section-description">领略赫哲族绚丽多彩的传统服饰文化和穿着艺术</p>
            <div class="section-features">
              <span class="feature-tag">传统服饰介绍</span>
              <span class="feature-tag">服饰图片展示</span>
              <span class="feature-tag">文化内涵解读</span>
            </div>
          </div>
          <div class="section-arrow">
            <span class="arrow-text">探索</span>
            <span class="arrow-icon">→</span>
          </div>
        </section>
      </div>

      <!-- 导航提示 -->
      <div class="navigation-hint fade-in">
        <p>点击任意板块进入详细介绍页面，探索更多精彩内容</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'About',
  setup() {
    const router = useRouter()

    // 导航到不同的详细页面
    const navigateToSection = (section) => {
      const routeMap = {
         'introduction': '/introduction',
         'crafts': '/crafts', 
         'exhibitions': '/exhibition',
         'costumes': '/costumes'
       }
      
      if (routeMap[section]) {
        router.push(routeMap[section])
      } else {
        alert(`页面 ${section} 暂未开发`)
      }
    }

    return {
      navigateToSection
    }
  }
}
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  padding: 20px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.about-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>') repeat;
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
  color: white;
  position: relative;
}

.header-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  opacity: 0.8;
}

.page-title {
  font-size: 3.5rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  background: linear-gradient(45deg, #ffffff, #f0f8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.header-ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  opacity: 0.7;
}

.ornament-line {
  width: 80px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
}

.ornament-center {
  margin: 0 20px;
  font-size: 1.2rem;
  color: var(--color-accent, #ffd700);
}

.main-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.main-section {
  background: rgba(255, 255, 255, 0.95);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  backdrop-filter: blur(15px);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 25px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.section-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.15));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.main-section:hover .section-background {
  opacity: 1;
}

.main-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: left 0.5s ease;
}

.main-section:hover::before {
  left: 100%;
}

.main-section:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15), 0 0 20px rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 1);
  border-color: rgba(255, 255, 255, 0.4);
}

.section-icon {
  font-size: 4rem;
  min-width: 80px;
  text-align: center;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-symbol {
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.icon-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, rgba(255,255,255,0.2), transparent);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.main-section:hover .icon-glow {
  opacity: 1;
}

.main-section:hover .icon-symbol {
  transform: scale(1.1) rotate(5deg);
}

.section-content {
  flex: 1;
}

.section-title {
  color: var(--primary-color);
  font-size: 2rem;
  margin-bottom: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.section-description {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.section-features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.feature-tag {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.main-section:hover .feature-tag {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.section-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.arrow-text {
  font-size: 0.8rem;
  opacity: 0.7;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: var(--primary-color);
}

.arrow-icon {
  font-size: 2rem;
  color: var(--primary-color);
  font-weight: bold;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.main-section:hover .section-arrow {
  transform: translateX(10px);
}

.main-section:hover .arrow-text {
  opacity: 1;
}

.main-section:hover .arrow-icon {
  opacity: 1;
  transform: scale(1.2);
}

.navigation-hint {
  text-align: center;
  color: white;
  font-size: 1.1rem;
  opacity: 0.9;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

.fade-in {
  animation: fadeIn 0.8s ease-out;
}

.fade-in:nth-child(1) { animation-delay: 0.1s; }
.fade-in:nth-child(2) { animation-delay: 0.2s; }
.fade-in:nth-child(3) { animation-delay: 0.3s; }
.fade-in:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .header-subtitle {
    font-size: 1.1rem;
  }
  
  .main-sections {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .main-section {
    padding: 30px;
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  
  .section-icon {
    font-size: 3rem;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .section-description {
    font-size: 1rem;
  }
  
  .feature-tag {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
  
  .section-arrow {
    flex-direction: row;
    gap: 8px;
  }
  
  .ornament-line {
    width: 60px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .main-section {
    padding: 25px;
  }
  
  .section-icon {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 1.4rem;
  }
  
  .section-features {
    justify-content: center;
  }
  
  .ornament-line {
    width: 40px;
  }
}

@media (max-width: 320px) {
  .main-sections {
    gap: 15px;
  }
  
  .main-section {
    padding: 20px;
  }
  
  .feature-tag {
    font-size: 0.75rem;
    padding: 4px 8px;
  }
}
</style>