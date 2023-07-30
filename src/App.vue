<template>
  <div id="app" class="m-10">
    <p class="font-semibold text-4xl text-center text-gray-500">
      Type of Buttons which are available in Button Component
    </p>
    <p class="text-gray-500 text-xl font-medium pb-16 text-center pt-2">
      NOTE:- By default, most of the buttons are rounded in shape and medium in
      size
    </p>
    <div class="grid grid-cols-3 gap-y-14">
      <Button
        v-for="(item, index) in buttonsList"
        :key="index"
        class="justify-self-center"
        :shape="item.shape"
        :size="item.size"
        :color="item.color"
        :inactive="item.inActive"
        :isLoading="item.isLoading"
        :content="item.content"
        @click="handleClick"
      ></Button>
    </div>
  </div>
</template>

<script>
import Button from "./components/Button.vue";
import { buttonsList } from "./constant/index";
export default {
  components: {
    Button,
  },
  data() {
    return {
      buttonsList,
    };
  },
  methods: {
    handleClick(value) {
      this.$toasted.show(`${value} Button Clicked`);
    },
  },
};
</script>
