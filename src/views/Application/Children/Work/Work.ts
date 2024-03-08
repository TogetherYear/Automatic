import { AActor } from "@/libs/AActor"
import { onMounted, onUnmounted, ref } from "vue"
import { Operate } from "./Components/Operate/Operate"
import { DR } from "@/decorators/DR"

class Work extends AActor {
    public constructor() {
        super()
    }

    public operate = new Operate(this)

    public state = ref<DR.Work.OperateState>(DR.Work.OperateState.Idle)

    public InitStates() {
        return {
            state: this.state,
        }
    }

    public InitHooks() {

    }

    public Run() {
        onMounted(() => {
            this.UpdateState()
        })

        onUnmounted(() => {
            this.Destroy()
        })
    }

    protected Destroy() {

    }

    private UpdateState() {
        if (this.operate.dom.value) {
            if (this.state.value == DR.Work.OperateState.Idle) {
                this.OnIdle()
            }
            else if (this.state.value == DR.Work.OperateState.Line) {
                this.OnLine()
            }
            else {
                this.OnIdle()
            }
            requestAnimationFrame(this.UpdateState.bind(this))
        }
    }

    private OnIdle() {

    }

    private OnLine() {

    }
}

export { Work }