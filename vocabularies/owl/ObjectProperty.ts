import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '.';
import type * as Rdf from '@rdfine/rdf';
import RdfPropertyMixin from '@rdfine/rdf/Property';
import RdfListMixin from '@rdfine/rdf/List';

export interface ObjectProperty extends Rdf.Property, RdfResource {
  inverseOf: Owl.ObjectProperty;
  propertyChainAxiom: Rdf.List;
}

export default function ObjectPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class ObjectPropertyClass extends RdfPropertyMixin(Resource) implements ObjectProperty {
    @property.resource({ as: [ObjectPropertyMixin] })
    inverseOf!: Owl.ObjectProperty;
    @property.resource({ as: [RdfListMixin] })
    propertyChainAxiom!: Rdf.List;
  }
  return ObjectPropertyClass
}

class ObjectPropertyImpl extends ObjectPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ObjectProperty>) {
    super(arg, init)
    this.types.add(owl.ObjectProperty)
  }
}
ObjectPropertyMixin.shouldApply = (r: RdfResource) => r.types.has(owl.ObjectProperty)
ObjectPropertyMixin.Class = ObjectPropertyImpl
