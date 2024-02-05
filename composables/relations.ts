import { useStorage } from '@vueuse/core'

// More a utils than a composable
// function toRelationPackage(packageJson: PackageJson, source: RelationPackageSource, unjsNames: string[]): RelationPackage {
//   return {
//     name: packageJson.name,
//     description: packageJson.description,
//     dependencies: Object.keys(packageJson.dependencies || {}).filter(dep => unjsNames.includes(dep)),
//     devDependencies: Object.keys(packageJson.devDependencies || {}).filter(dep => unjsNames.includes(dep)),
//     source,
//   }
// }

/**
 * Manage the menu state.
 */
export function useRelationsMenu() {
  const open = ref(false)

  const storage = useStorage('unjs-relations-menu', true)

  watch(open, (value) => {
    storage.value = value
  })

  onMounted(() => {
    open.value = storage.value
  })

  defineShortcuts({
    meta_m: {
      handler: () => {
        open.value = !open.value
      },
    },
  })

  return open
}

/**
 * Manage the legend state.
 */
export function useRelationsLegend() {
  const open = ref(false)

  const storage = useStorage('unjs-relations-legend', true)

  watch(open, (value) => {
    storage.value = value
  })

  onMounted(() => {
    open.value = storage.value
  })

  defineShortcuts({
    meta_l: {
      handler: () => {
        open.value = !open.value
      },
    },
  })

  return open
}
