import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface BroadcastChannel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  broadcastChannelId: string | undefined;
  broadcastFrequency: Schema.BroadcastFrequencySpecification<D> | undefined;
  broadcastFrequencyLiteral: string | undefined;
  broadcastServiceTier: string | undefined;
  genre: string | undefined;
  genreTerm: RDF.NamedNode | undefined;
  inBroadcastLineup: Schema.CableOrSatelliteService<D> | undefined;
  providesBroadcastService: Schema.BroadcastService<D> | undefined;
}

export function BroadcastChannelMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<BroadcastChannel & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BroadcastChannelClass extends IntangibleMixin(Resource) {
    @rdfine.property.literal()
    broadcastChannelId: string | undefined;
    @rdfine.property.resource()
    broadcastFrequency: Schema.BroadcastFrequencySpecification | undefined;
    @rdfine.property.literal({ path: schema.broadcastFrequency })
    broadcastFrequencyLiteral: string | undefined;
    @rdfine.property.literal()
    broadcastServiceTier: string | undefined;
    @rdfine.property.literal()
    genre: string | undefined;
    @rdfine.property({ path: schema.genre })
    genreTerm: RDF.NamedNode | undefined;
    @rdfine.property.resource()
    inBroadcastLineup: Schema.CableOrSatelliteService | undefined;
    @rdfine.property.resource()
    providesBroadcastService: Schema.BroadcastService | undefined;
  }
  return BroadcastChannelClass as any
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
