<template>
  <div>
    <public-menu v-if="true"/>
    <private-menu v-else/>    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import PrivateMenu from "./PrivateMenu.vue";
import PublicMenu from "./PublicMenu.vue";

@Component({
  components: {
    PrivateMenu,
    PublicMenu,
  },
})
export default class BasicMenu extends Vue {
}
</script>
<style></style>
