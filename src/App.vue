<template>
  <div id="app">
    <header class="header">
      <!-- 导航栏 -->
      <nav class="navigation">
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/map" class="nav-link">文化地图</router-link>
        <router-link to="/about" class="nav-link">详细介绍</router-link>
      </nav>
    </header>
    
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.header {
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    color: #FFF;
    padding: 8px 0;
    text-align: center;
    box-shadow: 0 4px 12px var(--shadow-color);
    position: relative;
    overflow: hidden;
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
        transparent 10px,
        rgba(255, 255, 255, 0.05) 10px,
        rgba(255, 255, 255, 0.05) 20px
    );
    animation: float 20s linear infinite;
}

.navigation {
    position: relative;
    z-index: 1;
}

.nav-link {
    display: inline-block;
    margin: 0 10px;
    padding: 6px 15px;
    color: #FFF;
    text-decoration: none;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    transition: all 0.3s ease;
    font-weight: 500;
    font-size: 0.9em;
}

.nav-link:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-2px);
}

.nav-link.router-link-active {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 768px) {
    .header {
        padding: 6px 0;
    }
    
    .nav-link {
        margin: 0 5px;
        padding: 5px 12px;
        font-size: 0.8em;
    }
}

@media (max-width: 480px) {
    .header {
        padding: 4px 0;
    }
    
    .navigation {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 5px;
    }
    
    .nav-link {
        margin: 2px;
        padding: 4px 8px;
        font-size: 0.75em;
        border-radius: 15px;
        white-space: nowrap;
    }
}

@media (max-width: 320px) {
    .header {
        padding: 3px 0;
    }
    
    .nav-link {
        margin: 1px;
        padding: 3px 6px;
        font-size: 0.7em;
        border-radius: 12px;
    }
}
</style>