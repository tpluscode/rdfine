import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface AnnotationProperty<ID extends ResourceNode = ResourceNode> extends Rdf.Property<ID>, RdfResource<ID> {
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
