<template>
    <div class="table-container">
        <div class="table-container__scroll">
            <table>
                <thead>
                    <tr class="table-line">
                        <td>Type stats</td>
                        <td v-for="date in data.dates">{{ date | moment('LL') }}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(line, ik) in data.items" :key="ik">
                        <td>{{ line.name }}</td>
                        <td v-for="(item, il) in line.data" :key="il">
                            {{ item.value }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
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

        }
    };
</script>

<style lang="scss" scoped>
    .table-container {
        width: 100%;
        padding: 25px;
        overflow: hidden;

        &__scroll {
            overflow: auto;
        }

        table {
            width: 100%;
            text-align: left;
            border-collapse: collapse;
            font-size: 12px;
            line-height: 14px;
            border: 0;
            color: #2D3646;

            td {
                border: 1px solid #E0E6F0;
                padding: 10px;
                white-space: nowrap;
            }
        }
    }
</style>

