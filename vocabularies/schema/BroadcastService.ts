import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ServiceMixin } from './Service';

export interface BroadcastService extends Schema.Service, RdfResource {
  area: Schema.Place | undefined;
  broadcastAffiliateOf: Schema.Organization | undefined;
  broadcastDisplayName: string | undefined;
  broadcaster: Schema.Organization | undefined;
  broadcastFrequency: Schema.BroadcastFrequencySpecification | undefined;
  broadcastFrequencyLiteral: string | undefined;
  broadcastTimezone: string | undefined;
  hasBroadcastChannel: Schema.BroadcastChannel | undefined;
  inLanguage: Schema.Language | undefined;
  inLanguageLiteral: string | undefined;
  parentService: Schema.BroadcastService | undefined;
  videoFormat: string | undefined;
}

export function BroadcastServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BroadcastServiceClass extends ServiceMixin(Resource) implements BroadcastService {
    @property.resource()
    area: Schema.Place | undefined;
    @property.resource()
    broadcastAffiliateOf: Schema.Organization | undefined;
    @property.literal()
    broadcastDisplayName: string | undefined;
    @property.resource()
    broadcaster: Schema.Organization | undefined;
    @property.resource()
    broadcastFrequency: Schema.BroadcastFrequencySpecification | undefined;
    @property.literal({ path: schema.broadcastFrequency })
    broadcastFrequencyLiteral: string | undefined;
    @property.literal()
    broadcastTimezone: string | undefined;
    @property.resource()
    hasBroadcastChannel: Schema.BroadcastChannel | undefined;
    @property.resource()
    inLanguage: Schema.Language | undefined;
    @property.literal({ path: schema.inLanguage })
    inLanguageLiteral: string | undefined;
    @property.resource()
    parentService: Schema.BroadcastService | undefined;
    @property.literal()
    videoFormat: string | undefined;
  }
  return BroadcastServiceClass
}

class BroadcastServiceImpl extends BroadcastServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BroadcastService>) {
    super(arg, init)
    this.types.add(schema.BroadcastService)
  }

  static readonly __mixins: Mixin[] = [BroadcastServiceMixin, ServiceMixin];
}
BroadcastServiceMixin.appliesTo = schema.BroadcastService
BroadcastServiceMixin.Class = BroadcastServiceImpl
