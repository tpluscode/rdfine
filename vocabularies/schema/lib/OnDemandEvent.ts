import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PublicationEventMixin } from './PublicationEvent';

export interface OnDemandEvent<ID extends ResourceNode = ResourceNode> extends Schema.PublicationEvent<ID>, RdfResource<ID> {
}

export function OnDemandEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OnDemandEventClass extends PublicationEventMixin(Resource) implements OnDemandEvent {
  }
  return OnDemandEventClass
}

class OnDemandEventImpl extends OnDemandEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OnDemandEvent>) {
    super(arg, init)
    this.types.add(schema.OnDemandEvent)
  }

  static readonly __mixins: Mixin[] = [OnDemandEventMixin, PublicationEventMixin];
}
OnDemandEventMixin.appliesTo = schema.OnDemandEvent
OnDemandEventMixin.Class = OnDemandEventImpl
