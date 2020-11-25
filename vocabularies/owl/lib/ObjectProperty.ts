import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';
import { ListMixin as RdfListMixin } from '@rdfine/rdf/lib/List';

export interface ObjectProperty<ID extends ResourceNode = ResourceNode> extends Rdf.Property<ID>, RdfResource<ID> {
  inverseOf: Owl.ObjectProperty<SiblingNode<ID>> | undefined;
  propertyChainAxiom: Rdf.List<SiblingNode<ID>> | undefined;
}

export function ObjectPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class ObjectPropertyClass extends RdfPropertyMixin(Resource) implements ObjectProperty {
    @property.resource({ as: [ObjectPropertyMixin] })
    inverseOf: Owl.ObjectProperty | undefined;
    @property.resource({ as: [RdfListMixin] })
    propertyChainAxiom: Rdf.List | undefined;
  }
  return ObjectPropertyClass
}

class ObjectPropertyImpl extends ObjectPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ObjectProperty>) {
    super(arg, init)
    this.types.add(owl.ObjectProperty)
  }

  static readonly __mixins: Mixin[] = [ObjectPropertyMixin, RdfPropertyMixin];
}
ObjectPropertyMixin.appliesTo = owl.ObjectProperty
ObjectPropertyMixin.Class = ObjectPropertyImpl
