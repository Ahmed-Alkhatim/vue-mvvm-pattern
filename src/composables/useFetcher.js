import { ref } from "vue";

function useFetcher(fetcher) {
  const response = ref(null);
  const loading = ref(false);
  const error = ref(null);
  
  const getData = async (route, data) => {
    loading.value = true;
    response.value = null;
    error.value = null;
    try {
      response.value = await fetcher(route, data);
      console.log(response.value);
      console.log(response.value.config.url , response.value.status, response.value.data );
    } catch (err) {
      error.value = err;
      console.log('error',error.value.config.url , error.value.status, error.value );
      if (error.value.code == "ERR_NETWORK") {
      }
      if(error.value?.response?.status == 500) {
        // window.location = "/server-error" 
      }
    }
    loading.value = false;
  };
 
  
  return {
    response, loading, error, getData,
  };
}

export default useFetcher
