import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import * as Rdfs from '@rdfine/rdfs';

export interface Annotation extends Rdfs.Resource, RdfResource {
}

export function AnnotationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class AnnotationClass extends Rdfs.ResourceMixin(Resource) implements Annotation {
  }
  return AnnotationClass
}

class AnnotationImpl extends AnnotationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Annotation>) {
    super(arg, init)
    this.types.add(owl.Annotation)
  }

  static readonly __mixins: Mixin[] = [AnnotationMixin, Rdfs.ResourceMixin];
}
AnnotationMixin.appliesTo = owl.Annotation
AnnotationMixin.Class = AnnotationImpl
