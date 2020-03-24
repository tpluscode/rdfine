import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ServiceMixin from './Service';

export interface BroadcastService extends Schema.Service, RdfResource {
  area: Schema.Place;
  broadcastAffiliateOf: Schema.Organization;
  broadcastDisplayName: string;
  broadcaster: Schema.Organization;
  broadcastFrequency: Schema.BroadcastFrequencySpecification;
  broadcastFrequencyLiteral: string;
  broadcastTimezone: string;
  hasBroadcastChannel: Schema.BroadcastChannel;
  inLanguage: Schema.Language;
  inLanguageLiteral: string;
  parentService: BroadcastService;
  videoFormat: string;
}

export default function BroadcastServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BroadcastServiceClass extends ServiceMixin(Resource) implements BroadcastService {
    @property.resource()
    area!: Schema.Place;
    @property.resource()
    broadcastAffiliateOf!: Schema.Organization;
    @property.literal()
    broadcastDisplayName!: string;
    @property.resource()
    broadcaster!: Schema.Organization;
    @property.resource()
    broadcastFrequency!: Schema.BroadcastFrequencySpecification;
    @property.literal({ path: schema.broadcastFrequency })
    broadcastFrequencyLiteral!: string;
    @property.literal()
    broadcastTimezone!: string;
    @property.resource()
    hasBroadcastChannel!: Schema.BroadcastChannel;
    @property.resource()
    inLanguage!: Schema.Language;
    @property.literal({ path: schema.inLanguage })
    inLanguageLiteral!: string;
    @property.resource()
    parentService!: BroadcastService;
    @property.literal()
    videoFormat!: string;
  }
  return BroadcastServiceClass
}

class BroadcastServiceImpl extends BroadcastServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<BroadcastService>) {
    super(arg)
    this.types.add(schema.BroadcastService)
    initializeProperties(this, init)
  }
}
BroadcastServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BroadcastService)
BroadcastServiceMixin.Class = BroadcastServiceImpl
