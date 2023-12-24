<script setup>
import { ref, shallowRef } from 'vue'
import { useI18n } from 'vue-i18n'

import coverOpsgin from '@/assets/opsgin.png'
import coverUiVmm from '@/assets/ui-vmm.png'

const projects = ref([
  {
    name: 'opsgin',
    desc: 'opsgin',
    cover: coverOpsgin,
    links: [
      { text: 'repo', url: 'https://github.com/slack-utils/opsgin' },
    ],
    tags: ['golang']
  },
  {
    name: 'ui-vmm',
    desc: 'uivmm',
    cover: coverUiVmm,
    links: [
      { text: 'site', url: 'https://ui-vmm.github.io' },
      { text: 'demo', url: 'https://ui-vmm.github.io/demo' },
    ],
    tags: ['golang', 'vuejs', 'grpc']
  },
  {
    name: 'ssh pass',
    desc: 'sshpass',
    links: [
      { text: 'repo', url: 'https://github.com/dhalturin/sshpass' },
    ],
    tags: ['c']
  },
])
</script>

<template lang="pug">
a-row.projects
  a-col(:span="12" v-for="item in projects")
    a-card
      template(#cover v-if="item.cover")
        div(:style="{ backgroundImage: 'url(' + item.cover + ')' }")

      a-card-meta(:title="item.name")
        template(#description)
          div {{ $t(item.desc) }}

          a-divider(dashed)

          span(v-for="(link, idx) in item.links")
            a(:href="link.url" target="_blank") {{ $t(link.text) }}
            | {{ (idx !== item.links.length -1) && ', ' || '' }}

          span(v-for="tag in item.tags") , \#{{ tag }}
</template>

<style lang="scss">
.projects {
  .ant-card {
    margin: 6px 12px;

    .ant-card-cover {
      margin: 0;
      position: relative;
      height: 100px;
      overflow: hidden;
      border-bottom: 1px solid #f0f0f0;

      div {
        min-height: 100px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 5px;
      }
    }

    .ant-card-meta-detail {
      .ant-card-meta-title {
        font-size: 20px;
        font-weight: 600;
      }

      .ant-card-meta-description {
        font-size: 15px;
        color: var(--color-text);

        .ant-divider {
          margin: 10px 0;
        }
      }
    }
  }
}
</style>
