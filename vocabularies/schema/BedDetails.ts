import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface BedDetails extends Schema.Intangible, RdfResource {
  numberOfBeds: number;
  typeOfBed: Schema.BedType;
  typeOfBedLiteral: string;
}

export default function BedDetailsMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BedDetailsClass extends IntangibleMixin(Resource) implements BedDetails {
    @property.literal({ type: Number })
    numberOfBeds!: number;
    @property.resource()
    typeOfBed!: Schema.BedType;
    @property.literal({ path: schema.typeOfBed })
    typeOfBedLiteral!: string;
  }
  return BedDetailsClass
}

class BedDetailsImpl extends BedDetailsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<BedDetails>) {
    super(arg)
    this.types.add(schema.BedDetails)
    initializeProperties<BedDetails>(this, init)
  }
}
BedDetailsMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BedDetails)
BedDetailsMixin.Class = BedDetailsImpl
