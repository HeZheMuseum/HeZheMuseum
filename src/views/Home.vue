<template>
  <div class="home">
    <!-- 全屏图片显示 -->
    <div class="fullscreen-image-container">
      <img 
        :src="isMobile ? '/Assets/2.png' : '/Assets/1.png'" 
        :alt="isMobile ? '移动端首页图片' : '桌面端首页图片'"
        class="fullscreen-image"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Home',
  setup() {
    const isMobile = ref(false)
    
    const checkMobile = () => {
      isMobile.value = window.innerWidth <= 768
    }
    
    onMounted(() => {
      checkMobile()
      window.addEventListener('resize', checkMobile)
    })
    
    onUnmounted(() => {
      window.removeEventListener('resize', checkMobile)
    })
    
    return {
      isMobile
    }
  }
}
</script>

<style scoped>
.home {
  padding: 0;
  margin: 0;
  height: calc(100vh - 40px); /* 减去导航栏高度 */
  overflow: hidden;
}

.fullscreen-image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.fullscreen-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 填满容器，可能会裁剪图片 */
  display: block;
}

@media (max-width: 768px) {
  .home {
    height: calc(100vh - 35px); /* 移动端导航栏稍小 */
  }
}

@media (max-width: 480px) {
  .home {
    height: calc(100vh - 30px);
  }
}

@media (max-width: 320px) {
  .home {
    height: calc(100vh - 25px);
  }
}
</style>