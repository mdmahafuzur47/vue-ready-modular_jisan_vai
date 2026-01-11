export default ({
  name,
  Name,
}) => `import ${Name}Page from './pages/${Name}Page.vue'
import DashboardLayout from '@/shared/layouts/DashboardLayout.vue'

export default [
  {
    path: '/${name}s',
    component: DashboardLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: '${Name}List',
        component: ${Name}Page,
      },
    ],
  },
]
`;
