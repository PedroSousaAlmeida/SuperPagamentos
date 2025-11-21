import { ref, onMounted, onUnmounted } from 'vue';

export function useBreakpoint() {
  const isMobile = ref(false);

  const checkBreakpoint = () => {
    isMobile.value = window.innerWidth < 768;
  };

  onMounted(() => {
    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkBreakpoint);
  });

  return {
    isMobile,
  };
}
