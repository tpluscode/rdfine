import Environment from '@rdfjs/environment/Environment.js'
import DataFactory from '@rdfjs/data-model/Factory.js'
import { ClownfaceFactory, DatasetFactory, NamespaceFactory, TermMapFactory } from 'rdf-ext'
import TermSetFactory from '@rdfjs/term-set/Factory.js'
import { RdfineFactory } from '../../environment.js'

export function createEnv() {
  return new Environment([
    RdfineFactory,
    DataFactory,
    DatasetFactory,
    NamespaceFactory,
    ClownfaceFactory,
    TermSetFactory,
    TermMapFactory,
  ])
}

export default createEnv()
