import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface BroadcastChannel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  broadcastChannelId: string | undefined;
  broadcastFrequency: Schema.BroadcastFrequencySpecification<D> | undefined;
  broadcastFrequencyLiteral: string | undefined;
  broadcastServiceTier: string | undefined;
  genre: string | undefined;
  genreTerm: RDF.NamedNode | undefined;
  inBroadcastLineup: Schema.CableOrSatelliteService<D> | undefined;
  providesBroadcastService: Schema.BroadcastService<D> | undefined;
}

export function BroadcastChannelMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BroadcastChannel> & RdfResourceCore> & Base {
  @namespace(schema)
  class BroadcastChannelClass extends IntangibleMixin(Resource) implements Partial<BroadcastChannel> {
    @property.literal()
    broadcastChannelId: string | undefined;
    @property.resource()
    broadcastFrequency: Schema.BroadcastFrequencySpecification | undefined;
    @property.literal({ path: schema.broadcastFrequency })
    broadcastFrequencyLiteral: string | undefined;
    @property.literal()
    broadcastServiceTier: string | undefined;
    @property.literal()
    genre: string | undefined;
    @property({ path: schema.genre })
    genreTerm: RDF.NamedNode | undefined;
    @property.resource()
    inBroadcastLineup: Schema.CableOrSatelliteService | undefined;
    @property.resource()
    providesBroadcastService: Schema.BroadcastService | undefined;
  }
  return BroadcastChannelClass
}

class BroadcastChannelImpl extends BroadcastChannelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BroadcastChannel>) {
    super(arg, init)
    this.types.add(schema.BroadcastChannel)
  }

  static readonly __mixins: Mixin[] = [BroadcastChannelMixin, IntangibleMixin];
}
BroadcastChannelMixin.appliesTo = schema.BroadcastChannel
BroadcastChannelMixin.Class = BroadcastChannelImpl

export const fromPointer = createFactory<BroadcastChannel>([IntangibleMixin, BroadcastChannelMixin], { types: [schema.BroadcastChannel] });
