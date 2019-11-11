<template>
    <div class="featured">
        <h2>Destaques do Ovideo</h2>        
        <ul class="list">
            <li v-for="t in test" :key="t">
                <div class="video">
                </div>
                <div class="featured-info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus diam, accumsan eu tincidunt tincidunt.
                    </p>
                </div>
                <button>Contrate Fulano Detal</button>
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

                .featured-info{
                    padding: 10px 0;
                    text-align: justify;
                    p{
                        font-size: 15px;
                    }
                }

                button{
                    display: block;
                    width: 100%;
                    border: 1px solid black;
                    padding: 20px 10px;
                    background-color: #fafafa;
                    font-weight: bold;
                    font-size: 16px;
                    border-radius: 5px;
                    cursor: pointer;
                    &:hover{
                        background: #f2f2f2;
                    }
                }
            }   
        }
    }
</style>