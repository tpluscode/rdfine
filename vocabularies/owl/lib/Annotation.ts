import '../extensions/rdfs/Resource.js';
import { ResourceMixinEx } from '../extensions/rdfs/Resource.js';
import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface Annotation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, rdfine.RdfResource<D> {
}

export function AnnotationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Annotation> & RdfResourceCore> & Base {
  @rdfine.namespace(owl)
  class AnnotationClass extends ResourceMixinEx(RdfsResourceMixin(Resource)) implements Partial<Annotation> {
  }
  return AnnotationClass
}

class AnnotationImpl extends AnnotationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Annotation>) {
    super(arg, init)
    this.types.add(owl.Annotation)
  }

  static readonly __mixins: Mixin[] = [AnnotationMixin, RdfsResourceMixin];
}
AnnotationMixin.appliesTo = owl.Annotation
AnnotationMixin.Class = AnnotationImpl

export const fromPointer = createFactory<Annotation>([RdfsResourceMixin, AnnotationMixin], { types: [owl.Annotation] });
