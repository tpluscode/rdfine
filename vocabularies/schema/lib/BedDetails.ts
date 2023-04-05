import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface BedDetails<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  numberOfBeds: number | undefined;
  typeOfBed: string | undefined;
  typeOfBedTerm: Schema.BedType | undefined;
}

export function BedDetailsMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BedDetails> & RdfResourceCore> & Base {
  @namespace(schema)
  class BedDetailsClass extends IntangibleMixin(Resource) implements Partial<BedDetails> {
    @property.literal({ type: Number })
    numberOfBeds: number | undefined;
    @property.literal()
    typeOfBed: string | undefined;
    @property({ path: schema.typeOfBed })
    typeOfBedTerm: Schema.BedType | undefined;
  }
  return BedDetailsClass
}

class BedDetailsImpl extends BedDetailsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BedDetails>) {
    super(arg, init)
    this.types.add(schema.BedDetails)
  }

  static readonly __mixins: Mixin[] = [BedDetailsMixin, IntangibleMixin];
}
BedDetailsMixin.appliesTo = schema.BedDetails
BedDetailsMixin.Class = BedDetailsImpl

export const fromPointer = createFactory<BedDetails>([IntangibleMixin, BedDetailsMixin], { types: [schema.BedDetails] });
