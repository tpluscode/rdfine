import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ServiceMixin } from './Service';

export interface BroadcastService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Service<D>, RdfResource<D> {
  area: Schema.Place<D> | undefined;
  broadcastAffiliateOf: Schema.Organization<D> | undefined;
  broadcastDisplayName: string | undefined;
  broadcaster: Schema.Organization<D> | undefined;
  broadcastFrequency: Schema.BroadcastFrequencySpecification<D> | undefined;
  broadcastFrequencyLiteral: string | undefined;
  broadcastTimezone: string | undefined;
  hasBroadcastChannel: Schema.BroadcastChannel<D> | undefined;
  inLanguage: Schema.Language<D> | undefined;
  inLanguageLiteral: string | undefined;
  parentService: Schema.BroadcastService<D> | undefined;
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
