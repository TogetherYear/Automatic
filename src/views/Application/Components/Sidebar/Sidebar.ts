import { onMounted, onUnmounted, ref } from "vue"
import { Application } from "../../Application"
import homeIcon from '@/assets/images/home.png'
import workIcon from '@/assets/images/work.png'
import storeIcon from '@/assets/images/store.png'
import messageIcon from '@/assets/images/message.png'

class Sidebar {
    public constructor(parent: Application) {
        this.parent = parent
    }

    private parent!: Application

    private menus = ref<Array<{ id: number, title: string, icon: string }>>([
        {
            id: 0,
            title: '主页',
            icon: homeIcon
        },
        {
            id: 1,
            title: '工作',
            icon: workIcon
        },
        {
            id: 2,
            title: '标签',
            icon: storeIcon
        },
        {
            id: 3,
            title: '消息',
            icon: messageIcon
        },
    ])

    private currentOption = ref<number>(0)

    public InitStates() {
        return {
            menus: this.menus,
            currentOption: this.currentOption,
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

    public OnSwitchOptions(e: number) {
        this.currentOption.value = e
    }
}

export { Sidebar }