import { onMounted, onUnmounted, ref } from "vue"
import { Work } from "../../Work"
import * as L from 'leafer-ui'

class Operate {
    public constructor(parent: Work) {
        this.parent = parent
    }

    private parent!: Work

    public dom = ref<HTMLSpanElement | null>(null)

    public l!: L.Leafer

    private isDown = false

    public InitStates() {
        return {
            dom: this.dom,
        }
    }

    public InitHooks() {

    }

    public Run() {
        onMounted(() => {
            this.CreateLayer()
        })

        onUnmounted(() => {
            this.Destroy()
        })
    }

    protected Destroy() {

    }

    private CreateLayer() {
        if (this.dom.value) {
            this.l = new L.Leafer({
                view: this.dom.value,
                wheel: { zoomMode: false, preventDefault: true },
                type: 'draw',
            })

            this.l.on_(L.PointerEvent.CLICK, this.OnClick, this)

            this.l.on_(L.PointerEvent.MOVE, this.OnMove, this)

            this.l.on_(L.PointerEvent.DOWN, this.OnMouseDown, this)

            this.l.on_(L.PointerEvent.UP, this.OnMouseUp, this)
        }
    }

    public OnClick(e: L.PointerEvent) {

    }

    public OnMove(e: L.PointerEvent) {

    }

    public OnMouseDown(e: L.PointerEvent) {
        this.isDown = true
    }

    public OnMouseUp(e: L.PointerEvent) {
        this.isDown = false
    }
}

export { Operate }