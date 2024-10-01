<script setup>
import { ref, computed } from "vue";
import { useFloating, offset, flip, shift, autoUpdate } from "@floating-ui/vue";

const props = defineProps({
  content: { type: Object, required: true },
  uid: { type: String, required: true },
  wwFrontState: { type: Object, required: true },
  wwEditorState: { type: Object, required: true },
});

const reference = ref(null);
const floating = ref(null);

const floatingStyles = ref({});

function openDropdown() {
  const { floatingStyles: styles } = useFloating(reference, floating, {
    placement: computed(() => props.content.position),
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  floatingStyles.value = styles.value;
}
</script>

<template>
  <div>
    <wwElement
      v-bind="props.content.elementTrigger"
      ref="reference"
      @click="openDropdown"
    />

    <wwElement
      v-bind="props.content.elementContent"
      ref="floating"
      :style="floatingStyles"
    />
  </div>
</template>
