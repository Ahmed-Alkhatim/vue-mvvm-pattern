import { ref } from "vue"

const useConfig = () => {
    const isBlankPage = ref(false)

    return { isBlankPage }
}

export default useConfig