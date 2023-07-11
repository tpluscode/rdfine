import ResourceFactoryImpl, {ResourceFactory} from './lib/ResourceFactory'
import RdfResourceImpl from './RdfResource';
import type {Environment} from '@rdfjs/environment/Environment';
import {DataFactory} from '@rdfjs/types';
import TermSetFactory from '@rdfjs/term-set/Factory';
import {TermMapFactory} from '@rdfjs/term-map/Factory';
import {NamespaceFactory} from '@rdfjs/namespace/Factory';
import {ClownfaceFactory} from 'rdf-ext/ClownfaceFactory';

export interface Rdfine {
  _factory: ResourceFactory
}

export interface RdfineFactory {
  rdfine: Rdfine
}

export class RdfineFactory {
  init(this: any) {
    const env = this

    class Base extends RdfResourceImpl {
      static get env() {
        return env
      }
    }

    this.rdfine = {
      _factory: new ResourceFactoryImpl(Base),
    }
  }

  static get exports() {
    return ['rdfine']
  }
}

export type RdfineEnvironment = Environment<RdfineFactory | DataFactory | TermSetFactory | TermMapFactory | NamespaceFactory | ClownfaceFactory>
