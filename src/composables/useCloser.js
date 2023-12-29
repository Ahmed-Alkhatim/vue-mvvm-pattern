import { onMounted , onUnmounted } from "vue";

function useCloser( closer ) {
   
    let page = document.getElementById("app")
    onMounted( () => {
        page.addEventListener('click', () => {
            closer.value = false
        })
    })
    onUnmounted(() => {
        page.removeEventListener("click", () => {
            closer.value = false
        })
    })
}

export default useCloser
