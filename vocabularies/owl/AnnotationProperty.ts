import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/Property';

export interface AnnotationProperty extends Rdf.Property, RdfResource {
}

export function AnnotationPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class AnnotationPropertyClass extends RdfPropertyMixin(Resource) implements AnnotationProperty {
  }
  return AnnotationPropertyClass
}

class AnnotationPropertyImpl extends AnnotationPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AnnotationProperty>) {
    super(arg, init)
    this.types.add(owl.AnnotationProperty)
  }

  static readonly __mixins: Mixin[] = [AnnotationPropertyMixin, RdfPropertyMixin];
}
AnnotationPropertyMixin.appliesTo = owl.AnnotationProperty
AnnotationPropertyMixin.Class = AnnotationPropertyImpl
