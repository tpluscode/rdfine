import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { HouseMixin } from './House';

export interface SingleFamilyResidence<ID extends ResourceNode = ResourceNode> extends Schema.House<ID>, RdfResource<ID> {
  numberOfRooms: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  numberOfRoomsLiteral: number | undefined;
  occupancy: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
}

export function SingleFamilyResidenceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SingleFamilyResidenceClass extends HouseMixin(Resource) implements SingleFamilyResidence {
    @property.resource()
    numberOfRooms: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numberOfRooms, type: Number })
    numberOfRoomsLiteral: number | undefined;
    @property.resource()
    occupancy: Schema.QuantitativeValue | undefined;
  }
  return SingleFamilyResidenceClass
}

class SingleFamilyResidenceImpl extends SingleFamilyResidenceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SingleFamilyResidence>) {
    super(arg, init)
    this.types.add(schema.SingleFamilyResidence)
  }

  static readonly __mixins: Mixin[] = [SingleFamilyResidenceMixin, HouseMixin];
}
SingleFamilyResidenceMixin.appliesTo = schema.SingleFamilyResidence
SingleFamilyResidenceMixin.Class = SingleFamilyResidenceImpl
