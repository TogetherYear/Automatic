import { onMounted, onUnmounted } from "vue"
import { AActor } from "@/libs/AActor"
import { Sidebar } from "./Components/Sidebar/Sidebar"

class Application extends AActor {
    public constructor() { super() }

    public sidebar = new Sidebar(this)

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
        })
        onUnmounted(async () => {
            await Renderer.GlobalShortcut.UnregisterAll()
            this.Destroy()
        })
    }

    protected Destroy() {

    }
}

export { Application }