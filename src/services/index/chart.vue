<template>
    <div class="chart-container">
        <highcharts :constructor-type="'stockChart'" :options="chartOptions"></highcharts>
    </div>
</template>

<script>
    export default {
        props: {
            data: {
                type: [Array, Object]
            },

            preloader: {
                type: Boolean,
                default: false
            }
        },

        methods: {

        },

        computed: {
            chartOptions() {
                let data = {
                    rangeSelector: {
                        inputEnabled: false
                    },

                    legend: {
                        enabled: true,
                        layout: 'horizontal',
                        verticalAlign: 'top',
                        align: 'left'
                    },

                    series: !!this.data.items ? this.data.items : [],
                }

                return data
            }
        }
    };
</script>

<style lang="scss" scoped>
    .chart-container {
        padding: 25px;
    }
</style>

