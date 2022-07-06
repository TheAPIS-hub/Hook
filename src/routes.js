import React from 'react'

import { Icon } from '@chakra-ui/react'
import {
  MdHome,
  MdLock,
  MdSpaceDashboard,
  MdDashboard,
  MdAssessment,
  MdAccountCircle,
  MdBrokenImage,
} from 'react-icons/md'

// Admin Imports
import DashboardsDefault from 'views/admin/dashboards/default'
import Game from 'views/admin/main/profile/game'
import gameDetailPage from 'views/admin/main/profile/gameDetail/index.jsx'
import DashboardsCarInterface from 'views/admin/dashboards/carInterface'
import DashboardsSmartHome from 'views/admin/dashboards/smartHome'

// NFT Imports
import NFTMarketplace from 'views/admin/nfts/marketplace'
import NFTPage from 'views/admin/nfts/page'
import NFTCollection from 'views/admin/nfts/collection'
import NFTProfile from 'views/admin/nfts/profile'

// Main Imports
import AccountBilling from 'views/admin/main/account/billing'
import AccountApplications from 'views/admin/main/account/application'
import AccountInvoice from 'views/admin/main/account/invoice'
import AccountSettings from 'views/admin/main/account/settings'
import AccountAllCourses from 'views/admin/main/account/courses'
import AccountCoursePage from 'views/admin/main/account/coursePage'

import UserNew from 'views/admin/main/users/newUser'
import UsersOverview from 'views/admin/main/users/overview'
import UsersReports from 'views/admin/main/users/reports'

import ProfileSettings from 'views/admin/main/profile/settings'
import ProfileOverview from 'views/admin/main/profile/overview'
import ProfileTrack from 'views/admin/main/profile/portfolioTrack/index'

import ApplicationsKanban from 'views/admin/main/applications/kanban'
import ApplicationsDataTables from 'views/admin/main/applications/dataTables'
import ApplicationsCalendar from 'views/admin/main/applications/calendar'

import EcommerceNewProduct from 'views/admin/main/ecommerce/newProduct'
import EcommerceProductSettings from 'views/admin/main/ecommerce/settingsProduct'
import EcommerceProductPage from 'views/admin/main/ecommerce/pageProduct'
import EcommerceOrderList from 'views/admin/main/ecommerce/orderList'
import EcommerceOrderDetails from 'views/admin/main/ecommerce/orderDetails'
import EcommerceReferrals from 'views/admin/main/ecommerce/referrals'

import OthersNotifications from 'views/admin/main/others/notifications'
import OthersPricing from 'views/admin/main/others/pricing'

// Auth Imports
import ForgotPasswordCentered from 'views/auth/forgotPassword/ForgotPasswordCentered.jsx'
import ForgotPasswordDefault from 'views/auth/forgotPassword/ForgotPasswordDefault.jsx'
import LockCentered from 'views/auth/lock/LockCentered.jsx'
import LockDefault from 'views/auth/lock/LockDefault.jsx'
import SignInCentered from 'views/auth/signIn/SignInCentered.jsx'
import SignInDefault from 'views/auth/signIn/SignInDefault.jsx'
import SignUpCentered from 'views/auth/signUp/SignUpCentered.jsx'
import SignUpDefault from 'views/auth/signUp/SignUpDefault.jsx'
import AllGamePage from 'views/admin/main/profile/allGame/index.jsx'
import SearchErr from 'views/admin/main/profile/searchErr/index'
import Pass from 'views/admin/main/profile/pass/index.jsx'

import VerificationCentered from 'views/auth/verification/VerificationCentered.jsx'
import VerificationDefault from 'views/auth/verification/VerificationDefault.jsx'

const routes = [
  // --- Dashboards ---
  {
    name: ' Games',
    icon: <span className="iconfont icon-Overview">&#xe606;</span>,
    collapse: false,
    layout: '/admin',
    component: Game,
    path: '/game',
    isShow: true,
    isClick: true,
    items: [
      // --- Sign In ---
      {
        // name: "Sign In",
        // path: "/sign-in",
        // collapse: true,
        // items: [
        //   {
        //     name: "Default",
        //     layout: "/auth",
        //     path: "/sign-in/default",
        //     icon: (
        //       <Icon as={MdHome} width='16px' height='16px' color='inherit' />
        //     ),
        //     component: SignInDefault,
        //   },
        //   {
        //     name: "Centered",
        //     layout: "/auth",
        //     path: "/sign-in/centered",
        //     icon: (
        //       <Icon as={MdHome} width='16px' height='16px' color='inherit' />
        //     ),
        //     component: SignInCentered,
        //   },
        // ],
      },
      // --- Sign Up ---
      {
        // name: "RSS",
        // path: "/sign-up",
        // collapse: true,
        // items: [
        //   {
        //     name: "Default",
        //     layout: "/auth",
        //     path: "/sign-up/default",
        //     icon: (
        //       <Icon as={MdHome} width='16px' height='16px' color='inherit' />
        //     ),
        //     component: SignUpDefault,
        //   },
        //   {
        //     name: "Centered",
        //     layout: "/auth",
        //     path: "/sign-up/centered",
        //     icon: (
        //       <Icon as={MdHome} width='16px' height='16px' color='inherit' />
        //     ),
        //     component: SignUpCentered,
        //   },
        // ],
      },
      // --- Verification ---
      {
        // name: "Verification",
        // path: "/verification",
        // collapse: true,
        // items: [
        //   {
        //     name: "Default",
        //     layout: "/auth",
        //     path: "/verification/default",
        //     icon: (
        //       <Icon as={MdHome} width='16px' height='16px' color='inherit' />
        //     ),
        //     component: VerificationDefault,
        //   },
        //   {
        //     name: "Centered",
        //     layout: "/auth",
        //     path: "/verification/centered",
        //     icon: (
        //       <Icon as={MdHome} width='16px' height='16px' color='inherit' />
        //     ),
        //     component: VerificationCentered,
        //   },
        // ],
      },
      // --- Lock ---
      {
        // name: "Lock",
        // path: "/lock",
        // collapse: true,
        // items: [
        //   {
        //     name: "Default",
        //     layout: "/auth",
        //     path: "/lock/default",
        //     icon: (
        //       <Icon as={MdHome} width='16px' height='16px' color='inherit' />
        //     ),
        //     component: LockDefault,
        //   },
        //   {
        //     name: "Centered",
        //     layout: "/auth",
        //     path: "/lock/centered",
        //     icon: (
        //       <Icon as={MdHome} width='16px' height='16px' color='inherit' />
        //     ),
        //     component: LockCentered,
        //   },
        // ],
      },
      // --- Forgot Password ---
      // {
      //   name: "Forgot Password",
      //   path: "/forgot-password",
      //   collapse: true,
      //   items: [
      //     {
      //       name: "Default",
      //       layout: "/auth",
      //       path: "/forgot-password/default",
      //       icon: (
      //         <Icon as={MdHome} width='16px' height='16px' color='inherit' />
      //       ),
      //       component: ForgotPasswordDefault,
      //     },
      //     {
      //       name: "Centered",
      //       layout: "/auth",
      //       path: "/forgot-password/centered",
      //       icon: (
      //         <Icon as={MdHome} width='16px' height='16px' color='inherit' />
      //       ),
      //       component: ForgotPasswordCentered,
      //     },
      //   ],
      // },
    ],
  },
  {
    name: 'WalletScan',
    path: '/track',
    layout: '/admin',
    component: ProfileTrack,
    icon: <span className="iconfont icon-Overview">&#xe618;</span>,
    collapse: false,
    isShow: true,
    isClick: true,

    items: [
      // {
      // name: 'Explore',
      // path: '/main/account/billing',
      // layout: '/admin',
      // collapse: false,
      // component: AccountBilling,
      // items: [
      //   // {
      //   //   name: "Billing",
      //   //   layout: "/admin",
      //   //   path: "/main/account/billing",
      //   //   exact: false,
      //   //   component: AccountBilling,
      //   // },
      //   // {
      //   //   name: "Application",
      //   //   layout: "/admin",
      //   //   path: "/main/account/application",
      //   //   exact: false,
      //   //   component: AccountApplications,
      //   // },
      //   // {
      //   //   name: "Invoice",
      //   //   layout: "/admin",
      //   //   path: "/main/account/invoice",
      //   //   exact: false,
      //   //   component: AccountInvoice,
      //   // },
      //   // {
      //   //   name: "Settings",
      //   //   layout: "/admin",
      //   //   path: "/main/account/settings",
      //   //   exact: false,
      //   //   component: AccountSettings,
      //   // },
      //   // {
      //   //   name: "All Courses",
      //   //   layout: "/admin",
      //   //   path: "/main/account/all-courses",
      //   //   exact: false,
      //   //   component: AccountAllCourses,
      //   // },
      //   // {
      //   //   name: "Course Page",
      //   //   layout: "/admin",
      //   //   path: "/main/account/course-page",
      //   //   exact: false,
      //   //   component: AccountCoursePage,
      //   // },
      // ],
      // },
      // {
      //   name: 'Customized',
      //   collapse: false,
      //   layout: '/admin',
      //   path: '/main/ecommerce/new-prodcut',
      //   exact: false,
      //   component: EcommerceNewProduct,
      //   items: [
      //     // {
      //     //   name: "New Product",
      //     //   layout: "/admin",
      //     //   path: "/main/ecommerce/new-prodcut",
      //     //   exact: false,
      //     //   component: EcommerceNewProduct,
      //     // },
      //     // {
      //     //   name: "Product Settings",
      //     //   layout: "/admin",
      //     //   path: "/main/ecommerce/settings",
      //     //   exact: false,
      //     //   component: EcommerceProductSettings,
      //     // },
      //     // {
      //     //   name: "Product Page",
      //     //   layout: "/admin",
      //     //   path: "/main/ecommerce/page-example",
      //     //   exact: false,
      //     //   component: EcommerceProductPage,
      //     // },
      //     // {
      //     //   name: "Order List",
      //     //   layout: "/admin",
      //     //   path: "/main/ecommerce/order-list",
      //     //   exact: false,
      //     //   component: EcommerceOrderList,
      //     // },
      //     // {
      //     //   name: "Order Details",
      //     //   layout: "/admin",
      //     //   path: "/main/ecommerce/order-details",
      //     //   exact: false,
      //     //   component: EcommerceOrderDetails,
      //     // },
      //     // {
      //     //   name: "Referrals",
      //     //   layout: "/admin",
      //     //   path: "/main/ecommerce/referrals",
      //     //   exact: false,
      //     //   component: EcommerceReferrals,
      //     // },
      //   ],
      // },
      // {
      //   name: 'Trending',
      //   collapse: false,
      //   layout: '/admin',
      //   path: '/main/users/new-user',
      //   exact: false,
      //   component: UserNew,
      //   items: [
      //     // {
      //     //   name: "New User",
      //     //   layout: "/admin",
      //     //   path: "/main/users/new-user",
      //     //   exact: false,
      //     //   component: UserNew,
      //     // },
      //     // {
      //     //   name: "Users Overview",
      //     //   layout: "/admin",
      //     //   path: "/main/users/users-overview",
      //     //   exact: false,
      //     //   component: UsersOverview,
      //     // },
      //     // {
      //     //   name: "Users Reports",
      //     //   layout: "/admin",
      //     //   path: "/main/users/users-reports",
      //     //   exact: false,
      //     //   component: UsersReports,
      //     // },
      //   ],
      // },
      // {
      //   name: "Applications",
      //   path: "/main/applications",
      //   collapse: true,
      //   items: [
      //     {
      //       name: "Kanban",
      //       layout: "/admin",
      //       path: "/main/applications/kanban",
      //       exact: false,
      //       component: ApplicationsKanban,
      //     },
      //     {
      //       name: "Data Tables",
      //       layout: "/admin",
      //       path: "/main/applications/data-tables",
      //       exact: false,
      //       component: ApplicationsDataTables,
      //     },
      //     {
      //       name: "Calendar",
      //       layout: "/admin",
      //       path: "/main/applications/calendar",
      //       exact: false,
      //       component: ApplicationsCalendar,
      //     },
      //   ],
      // },
      // {
      //   name: "Profile",
      //   path: "/main/profile",
      //   collapse: true,
      //   items: [
      //     {
      //       name: "Profile Overview",
      //       layout: "/admin",
      //       path: "/main/profile/overview",
      //       exact: false,
      //       component: ProfileOverview,
      //     },
      //     {
      //       name: "Profile Settings",
      //       layout: "/admin",
      //       path: "/main/profile/settings",
      //       exact: false,
      //       component: ProfileSettings,
      //     },
      //   ],
      // },
      // {
      //   name: "Others",
      //   path: "/main/others",
      //   collapse: true,
      //   items: [
      //     {
      //       name: "Notifications",
      //       layout: "/admin",
      //       path: "/main/others/notifications",
      //       exact: false,
      //       component: OthersNotifications,
      //     },
      //     {
      //       name: "Pricing",
      //       layout: "/auth",q q q q
      //       path: "/main/others/pricing",
      //       exact: false,
      //       component: OthersPricing,
      //     },
      //   ],
      // },
    ],
  },
  {
    name: 'WalletScan',
    layout: '/admin',
    path: '/dashboards/default',
    icon: <span className="iconfont icon-Overview">&#xe608;</span>,
    collapse: false,
    component: DashboardsDefault,
    isShow: true,
    isClick: true,
    items: [
      // {
      //   name: "Main Overview",
      //   layout: "/admin",
      //   path: "/dashboards/default",
      //   component: DashboardsDefault,
      // },
      // {
      //   name: "Car Interface",
      //   layout: "/admin",
      //   path: "/dashboards/car-interface",
      //   component: DashboardsCarInterface,
      // },
      // {
      //   name: "Smart Home",
      //   layout: "/admin",
      //   path: "/dashboards/smart-home",
      //   component: DashboardsSmartHome,
      // },
    ],
  },

  // --- NFTs ---
  {
    name: 'Trending',
    layout: '',
    path: '#',
    icon: <span className="iconfont icon-Overview">&#xe605;</span>,
    collapse: false,
    isShow: true,
    isClick: false,
    items: [
      // {
      //   name: "Marketplace",
      //   layout: "/admin",
      //   path: "/nfts/marketplace",
      //   component: NFTMarketplace,
      //   secondary: true,
      // },
      // {
      //   name: "Collection",
      //   layout: "/admin",
      //   path: "/nfts/collection",
      //   component: NFTCollection,
      //   secondary: true,
      // },
      // {
      //   name: "NFT Page",
      //   layout: "/admin",
      //   path: "/nfts/page",
      //   component: NFTPage,
      //   secondary: true,
      // },
      // {
      //   name: "Profile",
      //   layout: "/admin",
      //   path: "/nfts/profile",
      //   component: NFTProfile,
      //   secondary: true,
      // },
    ],
  },
  // --- Search ---
  //  {
  //   name: "Search",
  //   layout: "/admin",
  //   path: "/nfts/marketplace",
  //   component: NFTMarketplace,
  //   icon: (
  //     <Icon
  //       as={MdOutlineSearch}
  //       width='20px'
  //       height='20px'
  //       color='inherit'
  //     />
  //   ),
  //   collapse: false,
  //   items: [
  //     // {
  //     //   name: "Marketplace",
  //     //   layout: "/admin",
  //     //   path: "/nfts/marketplace",
  //     //   component: NFTMarketplace,
  //     //   secondary: true,
  //     // },
  //     // {
  //     //   name: "Collection",
  //     //   layout: "/admin",
  //     //   path: "/nfts/collection",
  //     //   component: NFTCollection,
  //     //   secondary: true,
  //     // },
  //     // {
  //     //   name: "NFT Page",
  //     //   layout: "/admin",
  //     //   path: "/nfts/page",
  //     //   component: NFTPage,
  //     //   secondary: true,
  //     // },
  //     // {
  //     //   name: "Profile",
  //     //   layout: "/admin",
  //     //   path: "/nfts/profile",
  //     //   component: NFTProfile,
  //     //   secondary: true,
  //     // },
  //   ],
  // },
  // ---NFT ---
  {
    name: 'SearchErr',
    layout: '/admin',
    path: '/profile/searcherr',
    icon: <></>,
    component: SearchErr,
    collapse: false,
    isShow: false,
    items: [],
  },
  // --- Pass ---

  // --- Drop ---
  //   {
  //     name: 'Drop',
  //     icon: <span className="iconfont icon-Overview">&#xe607;</span>,
  //     collapse: false,
  //     layout: '',
  //     path: '#',
  //     isShow: true,
  //     isClick: false,
  //     items: [
  //       // --- Sign In ---
  //       {
  //         // name: "Sign In",
  //         // path: "/sign-in",
  //         // collapse: true,
  //         // items: [
  //         //   {
  //         //     name: "Default",
  //         //     layout: "/auth",
  //         //     path: "/sign-in/default",
  //         //     icon: (
  //         //       <Icon as={MdHome} width='16px' height='16px' color='inherit' />
  //         //     ),
  //         //     component: SignInDefault,
  //         //   },
  //         //   {
  //         //     name: "Centered",
  //         //     layout: "/auth",
  //         //     path: "/sign-in/centered",
  //         //     icon: (
  //         //       <Icon as={MdHome} width='16px' height='16px' color='inherit' />
  //         //     ),
  //         //     component: SignInCentered,
  //         //   },
  //         // ],
  //       },
  //       // --- Sign Up ---
  //       {
  //         // name: "RSS",
  //         // path: "/sign-up",
  //         // collapse: true,
  //         // items: [
  //         //   {
  //         //     name: "Default",
  //         //     layout: "/auth",
  //         //     path: "/sign-up/default",
  //         //     icon: (
  //         //       <Icon as={MdHome} width='16px' height='16px' color='inherit' />
  //         //     ),
  //         //     component: SignUpDefault,
  //         //   },
  //         //   {
  //         //     name: "Centered",
  //         //     layout: "/auth",
  //         //     path: "/sign-up/centered",
  //         //     icon: (
  //         //       <Icon as={MdHome} width='16px' height='16px' color='inherit' />
  //         //     ),
  //         //     component: SignUpCentered,
  //         //   },
  //         // ],
  //       },
  //       // --- Verification ---
  //       {
  //         // name: "Verification",
  //         // path: "/verification",
  //         // collapse: true,
  //         // items: [
  //         //   {
  //         //     name: "Default",
  //         //     layout: "/auth",
  //         //     path: "/verification/default",
  //         //     icon: (
  //         //       <Icon as={MdHome} width='16px' height='16px' color='inherit' />
  //         //     ),
  //         //     component: VerificationDefault,
  //         //   },
  //         //   {
  //         //     name: "Centered",
  //         //     layout: "/auth",
  //         //     path: "/verification/centered",
  //         //     icon: (
  //         //       <Icon as={MdHome} width='16px' height='16px' color='inherit' />
  //         //     ),
  //         //     component: VerificationCentered,
  //         //   },
  //         // ],
  //       },
  //       // --- Lock ---
  //       {
  //         // name: "Lock",
  //         // path: "/lock",
  //         // collapse: true,
  //         // items: [
  //         //   {
  //         //     name: "Default",
  //         //     layout: "/auth",
  //         //     path: "/lock/default",
  //         //     icon: (
  //         //       <Icon as={MdHome} width='16px' height='16px' color='inherit' />
  //         //     ),
  //         //     component: LockDefault,
  //         //   },
  //         //   {
  //         //     name: "Centered",
  //         //     layout: "/auth",
  //         //     path: "/lock/centered",
  //         //     icon: (
  //         //       <Icon as={MdHome} width='16px' height='16px' color='inherit' />
  //         //     ),
  //         //     component: LockCentered,
  //         //   },
  //         // ],
  //       },
  //       // --- Forgot Password ---
  //       // {
  //       //   name: "Forgot Password",
  //       //   path: "/forgot-password",
  //       //   collapse: true,
  //       //   items: [
  //       //     {
  //       //       name: "Default",
  //       //       layout: "/auth",
  //       //       path: "/forgot-password/default",
  //       //       icon: (
  //       //         <Icon as={MdHome} width='16px' height='16px' color='inherit' />
  //       //       ),
  //       //       component: ForgotPasswordDefault,
  //       //     },
  //       //     {
  //       //       name: "Centered",
  //       //       layout: "/auth",
  //       //       path: "/forgot-password/centered",
  //       //       icon: (
  //       //         <Icon as={MdHome} width='16px' height='16px' color='inherit' />
  //       //       ),
  //       //       component: ForgotPasswordCentered,
  //       //     },
  //       //   ],
  //       // },
  //     ],
  //   },
  {
    name: 'AllGame',
    layout: '/admin',
    path: '/profile/allGame',
    icon: <></>,
    component: AllGamePage,
    collapse: false,
    isShow: false,
    items: [],
  },

  {
    name: 'gameDetail',
    layout: '/admin',
    path: '/profile/gameDetail',
    icon: <></>,
    component: gameDetailPage,
    collapse: false,
    isShow: false,
    items: [],
  },
  {
    name: 'none',
    layout: '/auth',
    path: '/sign-in/default',
    icon: <></>,
    component: SignInDefault,
    collapse: false,
    isShow: false,
    items: [],
  },
  {
    name: 'none',
    layout: '/auth',
    path: '/sign-up/default',
    icon: <></>,
    component: SignUpDefault,
    collapse: false,
    isShow: false,
    items: [],
  },

  {
    name: 'none',
    layout: '/admin',
    path: '/info',
    icon: <></>,
    component: ProfileOverview,
    collapse: false,
    isShow: false,
    items: [],
  },
  {
    name: 'none',
    layout: '/auth',
    path: '/forgot-password/default',
    icon: <></>,
    component: ForgotPasswordDefault,
    collapse: false,
    isShow: false,
    items: [],
  },
  {
    name: 'none',
    layout: '/auth',
    path: '/lock/default',
    icon: <></>,
    component: LockDefault,
    collapse: false,
    isShow: false,
    items: [],
  },
  {
    name: 'none',
    layout: '/admin',
    path: '/pass',
    icon: <></>,
    component: Pass,
    collapse: false,
    isShow: false,
    items: [],
  },
  // --- RSS ---
  // {
  //   name: 'RSS',
  //   layout: '/admin',
  //   path: '/nfts/marketplace',
  //   component: NFTMarketplace,
  //   icon: (
  //     <Icon as={MdAccountCircle} width="20px" height="20px" color="inherit" />
  //   ),
  //   collapse: false,
  //   items: [
  //     // {
  //     //   name: "Marketplace",
  //     //   layout: "/admin",
  //     //   path: "/nfts/marketplace",
  //     //   component: NFTMarketplace,
  //     //   secondary: true,
  //     // },
  //     // {
  //     //   name: "Collection",
  //     //   layout: "/admin",
  //     //   path: "/nfts/collection",
  //     //   component: NFTCollection,
  //     //   secondary: true,
  //     // },
  //     // {
  //     //   name: "NFT Page",
  //     //   layout: "/admin",
  //     //   path: "/nfts/page",
  //     //   component: NFTPage,
  //     //   secondary: true,
  //     // },
  //     // {
  //     //   name: "Profile",
  //     //   layout: "/admin",
  //     //   path: "/nfts/profile",
  //     //   component: NFTProfile,
  //     //   secondary: true,
  //     // },
  //   ],
  // },
]

export default routes
