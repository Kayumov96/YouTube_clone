import Home from '../components/Home'
import Blogs from '../components/Blogs'
import PlantCare from '../components/PlantCare'
import Shop from '../components/Shop'

export const navbar = [
    {id:1, title: 'Home', path: '/home', element: <Home/>, child:[], hidden:false},
    {id:2, title: 'Shop', path:'/shop', element: <Shop/>, child:[], hidden:false},
    { id: 3, title: 'Plant Care', path:'/plantcare', element: <PlantCare/>, child:[], hidden:false},
    {id:4, title: 'Blogs', path:'/blogs', element: <Blogs/>, child:[], hidden:false},
];
