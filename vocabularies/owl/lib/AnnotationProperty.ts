import { PropertyMixinEx } from '../extensions/rdf';
import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface AnnotationProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdf.Property<D>, RdfResource<D> {
}

export function AnnotationPropertyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AnnotationProperty> & RdfResourceCore> & Base {
  @namespace(owl)
  class AnnotationPropertyClass extends PropertyMixinEx(RdfPropertyMixin(Resource)) implements Partial<AnnotationProperty> {
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

export const fromPointer = createFactory<AnnotationProperty>([RdfPropertyMixin, AnnotationPropertyMixin], { types: [owl.AnnotationProperty] });
