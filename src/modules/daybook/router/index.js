export default {
  name: 'daybook',
  component: () => import(/* webpackChunkName:'daybook' */ '@/modules/daybook/layouts/DayBookLayout.vue'),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () => import(/* webpackChunkName:'daybook-noentry' */ '@/modules/daybook/views/NoEntrySelected.vue'),
    },
    {
      path: 'entry/:id',
      name: 'entry-view',
      component: () => import(/* webpackChunkName:'daybook-entry' */ '@/modules/daybook/views/EntryView.vue'),
      props: (route) => {
        const id = Number(route.params.id)
        return isNaN(id) ? {id: 1} : {id}
      }
    }
  ]
}