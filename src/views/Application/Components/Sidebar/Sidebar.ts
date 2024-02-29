import { onMounted, onUnmounted, ref } from "vue"
import { Application } from "../../Application"
import homeIcon from '@/assets/images/home.png'
import workIcon from '@/assets/images/work.png'
import storeIcon from '@/assets/images/store.png'
import messageIcon from '@/assets/images/message.png'
import router from "@/router"

class Sidebar {
    public constructor(parent: Application) {
        this.parent = parent
    }

    private parent!: Application

    private menus = ref<Array<{ id: number, title: string, icon: string, route: string }>>([
        {
            id: 0,
            title: '主页',
            icon: homeIcon,
            route: 'Home'
        },
        {
            id: 1,
            title: '工作',
            icon: workIcon,
            route: 'Work'
        },
        {
            id: 2,
            title: '标签',
            icon: storeIcon,
            route: 'Store'
        },
        {
            id: 3,
            title: '消息',
            icon: messageIcon,
            route: 'Message'
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
        window.addEventListener('mouseup', (e) => {
            if (e.button == 1) {
                this.isShow.value = !this.isShow.value
            }
        })
    }

    public OnSwitchOptions(e: { id: number, title: string, icon: string, route: string }) {
        if (this.currentOption.value != e.id) {
            router.push({
                path: `/Application/${e.route}`
            })
            this.currentOption.value = e.id
        }

    }
}

export { Sidebar }