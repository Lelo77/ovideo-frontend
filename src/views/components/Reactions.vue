<template>
    <div class="featured">
        <h2>Reações do Ovideo</h2>        
        <ul class="list">
            <li v-for="t in test" :key="t">
                <div class="video">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            test:[1,2,3,4]
        }
    }
}
</script>

<style lang="scss">
    .featured{
        h2{
            display:block;
            text-align:center;
            font-weight:bold;
        }

        .list{
            list-style: none;
            width: 100%;
            padding: 20px 10%;
            li{
                display: inline-block;
                margin: 25px 5%;
                width: 23%;
                
                .video{
                    background-color: #565656;
                    height: 300px;
                    border-radius: 10px;
                }
            }   
        }
    }
</style>