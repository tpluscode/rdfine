import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface ComedyEvent<ID extends ResourceNode = ResourceNode> extends Schema.Event<ID>, RdfResource<ID> {
}

export function ComedyEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ComedyEventClass extends EventMixin(Resource) implements ComedyEvent {
  }
  return ComedyEventClass
}

class ComedyEventImpl extends ComedyEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ComedyEvent>) {
    super(arg, init)
    this.types.add(schema.ComedyEvent)
  }

  static readonly __mixins: Mixin[] = [ComedyEventMixin, EventMixin];
}
ComedyEventMixin.appliesTo = schema.ComedyEvent
ComedyEventMixin.Class = ComedyEventImpl
