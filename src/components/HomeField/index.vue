<template>
  <template>
    <van-field
      readonly
      clickable
      name="picker"
      :value="value"
      label="选择器"
      placeholder="点击选择城市"
      @click="showPicker = true"
    />
    <van-popup v-model:show="showPicker" position="bottom">
      <van-picker
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </template>
</template>
<script lang="ts">
  // import { PropType } from 'vue';

  import { defineComponent, /*computed, unref */} from 'vue';
  export default defineComponent({
    name: 'HomeField',
    inheritAttrs: false,
    // props: {
    //   // 按钮类型
    //   type: {
    //     type: String as PropType<'primary' | 'default' | 'danger' | 'dashed' | 'link'>,
    //     default: 'default',
    //   },
    //   data: {
    //     type: Array ,
    //     default: [],
    //   },
    // },
    setup(props) {

      return { props };
    },
  });
</script>
