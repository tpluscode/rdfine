import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '.';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/Resource';

export interface Annotation extends Rdfs.Resource, RdfResource {
}

export function AnnotationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class AnnotationClass extends RdfsResourceMixin(Resource) implements Annotation {
  }
  return AnnotationClass
}

class AnnotationImpl extends AnnotationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Annotation>) {
    super(arg, init)
    this.types.add(owl.Annotation)
  }
}
AnnotationMixin.shouldApply = (r: RdfResource) => r.types.has(owl.Annotation)
AnnotationMixin.Class = AnnotationImpl
