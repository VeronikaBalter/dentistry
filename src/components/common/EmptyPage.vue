<template>
    <div class="empty-page">
        <div class="mb-2">{{msg}}</div>
        <b-button v-if="msgBtn!=undefined"  variant="outline-primary">{{msgBtn}}</b-button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
@Component({
  components: {
    
  },
})
export default class EmptyPage extends Vue {   
    @Prop() private msg!:string;
    @Prop() private msgBtn!:string; 
}
</script>
<style>
.empty-page{
    text-align: center;
    margin-top: 100px;
    font-size: 25px;
}
</style>