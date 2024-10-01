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

const { floatingStyles } = useFloating(reference, floating, {
  placement: computed(() => props.content.position),
  middleware: [offset(10), flip(), shift()],
  whileElementsMounted: autoUpdate,
});
</script>

<template>
  <div>
    <div ref="reference">
      <wwElement v-bind="props.content.elementTrigger" @click="openDropdown" />
    </div>

    <div ref="floating">
      <wwElement
        v-bind="props.content.elementContent"
        :style="floatingStyles"
      />
    </div>
  </div>
</template>
