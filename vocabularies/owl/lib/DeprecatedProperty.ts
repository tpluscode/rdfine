import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface DeprecatedProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdf.Property<D>, RdfResource<D> {
}

export function DeprecatedPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class DeprecatedPropertyClass extends RdfPropertyMixin(Resource) implements DeprecatedProperty {
  }
  return DeprecatedPropertyClass
}

class DeprecatedPropertyImpl extends DeprecatedPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DeprecatedProperty>) {
    super(arg, init)
    this.types.add(owl.DeprecatedProperty)
  }

  static readonly __mixins: Mixin[] = [DeprecatedPropertyMixin, RdfPropertyMixin];
}
DeprecatedPropertyMixin.appliesTo = owl.DeprecatedProperty
DeprecatedPropertyMixin.Class = DeprecatedPropertyImpl
