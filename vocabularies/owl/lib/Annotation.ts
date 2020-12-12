import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface Annotation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
}

export function AnnotationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Annotation> & RdfResourceCore> & Base {
  @namespace(owl)
  class AnnotationClass extends RdfsResourceMixin(Resource) implements Partial<Annotation> {
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
