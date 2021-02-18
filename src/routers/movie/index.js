/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2021-02-10 15:33:42
 * @,@LastEditTime: ,: 2021-02-18 14:28:05
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \miaomiao\src\routers\movie\index.js
 */
export default{
    path : '/movie',
    component : () => import('@/views/Movie'),
    children : [
        {
            path : 'city',
            component : () => import('@/components/City')
        },
        {
            path : 'nowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path : 'comingSoon',
            component : () => import('@/components/ComingSoon')
        },
        {
            path : 'search',
            component : () => import('@/components/Search')
        },
        {
            path : '/movie',
            redirect : 'movie/nowPlaying'
        }
    ]
    
}