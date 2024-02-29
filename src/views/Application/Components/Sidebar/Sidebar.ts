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

    private isShow = ref<boolean>(false)

    public InitStates() {
        return {
            menus: this.menus,
            currentOption: this.currentOption,
            isShow: this.isShow,
        }
    }

    public InitHooks() {

    }

    public Run() {
        this.ListenEvents()
        onMounted(() => {

        })

        onUnmounted(() => {
            this.Destroy()
        })
    }

    protected Destroy() {

    }

    private ListenEvents() {
        window.addEventListener('keydown', (e) => {
            if (e.code == 'Space') {
                this.isShow.value = !this.isShow.value
            }
        })
    }

    public OnSwitchOptions(e: number) {
        this.currentOption.value = e
    }
}

export { Sidebar }