import type { Environment } from '@rdfjs/environment/Environment.js'
import { DataFactory } from '@rdfjs/types'
import type TermSetFactory from '@rdfjs/term-set/Factory.js'
import type { TermMapFactory } from '@rdfjs/term-map/Factory.js'
import type { NamespaceFactory } from '@rdfjs/namespace/Factory.js'
import type { ClownfaceFactory } from 'rdf-ext/ClownfaceFactory.js'
import RdfResourceImpl from './RdfResource.js'
import ResourceFactoryImpl, { ResourceFactory } from './lib/ResourceFactory.js'

export interface Rdfine {
  _factory: ResourceFactory
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

    this.rdfine = {
      _factory: new ResourceFactoryImpl(Base, env),
    }
  }

  static get exports() {
    return ['rdfine']
  }
}

export type RdfineEnvironment = Environment<RdfineFactory | DataFactory | TermSetFactory | TermMapFactory | NamespaceFactory | ClownfaceFactory>
