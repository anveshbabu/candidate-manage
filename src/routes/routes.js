const routers = [
    {
        path: '/',
        auth: false,
        exact: true,
        redirect: '/auth/login',
    },

    {
        component: "AuthLayout",
        path: "/auth",
        auth: false,
        exact: false,
        childrens: [
          {
            component: "Login",
            path: "/login/",
            auth: false,
            exact: true,
          },
          {
            component: "SignUp",
            path: "/signUp/",
            auth: false,
            exact: true,
          },
          {
            component: "Forgot",
            path: "/forgot/",
            auth: false,
            exact: true,
          },
          {
            component: "Reset",
            path: "/reset/:token",
            auth: false,
            exact: true,
          },
        ],
      },
    {
        component: "MainLayout",
        path: "/home",
        redirect: "/home/",
        auth: false,
        exact: true,
        childrens: [
          {
            component: "Home",
            path: "/",
            auth: false,
            exact: true
          }
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