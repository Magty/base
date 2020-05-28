<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider collapsible hide-trigger breakpoint="sm" v-model="collapsed">
        <sider-menu :collapsed="collapsed" :list="menuList"></sider-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon :class="triggerClasses" @click.native="handleCollapsed" type="md-menu" :size="32" />
        </Header>
        <Content class="content-con">
          <Card shadow class="page-card">
            <router-view />
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import SiderMenu from '_c/sider-menu'
export default {
  data() {
    return {
      collapsed: false,
      menuList: [
        {
          title: '栏目1',
          name: 'menu1',
          icon: 'ios-home'
        },
        {
          title: '栏目2',
          name: 'menu2',
          icon: 'ios-contact'
        },
        {
          title: '栏目3',
          name: 'menu3',
          icon: 'ios-help-circle',
          children: [
            {
              title: '栏目3-1',
              name: 'menu3-1',
              icon: 'ios-home'
            },
            {
              title: '栏目3-2',
              name: 'menu3-2',
              icon: 'ios-contact',
              children: [
                {
                  title: '栏目3-2-1',
                  name: 'menu3-2-1',
                  icon: 'ios-home'
                },
                {
                  title: '栏目3-2-2',
                  name: 'menu3-2-2',
                  icon: 'ios-contact'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    SiderMenu
  },
  computed: {
    triggerClasses() {
      return ['trigger-icon', this.collapsed ? 'rotate' : '']
    }
  },
  methods: {
    handleCollapsed() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="less">
.layout-wrapper,
.layout-outer {
  height: 100%;
  .header-wrapper {
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 0 23px;
    .trigger-icon {
      cursor: pointer;
      transition: transform 0.3 ease;
      &.rotate {
        transform: rotateZ(-90deg);
        transition: transform 0.3 ease;
      }
    }
  }
  .content-con {
    padding: 10px;
  }
  .page-card {
    min-height: ~'calc(100vh - 84px)';
  }
}
</style>
