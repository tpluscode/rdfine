import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ServiceMixin } from './Service';

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
  parentService: Schema.BroadcastService;
  videoFormat: string;
}

export function BroadcastServiceMixin<Base extends Constructor>(Resource: Base) {
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
    parentService!: Schema.BroadcastService;
    @property.literal()
    videoFormat!: string;
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
