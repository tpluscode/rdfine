import Environment from '@rdfjs/environment/Environment.js'
import { RdfineFactory } from '@tpluscode/rdfine'
import DataFactory from '@rdfjs/data-model/Factory.js'
import DatasetFactory from '@rdfjs/dataset/Factory.js'
import NamespaceFactory from '@rdfjs/namespace/Factory.js'
import ClownfaceFactory from 'clownface/Factory.js'
import TermMapFactory from '@rdfjs/term-map/Factory.js'
import TermSetFactory from '@rdfjs/term-set/Factory.js'
import type { RdfineEnvironment } from '@tpluscode/rdfine/environment'

interface FactoryConstructor<F = object> {
  new (...args: any[]): F
}

export function environment<T extends FactoryConstructor>(vocab: T): RdfineEnvironment {
  return <any> new Environment([
    RdfineFactory,
    vocab,
    DataFactory,
    DatasetFactory,
    NamespaceFactory,
    ClownfaceFactory,
    TermSetFactory,
    TermMapFactory,
  ])
}

environment.withoutVocab = (): RdfineEnvironment =>
  new Environment([
    RdfineFactory,
    DataFactory,
    DatasetFactory,
    NamespaceFactory,
    ClownfaceFactory,
    TermSetFactory,
    TermMapFactory,
  ])
