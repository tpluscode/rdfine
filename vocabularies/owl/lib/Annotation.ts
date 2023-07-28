import '../extensions/rdfs/Resource.js';
import { ResourceMixinEx } from '../extensions/rdfs/Resource.js';
import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface Annotation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, rdfine.RdfResource<D> {
}

declare global {
  interface OwlVocabulary {
    Annotation: Factory<Owl.Annotation>;
  }
}

export function AnnotationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Annotation & RdfResourceCore> & Base {
  @rdfine.namespace(owl)
  class AnnotationClass extends ResourceMixinEx(RdfsResourceMixin(Resource)) {
  }
  return AnnotationClass as any
}
AnnotationMixin.appliesTo = owl.Annotation
AnnotationMixin.createFactory = (env: RdfineEnvironment) => createFactory<Annotation>([RdfsResourceMixin, AnnotationMixin], { types: [owl.Annotation] }, env)
