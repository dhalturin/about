<script setup>
import { ref, shallowRef } from 'vue'
import moment from 'moment'

import CompanyItem from './CompanyItem.vue'

import ClodoIcon from './icons/IconClodo.vue'
import InCountryIcon from './icons/IconInCountry.vue'
import IqOptionIcon from './icons/IconIqOption.vue'
import PropellerAdsIcon from './icons/IconPropellerAds.vue'

const companies = ref([
  {
    dateEnd: '',
    dateStart: '2022-04-01',
    desc: ``,
    role: 'DevOps engineer',
    title: 'Some company',
    tags: [
      'aws',
      'bash',
      'golang',
      'helm',
      'kubernets',
      'fluxcd',
      'terraform',
      'pulumi',
    ]
  },
  {
    dateEnd: '2022-04-01',
    dateStart: '2020-02-01',
    desc: ``,
    icon: shallowRef(InCountryIcon),
    role: 'DevOps engineer',
    site: 'incountry.com',
    title: 'InCountry',
    tags: [
      'alicloud',
      'ansible',
      'aws',
      'bash',
      'groovy',
      'jenkins',
      'nginx',
      'nomad',
      'packer',
      'saltstack',
      'terraform',
      'travis-ci',
      'yandexcloud',
    ]
  },
  {
    dateEnd: '2020-02-01',
    dateStart: '2017-09-01',
    desc: ``,
    icon: shallowRef(IqOptionIcon),
    role: 'Linux System Administrator',
    site: 'iqoption.com',
    title: 'IQ Option',
    tags: [
      'ansible',
      'aws',
      'bash',
      'gitlab',
      'golang',
      'grafana',
      'kapacitor',
      'lxc',
      'lxd',
      'maas',
      'nginx',
      'postgresql',
      'terraform',
      'vuejs',
    ]
  },
  {
    dateEnd: '2017-09-01',
    dateStart: '2016-12-01',
    desc: ``,
    icon: shallowRef(PropellerAdsIcon),
    role: 'Linux System Administrator',
    site: 'propellerads.com',
    title: 'PropellerAds',
    tags: [
      'ansible',
      'bash',
      'centos',
      'chef',
      'collectd',
      'grafana',
      'influxdb',
      'kapacitor',
      'kickstart',
      'nginx',
      'preseed',
      'teamcity',
      'telegraf',
      'ubuntu',
    ],
  },
  {
    dateEnd: '2016-11-01',
    dateStart: '2015-08-01',
    desc: ``,
    icon: shallowRef(ClodoIcon),
    role: 'Developer',
    site: 'clodo.ru',
    title: 'Cloud hosting clodo.ru',
    tags: [
      '1c',
      'bash',
      'javascript',
      'mysql',
      'php',
    ],
  },
  {
    dateEnd: '2015-08-01',
    dateStart: '2012-12-01',
    desc: ``,
    icon: shallowRef(ClodoIcon),
    role: 'Linux System Administrator',
    site: 'clodo.ru',
    title: 'Cloud hosting clodo.ru',
    tags: [
      'apache',
      'bash',
      'exim',
      'kvm',
      'mysql',
      'nginx',
    ],
  },
])
</script>

<template lang="pug">
CompanyItem(v-for="item in companies")
  template(#icon)
    Component(:is="item.icon" v-if="item.icon")

  template(#heading)
    | {{ item.title }}
    span(v-if="item.site") /
      a(:href="`https://${item.site}`" target="_blank") {{ item.site }}
    div.role {{  item.role }}
    div.date
      | {{ moment(item.dateStart).format('MMM YYYY') }} - {{ item.dateEnd && moment(item.dateEnd).format('MMM YYYY') || '...' }}

  div {{ item.desc }}
  span(v-for="(tag, idx) in item.tags") \#{{ tag + "" + ((idx !== item.tags.length -1) && ', ' || '') }}
</template>
