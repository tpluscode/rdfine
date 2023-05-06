import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LodgingBusinessMixin } from './LodgingBusiness.js';

export interface BedAndBreakfast<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LodgingBusiness<D>, RdfResource<D> {
}

export function BedAndBreakfastMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BedAndBreakfast> & RdfResourceCore> & Base {
  @namespace(schema)
  class BedAndBreakfastClass extends LodgingBusinessMixin(Resource) implements Partial<BedAndBreakfast> {
  }
  return BedAndBreakfastClass
}

class BedAndBreakfastImpl extends BedAndBreakfastMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BedAndBreakfast>) {
    super(arg, init)
    this.types.add(schema.BedAndBreakfast)
  }

  static readonly __mixins: Mixin[] = [BedAndBreakfastMixin, LodgingBusinessMixin];
}
BedAndBreakfastMixin.appliesTo = schema.BedAndBreakfast
BedAndBreakfastMixin.Class = BedAndBreakfastImpl

export const fromPointer = createFactory<BedAndBreakfast>([LodgingBusinessMixin, BedAndBreakfastMixin], { types: [schema.BedAndBreakfast] });
