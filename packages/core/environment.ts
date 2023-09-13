import type { DefaultEnv, DerivedEnvironment } from '@zazuko/env'
import RdfResourceImpl from './RdfResource.js'
import ResourceFactoryImpl, { Constructor, ResourceFactory } from './lib/ResourceFactory.js'

export interface Rdfine {
  (): {
    createEntity: ResourceFactory['createEntity']
    factory: ResourceFactory
  }
  Resource: Constructor
}

export interface RdfineFactory {
  rdfine: Rdfine
}

export class RdfineFactory {
  init(this: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const env = this

    class Base extends RdfResourceImpl {
      static get env() {
        return env
      }
    }

    // eslint-disable-next-line prefer-const
    let factory: ResourceFactory
    this.rdfine = () => ({
      factory,
      createEntity: factory.createEntity.bind(factory),
    })
    this.rdfine.Resource = Base
    factory = new ResourceFactoryImpl(env)
  }

  static get exports() {
    return ['_initVocabulary']
  }

  _initVocabulary(vocabulary: Record<string, any>) {
    this.rdfine().factory.addMixin(...Object.values(vocabulary))

    return Object.fromEntries(Object.entries(vocabulary).reduce((previous, [name, mixin]) => {
      if ('createFactory' in mixin) {
        return [...previous, [name.replace(/Mixin$/, ''), mixin.createFactory(this)]]
      }

      return previous
    }, [] as Array<[string, any]>)) as any
  }
}

export type RdfineEnvironment = DerivedEnvironment<DefaultEnv, RdfineFactory>
