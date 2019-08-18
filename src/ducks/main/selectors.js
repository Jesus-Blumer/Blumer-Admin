import { createImmutableSelector } from 'lib/helpers'


export const rootSelector = (state) =>  state.get('main')

export const loadingSelector = createImmutableSelector(
  rootSelector,
  main => main.get('loading')
)


export const itemsSelector = createImmutableSelector(
  rootSelector,
  main => main.get('items')
)
