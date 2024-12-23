<script
      src = "https://unpkg.com/vue@3/dist/vue.global.js" >
    if ("serviceWorker" in navigator) {
        self.addEventListener("load", async () => {
            const container = navigator.serviceWorker;
            if (container.controller === null) {
                const reg = await container.register("sw.js");
            }
        });
    }>
</script>