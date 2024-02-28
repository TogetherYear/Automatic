import { onMounted, onUnmounted } from "vue"
import { Application } from "../../Application"

class Sidebar {
    public constructor(parent: Application) {
        this.parent = parent
    }

    private parent!: Application

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

export { Sidebar }