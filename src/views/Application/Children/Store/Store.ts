import { AActor } from "@/libs/AActor"
import { onMounted, onUnmounted } from "vue"

class Store extends AActor {
    public constructor() {
        super()
    }

    public InitStates() {
        return {

        }
    }

    public InitHooks() {

    }

    public Run() {
        onMounted(() => {

        })

        onUnmounted(() => {
            this.Destroy()
        })
    }

    protected Destroy() {

    }
}

export { Store }