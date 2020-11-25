import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { RadioChannelMixin } from './RadioChannel';

export interface FMRadioChannel<ID extends ResourceNode = ResourceNode> extends Schema.RadioChannel<ID>, RdfResource<ID> {
}

export function FMRadioChannelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FMRadioChannelClass extends RadioChannelMixin(Resource) implements FMRadioChannel {
  }
  return FMRadioChannelClass
}

class FMRadioChannelImpl extends FMRadioChannelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FMRadioChannel>) {
    super(arg, init)
    this.types.add(schema.FMRadioChannel)
  }

  static readonly __mixins: Mixin[] = [FMRadioChannelMixin, RadioChannelMixin];
}
FMRadioChannelMixin.appliesTo = schema.FMRadioChannel
FMRadioChannelMixin.Class = FMRadioChannelImpl
