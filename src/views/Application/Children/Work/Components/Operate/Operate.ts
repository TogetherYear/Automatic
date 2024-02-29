import { onMounted, onUnmounted } from "vue"
import { Work } from "../../Work"

class Operate {
    public constructor(parent: Work) {
        this.parent = parent
    }

    private parent!: Work

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

export { Operate }