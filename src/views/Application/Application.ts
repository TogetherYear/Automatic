import { onMounted, onUnmounted } from "vue"
import { AActor } from "@/libs/AActor"

class Application extends AActor {
    public constructor() { super() }

    public InitStates() {
        return {

        }
    }

    public InitHooks() {

    }

    public Run() {
        onMounted(async () => {
            await Renderer.Widget.SetShadow(true)
            await Renderer.Widget.Show()
            this.Generate()
        })
        onUnmounted(async () => {
            await Renderer.GlobalShortcut.UnregisterAll()
            this.Destroy()
        })
    }

    protected Destroy() {

    }

    private Generate() {

    }
}

export { Application }