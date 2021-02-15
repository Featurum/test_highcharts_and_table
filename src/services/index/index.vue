<template>
    <div class="wrap">
        <v-chart
            :preloader="preloader"
            :data="statsChart"
        />

        <v-table
            :preloader="preloader"
            :data="statsTable"
        />
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';
    import chart from './chart.vue';
    import table from './table.vue';

    export default {
        name: "mainIndex",
        
        data() {
            return {
                preloader: false
            }
        },

        computed: {
            ...mapState({
                stats: state => state.stats
            }),

            ...mapGetters([
                'statsChart',
                'statsTable'
            ])
        },

        components: {
            'v-chart': chart,
            'v-table': table
        },

        methods: {
            async getStats() {
                this.preloader = true;

                try {
                    await this.$store.dispatch('getStats');
                } catch (error) {
                    console.log(error)
                    this.$notify({ type: 'error', title: error })
                }

                this.preloader = false;
            }
        },

        created() {
            this.getStats();
        }
    };
</script>
