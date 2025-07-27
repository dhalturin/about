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
      'kubernetes',
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

const showModal = ref(false)
const confirmPrint = () => {
  showModal.value = false
  setTimeout(() => {
    window.print()
  }, 200)
}
</script>

<template lang="pug">
button(@click="showModal = true" class="print-button") {{ $t('download') }}

div(v-if="showModal" class="modal-overlay")
  div(class="modal-content")
    h3 {{ $t('download-title') }}
    p {{ $t('download-body') }}
    
    div(class="modal-actions")
      button(@click="confirmPrint" class="btn-confirm") {{ $t('ok') }}
      button(@click="showModal = false" class="btn-cancel") {{ $t('cancel') }}


CompanyItem(v-for="item in companies" class="companies")
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

<style lang="scss" scoped>
.print-button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.print-button:hover {
  background-color: #3aa876;
}

/* Стили для модального окна */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-content h3 {
  margin-top: 0;
  color: #333;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.btn-confirm {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-confirm:hover {
  background-color: #3aa876;
}

.btn-cancel {
  padding: 8px 16px;
  background-color: #f0f0f0;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-cancel:hover {
  background-color: #e0e0e0;
}

/* Стили для печати */
@media print {
  .print-button, .modal-overlay {
    display: none !important;
  }
}
</style>
