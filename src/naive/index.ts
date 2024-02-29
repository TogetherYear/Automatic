import {
    create,
    NConfigProvider,
    NMessageProvider,
    NDialogProvider,
    NNotificationProvider,
    GlobalThemeOverrides,
    darkTheme,
    NTooltip,
} from 'naive-ui'

/**
 * components
 */
const naive = create({
    components: [
        NConfigProvider,
        NMessageProvider,
        NDialogProvider,
        NNotificationProvider,
        NTooltip, ,
    ]
})

/**
 * theme
 */
const themeOverrides: GlobalThemeOverrides = {
    common: {
        primaryColor: '#333333',
        primaryColorHover: '#333333',
        primaryColorPressed: '#333333',
    },
    Message: darkTheme.Message,
    Dialog: darkTheme.Dialog,
    Notification: darkTheme.Notification,
    Tooltip: {
        ...darkTheme.Tooltip,
        textColor: '#ffffff',
        color: '#2b2b2b',
        padding: '4px 10px 4px 10px',
        borderRadius: '4px',
        fontSize: '12px',
    },
}

export { naive, themeOverrides }