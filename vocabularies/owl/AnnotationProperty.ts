import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import * as Rdf from '@rdfine/rdf';

export interface AnnotationProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdf.Property<D>, RdfResource<D> {
}

export function AnnotationPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class AnnotationPropertyClass extends Rdf.PropertyMixin(Resource) implements AnnotationProperty {
  }
  return AnnotationPropertyClass
}

class AnnotationPropertyImpl extends AnnotationPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AnnotationProperty>) {
    super(arg, init)
    this.types.add(owl.AnnotationProperty)
  }

  static readonly __mixins: Mixin[] = [AnnotationPropertyMixin, Rdf.PropertyMixin];
}
AnnotationPropertyMixin.appliesTo = owl.AnnotationProperty
AnnotationPropertyMixin.Class = AnnotationPropertyImpl
