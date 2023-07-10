import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { HouseMixin } from './House.js';

export interface SingleFamilyResidence<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.House<D>, rdfine.RdfResource<D> {
  numberOfRooms: Schema.QuantitativeValue<D> | undefined;
  numberOfRoomsLiteral: number | undefined;
  occupancy: Schema.QuantitativeValue<D> | undefined;
}

export function SingleFamilyResidenceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SingleFamilyResidence & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SingleFamilyResidenceClass extends HouseMixin(Resource) {
    @rdfine.property.resource()
    numberOfRooms: Schema.QuantitativeValue | undefined;
    @rdfine.property.literal({ path: schema.numberOfRooms, type: Number })
    numberOfRoomsLiteral: number | undefined;
    @rdfine.property.resource()
    occupancy: Schema.QuantitativeValue | undefined;
  }
  return SingleFamilyResidenceClass as any
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

export const fromPointer = createFactory<SingleFamilyResidence>([HouseMixin, SingleFamilyResidenceMixin], { types: [schema.SingleFamilyResidence] });
