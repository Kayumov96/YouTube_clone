import home from '../assets/icons/home.svg'
import explore from '../assets/icons/explore.svg'
import subscription from '../assets/icons/subscription.svg'
import library from '../assets/icons/library.svg'
import history from '../assets/icons/history.svg'
import yourvideos from '../assets/icons/yourvideos.svg'
import watchlater from '../assets/icons/watchlater.svg'
import liked from '../assets/icons/liked.svg'

export const sidebar = [
    { id: 1, title: 'Home', src: home, child: [], hidden: false, element: '' },
    { id: 2, title: 'Explore', src: explore, child: [], hidden: false, element: '' },
    // { id: 3, title: 'Shorts', src:'', child: [], hidden: false, element: '' },
    { id: 3, title: 'Subscription', src: subscription, child: [], hidden: false, element: '' },
       
];
export const sidebarfunctions = [
    { id: 4, title: 'Library', src: library, child: [], hidden: false, element: '' },
    { id: 5, title: 'History', src: history, child: [], hidden: false, element: '' },
    { id: 6, title: 'Your videos', src: yourvideos, child: [], hidden: false, element: '' },
    { id: 7, title: 'Watch later', src: watchlater, child: [], hidden: false, element: '' },
    { id: 8, title: 'Liked videos', src: liked, child: [], hidden: false, element: '' },
]