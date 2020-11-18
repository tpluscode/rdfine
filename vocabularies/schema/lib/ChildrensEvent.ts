import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface ChildrensEvent<ID extends ResourceNode = ResourceNode> extends Schema.Event<ID>, RdfResource<ID> {
}

export function ChildrensEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ChildrensEventClass extends EventMixin(Resource) implements ChildrensEvent {
  }
  return ChildrensEventClass
}

class ChildrensEventImpl extends ChildrensEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ChildrensEvent>) {
    super(arg, init)
    this.types.add(schema.ChildrensEvent)
  }

  static readonly __mixins: Mixin[] = [ChildrensEventMixin, EventMixin];
}
ChildrensEventMixin.appliesTo = schema.ChildrensEvent
ChildrensEventMixin.Class = ChildrensEventImpl
