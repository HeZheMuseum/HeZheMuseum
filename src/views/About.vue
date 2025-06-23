<template>
  <div class="about-page">
    <div class="container">
      <!-- 页面标题 -->
      <div class="page-header fade-in">
        <h1>赫哲族数字博物馆</h1>
        <p class="header-subtitle">探索中国北方古老渔猎民族的文化瑰宝</p>
      </div>

      <!-- 四大主要板块 -->
      <div class="main-sections">
        <!-- 赫哲族介绍 -->
        <section class="main-section fade-in" @click="navigateToSection('introduction')">
          <div class="section-icon">🏛️</div>
          <div class="section-content">
            <h2>赫哲族介绍</h2>
            <p>深入了解赫哲族的历史渊源、民族概况、文化特色和现代发展</p>
            <div class="section-features">
              <span class="feature-tag">实地考察调研纪实</span>
              <span class="feature-tag">民族历史文化</span>
              <span class="feature-tag">现代发展状况</span>
            </div>
          </div>
          <div class="section-arrow">→</div>
        </section>

        <!-- 制作工艺 -->
        <section class="main-section fade-in" @click="navigateToSection('crafts')">
          <div class="section-icon">🎨</div>
          <div class="section-content">
            <h2>制作工艺</h2>
            <p>探索赫哲族传统手工艺的精湛技艺和制作流程</p>
            <div class="section-features">
              <span class="feature-tag">鱼皮制作工艺</span>
              <span class="feature-tag">工艺视频介绍</span>
              <span class="feature-tag">制作步骤详解</span>
            </div>
          </div>
          <div class="section-arrow">→</div>
        </section>

        <!-- 作品展示区 -->
        <section class="main-section fade-in" @click="navigateToSection('exhibitions')">
          <div class="section-icon">🖼️</div>
          <div class="section-content">
            <h2>作品展示区</h2>
            <p>欣赏赫哲族传统工艺品和现代传承创新作品</p>
            <div class="section-features">
              <span class="feature-tag">传统工艺品</span>
              <span class="feature-tag">现代创新作品</span>
              <span class="feature-tag">动态效果展示</span>
            </div>
          </div>
          <div class="section-arrow">→</div>
        </section>

        <!-- 赫哲族传统服饰 -->
        <section class="main-section fade-in" @click="navigateToSection('costumes')">
          <div class="section-icon">👘</div>
          <div class="section-content">
            <h2>赫哲族传统服饰</h2>
            <p>领略赫哲族绚丽多彩的传统服饰文化和穿着艺术</p>
            <div class="section-features">
              <span class="feature-tag">传统服饰介绍</span>
              <span class="feature-tag">服饰图片展示</span>
              <span class="feature-tag">文化内涵解读</span>
            </div>
          </div>
          <div class="section-arrow">→</div>
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
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
  color: white;
}

.page-header h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.header-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
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
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 25px;
  position: relative;
  overflow: hidden;
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
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  background: rgba(255, 255, 255, 1);
}

.section-icon {
  font-size: 4rem;
  min-width: 80px;
  text-align: center;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
}

.section-content {
  flex: 1;
}

.section-content h2 {
  color: var(--primary-color);
  font-size: 2rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.section-content p {
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
}

.section-arrow {
  font-size: 2rem;
  color: var(--primary-color);
  font-weight: bold;
  transition: transform 0.3s ease;
}

.main-section:hover .section-arrow {
  transform: translateX(10px);
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
  .page-header h1 {
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
  
  .section-content h2 {
    font-size: 1.6rem;
  }
  
  .section-content p {
    font-size: 1rem;
  }
  
  .feature-tag {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .main-section {
    padding: 25px;
  }
  
  .section-icon {
    font-size: 2.5rem;
  }
  
  .section-content h2 {
    font-size: 1.4rem;
  }
  
  .section-features {
    justify-content: center;
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