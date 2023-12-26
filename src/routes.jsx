import { Home, Profile, SignIn, SignUp } from '@/pages'
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  PhoneIcon
} from '@heroicons/react/24/solid'

export const routes = [
  {
    icon: HomeIcon,
    name: 'trang chủ',
    path: '/home',
    element: <Home />
  },
  {
    icon: UserCircleIcon,
    name: 'giới thiệu',
    path: '/profile',
    element: <Profile />
  },
  {
    icon: PhoneIcon,
    name: 'liên lạc',
    path: '/contact',
    element: <SignUp />
  },
  {
    name: 'sản phẩm',
    path: '/products',
    element: <SignUp />
  }
  // {
  //   icon: ArrowRightOnRectangleIcon,
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   icon: UserPlusIcon,
  //   name: "Sign Up",
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  // {
  //   icon: DocumentTextIcon,
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
]

export default routes
