import { RdfineFactory } from '@tpluscode/rdfine'
import type { FactoryConstructor } from '@rdfjs/environment/Environment'
import { create } from '@zazuko/env'

export function createEnv<T extends FactoryConstructor>(...factories: T[]) {
  return create(...[RdfineFactory, ...factories])
}
