const routers = [
    {
        path: '/',
        auth: false,
        exact: true,
        redirect: '/auth/login',
    },


    {
        component: 'AuthLayout',
        path: '/auth',
        auth: false,
        exact: false,
        childrens: [

            {
                component: "Login",
                path: "/login/",
                auth: false,
                exact: true,
            },
        ]


    },




    {
        component: 'MainLayout',
        path: '/home/',
        auth: false,
        exact: false,
        redirect: "/",
        childrens: [

            {
                component: "Home",
                path: "/",
                auth: false,
                exact: true,
            },
        ]


    },

    {
        component: 'MainLayout',
        path: '/user',
        auth: false,
        exact: false,
        redirect: "/user/profile",
        childrens: [

            {
                component: "Profile",
                path: "/profile/",
                auth: false,
                exact: true
            },
            
        ]


    }


]

export default routers;