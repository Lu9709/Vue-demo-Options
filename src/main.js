const Vue = window.Vue
Vue.config.productionTip = false
import Demo from './Demo'
import Demo2 from './Demo2'
import Demo3 from './Demo3'


Vue.component('button-counter', {
    data() {
        return {
            n: 10
        }
    },
    template: `
      <div id="red">
      {{ n }}
      <button @click='add'>*2</button>
      </div>
    `,
    methods: {
        add() {
            this.n *= 2
        }
    }
})

new Vue({
    components: {Demo, Demo2,Demo3},
    // data: {
    //     n: 0
    // },
    data() {
        return {
            n: 0,
            s:300,
            array: [1, 2, 3, 4, 5, 6, 7, 8],
            visible: true
        }
    },
    template: `
      <div id="red">
      {{ n }}
      <button @click='add'>+1</button>
      <hr>
      <Demo/>
      <hr>
      <button-counter></button-counter>
      <hr>
      <Demo2 v-if="visible===true"/>
      <hr>
      {{ filter() }}
      <hr>
      <demo3 :message="s" :fn="add2"/>
      <hr>
      <button @click="toggle">toggle</button>
      </div>
      `,
    methods: {
        add() {
            this.n += 1
        },
        add2() {
            this.s += 2
        },
        filter() {
            console.log('Filter执行了一次');
            return this.array.filter(i => i % 2 === 0)
        },
        toggle() {
            this.visible=!this.visible
        }

    }
}).$mount('#app')

