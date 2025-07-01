<template>
  <div id="app">
    <header class="header">

      
      <!-- 导航栏 -->
      <nav class="navigation">
        <router-link to="/" class="nav-link">
          <span class="nav-icon"></span>
          <span class="nav-text">首页</span>
        </router-link>
        <router-link to="/map" class="nav-link">
          <span class="nav-icon"></span>
          <span class="nav-text">文化地图</span>
        </router-link>
        <router-link to="/about" class="nav-link">
          <span class="nav-icon"></span>
          <span class="nav-text">详细介绍</span>
        </router-link>
      </nav>
    </header>
    
    <main class="main-content">
      <router-view />
    </main>
    
    <!-- 返回顶部按钮 -->
    <button 
      v-show="showBackToTop" 
      @click="scrollToTop" 
      class="back-to-top"
      title="返回顶部"
    >
      ↑
    </button>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'App',
  setup() {
    const showBackToTop = ref(false)
    
    const handleScroll = () => {
      showBackToTop.value = window.scrollY > 300
    }
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    
    return {
      showBackToTop,
      scrollToTop
    }
  }
}
</script>

<style scoped>
.header {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 50%, var(--accent-color) 100%);
    color: #FFF;
    padding: var(--spacing-lg) 0;
    text-align: center;
    box-shadow: 0 8px 32px var(--shadow-heavy);
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
}

.header::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 15px,
        rgba(255, 255, 255, 0.03) 15px,
        rgba(255, 255, 255, 0.03) 30px
    );
    animation: float 25s linear infinite;
}

.brand {
    position: relative;
    z-index: 2;
    margin-bottom: var(--spacing-lg);
}

.brand-title {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    letter-spacing: 2px;
    background: linear-gradient(45deg, #fff, #f0f0f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.brand-subtitle {
    font-size: var(--font-size-sm);
    margin: var(--spacing-xs) 0 0 0;
    opacity: 0.9;
    font-weight: 300;
    letter-spacing: 1px;
}

.navigation {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    gap: var(--spacing-md);
    flex-wrap: wrap;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    padding: var(--spacing-sm) var(--spacing-lg);
    color: #FFF;
    text-decoration: none;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--border-radius-large);
    transition: all var(--transition-normal);
    font-weight: 500;
    font-size: var(--font-size-sm);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    position: relative;
    overflow: hidden;
}

.nav-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left var(--transition-slow);
}

.nav-link:hover::before {
    left: 100%;
}

.nav-link:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.nav-link.router-link-active {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.nav-icon {
    font-size: var(--font-size-lg);
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
}

.nav-text {
    font-weight: 600;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.main-content {
    min-height: calc(100vh - 200px);
    position: relative;
}

.back-to-top {
    position: fixed;
    bottom: var(--spacing-xl);
    right: var(--spacing-xl);
    width: 50px;
    height: 50px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: var(--font-size-xl);
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 15px var(--shadow-color);
    transition: all var(--transition-normal);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.back-to-top:hover {
    background: var(--secondary-color);
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 8px 25px var(--shadow-heavy);
}

@media (max-width: 768px) {
    .header {
        padding: var(--spacing-md) 0;
    }
    
    .brand-title {
        font-size: var(--font-size-2xl);
    }
    
    .brand-subtitle {
        font-size: var(--font-size-xs);
    }
    
    .navigation {
        gap: var(--spacing-sm);
    }
    
    .nav-link {
        padding: var(--spacing-xs) var(--spacing-md);
        font-size: var(--font-size-xs);
    }
    
    .nav-icon {
        font-size: var(--font-size-base);
    }
    
    .back-to-top {
        width: 40px;
        height: 40px;
        bottom: var(--spacing-lg);
        right: var(--spacing-lg);
        font-size: var(--font-size-lg);
    }
}

@media (max-width: 480px) {
    .header {
        padding: var(--spacing-sm) 0;
    }
    
    .brand-title {
        font-size: var(--font-size-xl);
    }
    
    .brand-subtitle {
        font-size: var(--font-size-xs);
        margin-top: var(--spacing-xs);
    }
    
    .navigation {
        gap: var(--spacing-xs);
        padding: 0 var(--spacing-sm);
    }
    
    .nav-link {
        padding: var(--spacing-xs) var(--spacing-sm);
        border-width: 1px;
        font-size: var(--font-size-xs);
    }
    
    .nav-icon {
        font-size: var(--font-size-sm);
    }
    
    .nav-text {
        font-size: var(--font-size-xs);
    }
    
    .back-to-top {
        width: 35px;
        height: 35px;
        bottom: var(--spacing-md);
        right: var(--spacing-md);
        font-size: var(--font-size-base);
    }
}

@media (max-width: 320px) {
    .brand-title {
        font-size: var(--font-size-lg);
    }
    
    .brand-subtitle {
        font-size: calc(var(--font-size-xs) * 0.9);
    }
    
    .nav-link {
        padding: calc(var(--spacing-xs) * 0.8) var(--spacing-xs);
        font-size: calc(var(--font-size-xs) * 0.9);
    }
    
    .nav-icon {
        font-size: var(--font-size-xs);
    }
    
    .back-to-top {
        width: 30px;
        height: 30px;
        bottom: var(--spacing-sm);
        right: var(--spacing-sm);
        font-size: var(--font-size-sm);
    }
}
</style>