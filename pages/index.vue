<template>
 <div class="grid grid-rows-2">
  <div class="grid grid-cols-3">
    <div class="chart-container col-span-2 animate-fade-in" ref="areaChartRef">
      <AreaChart
        v-if="showAreaChart"
        :data="data"
        index="name"
        :categories="['total', 'predicted']"
        :colors="['#37494E', '#959C9E']"
        :showGridLine="false"
        :showXAxis="false"
      ></AreaChart>
    </div>
    <div class="chart-text col-span-1" ref="lineChartRef">
      <h1>visualize graphics</h1>
      <h3 class="text-forward">using shadcn/Chart.js</h3> 
      <LineChart
        v-if="showAreaChart"
        class="chart-line"
        :data="dataLine"
        index="year"
        :categories="['Reduction', 'Growth']"
        :showGridLine="false"
        :showXAxis="false"
        :showTooltip="false"
        :colors="['#37494E', '#959C9E']"
      />
    </div>
  </div>
  <div class="grid grid-cols-10">
    <div class="col-span-4">
      <h1 class="text-forward">support multi</h1>
      <h1>language</h1>
      <h1>i18n</h1>
      <NuxtImg src="/icons/kz.svg"></NuxtImg>
    </div>
    <div class="chat col-span-2">
      <div
        v-for="(message, index) in  messages"
        :class="[message.side ? 'arrow-right' : 'arrow-left']"
        class="messages"
    >
        <div class="messages-text">
          {{ message.text }}
        </div>
      </div>
    </div>
    <div class="col-span-4 ml-6">
      <h1>deliver real-time</h1>
      <h1>data to users</h1>
    </div>
  </div>
  <div class="form">
    <ProfileForm/>
    <div>
      <div>safe input</div>
      <span>form checks with Vuelidate/Yup</span>
    </div>
  </div>
    <!-- 
      2 charts
      form
      maybe some interesing component from shadcn
      *i18n
      websocket - dont implement - may be with some cloud backend - shadcn have so nice chat component
    -->
 </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showAreaChart = ref(false)
const showLineChart = ref(false)
const areaChartRef = ref(null)
const lineChartRef = ref(null)

function createObserver(refElement, showFlag) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        showFlag.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  if (refElement.value) {
    observer.observe(refElement.value)
  }
}

onMounted(() => {
  createObserver(areaChartRef, showAreaChart)
  createObserver(lineChartRef, showLineChart)
})

const data = [
  { name: 'Jan', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Feb', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Mar', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Apr', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'May', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Jun', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Jul', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
]
const dataLine = [
  {
    'year': 1970,
    'Reduction': 2.04,
    'Growth': 1.53,
  },
  {
    'year': 1971,
    'Reduction': 1.96,
    'Growth': 1.58,
  },
  {
    'year': 1972,
    'Reduction': 1.96,
    'Growth': 1.61,
  },
  {
    'year': 1973,
    'Reduction': 1.93,
    'Growth': 1.61,
  },
  {
    'year': 1974,
    'Reduction': 1.88,
    'Growth': 1.67,
  },
  {
    'year': 1975,
    'Reduction': 1.79,
    'Growth': 1.64,
  },
  {
    'year': 1976,
    'Reduction': 1.77,
    'Growth': 1.62,
  },
  {
    'year': 1977,
    'Reduction': 1.74,
    'Growth': 1.69,
  },
  {
    'year': 1978,
    'Reduction': 1.74,
    'Growth': 1.7,
  },
  {
    'year': 1979,
    'Reduction': 1.77,
    'Growth': 1.67,
  },
  {
    'year': 1980,
    'Reduction': 1.79,
    'Growth': 1.7,
  },
  {
    'year': 1981,
    'Reduction': 1.81,
    'Growth': 1.72,
  },
  {
    'year': 1982,
    'Reduction': 1.84,
    'Growth': 1.73,
  },
  {
    'year': 1983,
    'Reduction': 1.77,
    'Growth': 1.73,
  },
  {
    'year': 1984,
    'Reduction': 1.78,
    'Growth': 1.78,
  },
  {
    'year': 1985,
    'Reduction': 1.78,
    'Growth': 1.81,
  },
  {
    'year': 1986,
    'Reduction': 1.82,
    'Growth': 1.89,
  },
  {
    'year': 1987,
    'Reduction': 1.82,
    'Growth': 1.91,
  },
  {
    'year': 1988,
    'Reduction': 1.77,
    'Growth': 1.94,
  },
  {
    'year': 1989,
    'Reduction': 1.76,
    'Growth': 1.94,
  },
  {
    'year': 1990,
    'Reduction': 1.75,
    'Growth': 1.97,
  },
  {
    'year': 1991,
    'Reduction': 1.62,
    'Growth': 1.99,
  },
  {
    'year': 1992,
    'Reduction': 1.56,
    'Growth': 2.12,
  },
  {
    'year': 1993,
    'Reduction': 1.5,
    'Growth': 2.13,
  },
  {
    'year': 1994,
    'Reduction': 1.46,
    'Growth': 2.15,
  },
  {
    'year': 1995,
    'Reduction': 1.43,
    'Growth': 2.17,
  },
  {
    'year': 1996,
    'Reduction': 1.4,
    'Growth': 2.2,
  },
  {
    'year': 1997,
    'Reduction': 1.37,
    'Growth': 2.15,
  },
  {
    'year': 1998,
    'Reduction': 1.34,
    'Growth': 2.07,
  },
  {
    'year': 1999,
    'Reduction': 1.32,
    'Growth': 2.05,
  },
  {
    'year': 2000,
    'Reduction': 1.33,
    'Growth': 2.07,
  },
  {
    'year': 2001,
    'Reduction': 1.31,
    'Growth': 2.08,
  },
  {
    'year': 2002,
    'Reduction': 1.29,
    'Growth': 2.1,
  },
  {
    'year': 2003,
    'Reduction': 1.27,
    'Growth': 2.15,
  },
  {
    'year': 2004,
    'Reduction': 1.27,
    'Growth': 2.21,
  },
  {
    'year': 2005,
    'Reduction': 1.26,
    'Growth': 2.23,
  },
  {
    'year': 2006,
    'Reduction': 1.26,
    'Growth': 2.29,
  },
  {
    'year': 2007,
    'Reduction': 1.27,
    'Growth': 2.34,
  },
  {
    'year': 2008,
    'Reduction': 1.26,
    'Growth': 2.36,
  },
  {
    'year': 2009,
    'Reduction': 1.26,
    'Growth': 2.36,
  },
  {
    'year': 2010,
    'Reduction': 1.25,
    'Growth': 2.35,
  },
  {
    'year': 2011,
    'Reduction': 1.24,
    'Growth': 2.34,
  },
  {
    'year': 2012,
    'Reduction': 1.25,
    'Growth': 2.39,
  },
  {
    'year': 2013,
    'Reduction': 1.22,
    'Growth': 2.3,
  },
  {
    'year': 2014,
    'Reduction': 1.2,
    'Growth': 2.35,
  },
  {
    'year': 2015,
    'Reduction': 1.17,
    'Growth': 2.39,
  },
  {
    'year': 2016,
    'Reduction': 1.16,
    'Growth': 2.41,
  },
  {
    'year': 2017,
    'Reduction': 1.13,
    'Growth': 2.44,
  },
  {
    'year': 2018,
    'Reduction': 1.07,
    'Growth': 2.45,
  },
  {
    'year': 2019,
    'Reduction': 1.03,
    'Growth': 2.47,
  },
  {
    'year': 2020,
    'Reduction': 0.92,
    'Growth': 2.48,
  },
  {
    'year': 2021,
    'Reduction': 0.82,
    'Growth': 2.51,
  },
]
const messages = [
  {
    text: "no delays",
    datetime: "2025-06-05T10:04:19.708529Z",
    is_seen: true,
    side: 1
  },
  {
    text: "no refreshing",
    datetime: "2025-06-05T10:04:19.708529Z",
    is_seen: true,
    side: 0
  }
]
</script>

<style lang="scss" scoped>
.chart{
  display: flex;
  justify-content: space-between;
  &-container{
    flex-grow: 1;
    width: 100%;
    position: relative;
    left: -4rem;
  }
  &-text{
    display: flex;
    flex-direction: column;
    position: relative;
    left: -2rem;
  }
}
.content{
  width: 100vw;
}
h1{
  color: rgba(74, 92, 96, 1);
  font-weight: 800;
  line-height: 3.3rem;
}
h3{
  color: rgba(74, 92, 96, 1);
  font-weight: 800;
  line-height: 2rem;
}
.text-forward{
  position: relative;
  left: 2rem;
}
.flex-jc-sb{
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  > div{
    width: 100%;
  }
}
.chat{
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 20vw;
  .messages{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    &-text{
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
      padding: 0rem 1rem 0.3rem 1rem;
      border-radius: 0.75rem;
      border: 1px solid rgba(205, 205, 205, 1);
      font-size: 2rem;
      font-weight: 700;
      width: fit-content;
      max-width: 90%;
      background: rgba(205, 205, 205, 1);
      color: rgba(45, 67, 84, 1);
    }
    &::after{
      content: '';
      position: relative;
      top: -0.4rem;
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-radius: 100%;
      border-top: 20px solid rgba(205, 205, 205, 1);
    }
  }
  .side-a::after{
    right: 1.5rem;
  }
  .side-b::after{
    left: 1.5rem;
  }
  .arrow-right{
    z-index: 99;
    align-items: flex-end;
    &::after{
      right: 1.5rem;
    }
    .messages-indicators{
      justify-content: end; 
    }
  }
  .arrow-left{
    align-items: flex-start;
    &::after{
      left: 1.5rem;
    }
    .messages-indicators{
      justify-content: start;
      flex-direction: row-reverse;
    }
  }
}
.chart-line{
  position: relative;
  top: 2rem;
}
.form{
  position: relative;
  top: -16rem;
  max-width: 40vw;
  left: 20vw;
}
</style>