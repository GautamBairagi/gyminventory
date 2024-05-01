import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  {
    id: 'page',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'Authentication',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item',
        url: '/admin',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },
     
     
      
    ]
  },

  {
    id: 'page',
    title: 'Member Management',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'Authentication',
        title: 'Member Management',
        type: 'collapse',
        icon: 'ti ti-user',
        children: [
          {
            id: 'login',
            title: 'Member',
            type: 'item',
            url: 'member',
            target: false,
            icon: 'ti ti-user', 
            breadcrumbs: false
          },
          {
            id: 'register',
            title: 'Membership Type',
            type: 'item',
            url: 'membership',
            icon: 'ti ti-package', 
            target: false,
            breadcrumbs: false
          },
          {
            id: 'register',
            title: 'Staff Member',
            type: 'item',
            url: 'staff',
            icon: 'ti ti-users', 
            target: false,
            breadcrumbs: false
          }
        ]
      }
    ]
  },




  {
    id: 'page',
    title: 'Payment',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'Authentication',
        title: 'Payment',
        type: 'collapse',
        icon: 'ti ti-credit-card',
        children: [
          
          {
            id: 'register',
            title: 'Membership Payment',
            type: 'item',
            url: 'payment',
            // icon: 'ti ti-credit-card',
            target: false,
            breadcrumbs: false
          },
  
        ]
      }
    ]
  },


  {
    id: 'page',
    title: 'inventory Store & Products',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'Authentication',
        title: 'Store & Products',
        type: 'collapse',
        icon: 'ti ti-shopping-cart',
        children: [
          
          {
            id: 'register',
            title: 'Product',
            type: 'item',
            url: 'product',
            icon: 'ti ti-user',
            target: false,
            breadcrumbs: false
          },
          {
            id: 'login',
            title: 'Store',
            type: 'item',
            url: '/guest/login',
            icon: 'ti ti-shopping-cart',
            target: false,
            breadcrumbs: false
          },
          {
            id: 'login',
            title: 'Print Notes',
            type: 'item',
            url: 'PrintNotes',
            icon: 'ti ti-shopping-cart',
            target: false,
            breadcrumbs: false
          },
          {
            id: 'login',
            title: 'Register Payment',
            type: 'item',
            url: 'RegisterPayment',
            icon: 'ti ti-shopping-cart',
            target: false,
            breadcrumbs: false
          },
          {
            id: 'login',
            title: 'Stock Mangment',
            type: 'item',
            url: 'StockMangment',
            icon: 'ti ti-shopping-cart',
            target: false,
            breadcrumbs: false
          },
       
          {
            id: 'login',
            title: 'Membership Managment',
            type: 'item',
            url: 'Membershipmanagment',
            icon: 'ti ti-shopping-cart',
            target: false,
            breadcrumbs: false
          },
        ]
      }
    ]
  },
  
 
  {
    id: 'page',
    title: 'Workout',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'Authentication',
        title: 'Workout',
        type: 'collapse',
        icon: 'ti ti-credit-card',
        children: [
          {
            id: 'register',
            title: 'Workout',
            type: 'item',
            url: 'workoutlog',
            icon: 'ti ti-credit-card',
            target: false,
            breadcrumbs: false
          },
  
        ]

      }
    ]
  },


  {
    id: 'dashboard',
    title: 'Attendance',
    type: 'group',
    icon: 'icon-navigation',
   
    children: [
      {
        id: 'default',
        title: 'Attendance',
        type: 'item',
        classes: 'nav-item',
        url: '/default',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },
    ]
  },
  // {
  //   id: 'elements',
  //   title: 'Elements',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'typography',
  //       title: 'Typography',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/typography',
  //       icon: 'ti ti-typography'
  //     },
  //     {
  //       id: 'color',
  //       title: 'Colors',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/color',
  //       icon: 'ti ti-brush'
  //     },
  //     {
  //       id: 'tabler',
  //       title: 'Tabler',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: 'https://tabler-icons.io/',
  //       icon: 'ti ti-plant-2',
  //       target: true,
  //       external: true
  //     }
  //   ]
  // },
  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: '/sample-page',
  //       classes: 'nav-item',
  //       icon: 'ti ti-brand-chrome'
  //     },
  //     // {
  //     //   id: 'document',
  //     //   title: 'Document',
  //     //   type: 'item',
  //     //   classes: 'nav-item',
  //     //   url: 'https://codedthemes.gitbook.io/berry-angular/',
  //     //   icon: 'ti ti-vocabulary',
  //     //   target: true,
  //     //   external: true
  //     // }
  //   ]
  // }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
