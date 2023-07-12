import Environment from '@rdfjs/environment/Environment.js'
import { HydraFactory } from '../../Factory.js'
import { RdfineFactory } from '@tpluscode/rdfine/environment';
import { ClownfaceFactory, DatasetFactory, NamespaceFactory, TermMapFactory } from 'rdf-ext';
import DataFactory from '@rdfjs/data-model/Factory.js';
import TermSetFactory from '@rdfjs/term-set/Factory.js';

export const environment = new Environment([
  RdfineFactory,
  HydraFactory,
  DataFactory,
  DatasetFactory,
  NamespaceFactory,
  ClownfaceFactory,
  TermSetFactory,
  TermMapFactory,
])
