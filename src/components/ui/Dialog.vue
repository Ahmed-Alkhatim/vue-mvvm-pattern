<template >
    <div>
         <!-- Model -->
         <Transition name="fade">
            <div class="dialogue fixed left-0 bottom-0 right-0 top-0  overflow-scroll   z-50 bg-[rgba(51,48,60,.33)]"   
                v-show="showContainer" @click = "emit('update:modelValue', false)">
              <div class="dialog-card  z-50 pt-10 pb-5">
                <Transition name="bounce">
                  <div v-show="modelValue" @click.stop = "() => {}" >
                      <slot></slot>
                  </div>
                </Transition>
              </div>
            </div>
          </Transition>
        <!-- Activator -->
        <div @click="emit('update:modelValue', !modelValue)">
            <slot name = "activator"></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['modelValue'])
const emit = defineEmits()
const showContainer = ref(false)
watch( props, () => {
  if(props.modelValue) {
    showContainer.value = true
  } else {
    setTimeout( () => {
      showContainer.value = false
    }, 500)
  }
})
</script>

<style scoped>
.dialogue::-webkit-scrollbar {
  width: 0px;
}
.dialog-card {
  position: absolute;
  right: 50%;
  transform: translateX(50%);
}
.bounce-enter-active {
  animation: bounce-in 0.5s ;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  /* 50% {
    transform: scale(1.1);
    opacity: .5;
  } */
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>