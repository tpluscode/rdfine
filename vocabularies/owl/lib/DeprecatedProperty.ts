import '../extensions/rdf/Property.js';
import { PropertyMixinEx } from '../extensions/rdf/Property.js';
import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '../index.js';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface DeprecatedProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdf.Property<D>, RdfResource<D> {
}

export function DeprecatedPropertyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DeprecatedProperty> & RdfResourceCore> & Base {
  @namespace(owl)
  class DeprecatedPropertyClass extends PropertyMixinEx(RdfPropertyMixin(Resource)) implements Partial<DeprecatedProperty> {
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

export const fromPointer = createFactory<DeprecatedProperty>([RdfPropertyMixin, DeprecatedPropertyMixin], { types: [owl.DeprecatedProperty] });
