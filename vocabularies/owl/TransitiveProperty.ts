import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import { ObjectPropertyMixin } from './ObjectProperty';

export interface TransitiveProperty extends Owl.ObjectProperty, RdfResource {
}

export function TransitivePropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class TransitivePropertyClass extends ObjectPropertyMixin(Resource) implements TransitiveProperty {
  }
  return TransitivePropertyClass
}

class TransitivePropertyImpl extends TransitivePropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TransitiveProperty>) {
    super(arg, init)
    this.types.add(owl.TransitiveProperty)
  }

  static readonly __mixins: Mixin[] = [TransitivePropertyMixin, ObjectPropertyMixin];
}
TransitivePropertyMixin.appliesTo = owl.TransitiveProperty
TransitivePropertyMixin.Class = TransitivePropertyImpl
