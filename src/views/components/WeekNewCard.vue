<template>
    <div class="card" @click="detail()">
        <div class="photo" :style="generatePhotoStyle()">
            <div class="value-badge">
                R$ {{artist.valor}}
            </div>
            <div class="new">
                <span>Novo</span>
            </div>
        </div>
        <div class="card-info">
            <small>{{artist.categoriaArtista}}</small>
            <p :title="artist.nomeArtista">{{artist.nomeArtista}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        artist:{}
    },
    methods:{
        generatePhotoStyle(){
            if(this.artist.urlFotoCard != "string"){
                return {'background-image':'url('+this.artist.urlFotoCard+')'}
            }else{
                return {'background':'#6e6e6e'}
            }
        },
        detail(){
            this.$router.push("/detalhes/"+this.artist.id);       
        }
    }
}
</script>

<style lang="scss">
    $newColor: #7000f0;
    .card{
        cursor:pointer;
       -webkit-transition:opacity 0.5s ease-out;
       -moz-transition:opacity 0.5s ease-out;
       -o-transition:opacity 0.5s ease-out;
       -ms-transition:opacity 0.5s ease-out;
        &:hover{
            filter:alpha(opacity=80);
            -moz-opacity:0.8;
            opacity:0.8;
        }
        .photo{
            height: 200px;
            width: 200px;
            border-radius: 10px 10px 0 0;
            background-size: 100%;
            background-color: #FFFFFF;
            position: relative;
            .value-badge{
                background: rgba(0,0,0,0.65);
                color: #ffffff;
                width: 35%;
                text-align:center;
                padding: 7px 0;
                float: right;
                margin: 10px 10px 0 0;
                border-radius: 30px;
                font-size: 13px;
            }
            .new{

                position: absolute;
                margin-top: 170px;
                color: #fff;
                font-weight: 600;
                font-size: 13px;
                display: block;
                width: 63px;
                height: 20px;
                border-color: $newColor transparent $newColor $newColor;
                border-style: solid;
                border-width: 9px 8px 11px 45px;
                span{
                    position: absolute;
                    z-index: 1;
                    top: -11px;
                    left: -37px;
                }
            }
        }
        
        .card-info{
            background: #FFFFFF;
            padding: 5px 10px;
            border-radius: 0 0 10px 10px;
            text-transform: uppercase;
            width: 200px;
            p{
                font-weight: bold;
                font-size: 18px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
</style>