import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface BedDetails extends Schema.Intangible, RdfResource {
  numberOfBeds: number;
  typeOfBed: string;
  typeOfBedTerm: Schema.BedType;
}

export function BedDetailsMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BedDetailsClass extends IntangibleMixin(Resource) implements BedDetails {
    @property.literal({ type: Number })
    numberOfBeds!: number;
    @property.literal()
    typeOfBed!: string;
    @property({ path: schema.typeOfBed })
    typeOfBedTerm!: Schema.BedType;
  }
  return BedDetailsClass
}

class BedDetailsImpl extends BedDetailsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BedDetails>) {
    super(arg, init)
    this.types.add(schema.BedDetails)
  }
}
BedDetailsMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BedDetails)
BedDetailsMixin.Class = BedDetailsImpl
