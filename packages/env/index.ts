import { RdfineFactory } from '@tpluscode/rdfine'
import type { FactoryConstructor } from '@rdfjs/environment/Environment'
import { create } from '@zazuko/env'
import { RdfineEnvironment } from '@tpluscode/rdfine/environment'

export function createEnv<T extends FactoryConstructor>(...factories: T[]): RdfineEnvironment {
  return <any> create(RdfineFactory as any, ...factories)
}
