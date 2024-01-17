import Environment from '@rdfjs/environment/Environment.js'
import DataFactory from '@rdfjs/data-model/Factory.js'
import DatasetFactory from '@rdfjs/dataset/Factory.js'
import ClownfaceFactory from 'clownface/Factory.js'
import NamespaceFactory from '@rdfjs/namespace/Factory.js'
import TermMapFactory from '@rdfjs/term-map/Factory.js'
import TermSetFactory from '@rdfjs/term-set/Factory.js'
import NsBuildersFactory from '@tpluscode/rdf-ns-builders'
import FormatsFactory from '@rdfjs/formats/Factory.js'
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
    NsBuildersFactory,
    FormatsFactory,
  ])
}

export default createEnv()
