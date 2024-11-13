<script setup>
import { reactive, computed, watch, h, ref } from 'vue'
import { useRouter, useRoute, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import axios from 'axios'
import moment from 'moment'

import {
  AppstoreOutlined,
  AuditOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  UserOutlined,
} from '@ant-design/icons-vue';

import GmailIcon from './icons/IconGmail.vue'
import TelegramIcon from './icons/IconTelegram.vue'

const { t } = useI18n()

const router = useRouter()
const route = useRoute()

const items = reactive([
  {
    icon: () => h(UserOutlined),
    key: '/',
    label: 'about_0',
  },
  {
    icon: () => h(AuditOutlined),
    key: '/cv/',
    label: 'cv',
  },
  {
    icon: () => h(AppstoreOutlined),
    key: '/projects/',
    label: 'projects',
  },
]);

const onOpenChange = openKeys => router.push(openKeys.key)

const endDate = moment(new Date()).add(8, 'month').format("YYYY-MM-DD")
const rangeColor = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
const heatmap = reactive({})

const heatmapValues = computed(() => {
  return Object.keys(heatmap).map(item => {
    return {
      date: item, count: heatmap[item]
    }
  })
})

let current = ref([]);
let githubEvents = ref(1);

const spinning = computed(() => githubEvents.value > 0)

const githubGetEvents = async function (username) {
  let page = 0

  do {
    page++

    await axios.get(`https://api.github.com/users/${username}/events?page=${page}`).then((response) => {
      if (response.data) {
        githubEvents.value = response.data.length

        response.data.map(item => {
          let d = moment(item.created_at).format("YYYY-MM-DD")

          if (!heatmap[d]) {
            heatmap[d] = 0
          }

          heatmap[d]++
        })
      }
    })

  } while (githubEvents.value > 0)
}

watch(route, async (r1, r2) => (current.value = [r1.path]))

githubGetEvents('dhalturin')
</script>

<template lang="pug">
div.header
  a-row(align="middle" style="margin-bottom: 20px")
    a-col(:span="24" :md="10" align="center")
      img(class="photo" src="@/assets/photo.jpeg" width="180" height="180")
    a-col(:span="24" :md="14")
      a-row(align="middle")
        a-col(:span="24")
          h1(class="green") {{ $t('hello') }}
          p(style="font-size: 1.1em") {{ $t('my-name') }}

      a-row(align="middle")
        a-col(:span="24")
          //- a-menu(style="font-size: .6em" v-model:selectedKeys="current" mode="horizontal" :items="items" @click="onOpenChange")
          a-menu(style="font-size: .6em" v-model:selectedKeys="current" mode="horizontal" @click="onOpenChange")
            a-menu-item(v-for="item in items" :key="item.key") {{ $t(item.label) }}

  a-row(:gutter="[3, 3]")
    a-col.github(:span="24" :md="14" align="center")
      a-spin(:spinning="spinning")
        a(href="https://github.com/dhalturin" target="_blank")
          a-card
            a-row(align="middle")
              a-col(:span="6")
                github-outlined(:style="{fontSize: '1.5em', color: '#222'}")
              a-col(:span="18")
                calendar-heatmap(:end-date="endDate", :values="heatmapValues", :round="2", :tooltip="false", :range-color="rangeColor")

    a-col(:span="24" :md="10")
      a-row.tiles(:gutter="[3, 3]")
        a-col(:span="12" align="center")
          a(href="mailto:danhalturin@gmail.com")
            a-card
              a-row(align="middle")
                a-col(:span="24")
                  gmail-icon

        a-col(:span="12" align="center")
          a(href="https://linkedin.com/in/dhalturin/" target="_blank")
            a-card
              a-row(align="middle")
                a-col(:span="24")
                  linkedin-outlined(:style="{fontSize: '1.2em', color: '#4A9DE4'}")

        a-col(:span="12" align="center")
          a(href="https://t.me/dhalturin" target="_blank")
            a-card
              a-row(align="middle")
                a-col(:span="24")
                  telegram-icon

        a-col(:span="12" align="center")
          a(href="https://instagram.com/dhalturin" target="_blank")
            a-card
              a-row(align="middle")
                a-col(:span="24")
                  instagram-outlined(:style="{fontSize: '1.2em', color: '#E44A90'}")
</template>

<style lang="scss" scoped>
.photo {
  border-radius: 50%;
  border: 1px solid #aaa;
  background-color: #fff;
  padding: 2px;
}

.header {
  margin-right: 24px;
}

@media (max-width: 1024px) {
  .header {
    margin-right: 0;
  }
}

.ant-row {

  .github,
  .tiles {
    a {
      &:after {
        content: none;
      }
    }
  }
}
</style>

<style lang="scss">
.tiles {
  .ant-card {
    .ant-card-body {
      padding: 10px;
    }

    svg {
      transition: transform 200ms;
    }

    &:hover {
      svg {
        transform: scale(1.2);
      }
    }
  }
}

.github {
  .ant-card {
    .ant-card-body {
      padding: 10px;
    }

    .ant-col {
      &:first-child {
        svg {
          transition: transform 200ms;
        }
      }
    }

    &:hover {
      .ant-col {
        &:first-child {
          svg {
            transform: scale(1.2);
          }
        }
      }
    }
  }
}
</style>
