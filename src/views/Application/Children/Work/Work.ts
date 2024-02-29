import { AActor } from "@/libs/AActor"
import { onMounted, onUnmounted } from "vue"
import { Operate } from "./Components/Operate/Operate"

class Work extends AActor {
    public constructor() {
        super()
    }

    public operate = new Operate(this)

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

export { Work }