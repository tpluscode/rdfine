import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LodgingBusinessMixin } from './LodgingBusiness';

export interface BedAndBreakfast<ID extends ResourceNode = ResourceNode> extends Schema.LodgingBusiness<ID>, RdfResource<ID> {
}

export function BedAndBreakfastMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BedAndBreakfastClass extends LodgingBusinessMixin(Resource) implements BedAndBreakfast {
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
