<template>
    <div class="week-new"> 
        <h2 style="display:block;text-align:center;font-weight:bold;">Novos esta semana</h2>
        <ul v-if="artists.length > 0" class="artist-list">
            <li v-for="artist in artists" v-bind:key="artist.id">
                <WeekNewCard :artist="artist"></WeekNewCard>
            </li>
        </ul>
        <div class="md-layout md-gutter md-alignment-center-center" v-else>
            <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
        </div>
    </div>
</template>

<script>
import WeekNewCard from './WeekNewCard';

export default {
    data(){
        return {
            artists: []
        }
    },
    components:{
        WeekNewCard
    },
    mounted(){
        this.$http.get('/new-week').then(response=>{
            this.artists = response.data;
        })
    }
}
</script>

<style lang="scss">
    .week-new{
        padding: 20px 5px;

        h2{
            padding: 15px 0;
        }

        .artist-list{
            width: 100%;
            white-space: nowrap;
            list-style: none;
            overflow-x: scroll;
            min-height: 160px;
            padding: 10px 0;
            
            li{
                display: inline-block;
                padding: 10px 15px;
            }
        }
    }
</style>