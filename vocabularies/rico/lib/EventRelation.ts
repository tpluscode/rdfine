import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { RelationMixin } from './Relation';

export interface EventRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, RdfResource<D> {
  eventRelationHasSource: Rico.Event<D> | undefined;
  eventRelationHasTarget: Rico.Thing<D> | undefined;
}

export function EventRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<EventRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class EventRelationClass extends RelationMixin(Resource) implements Partial<EventRelation> {
    @property.resource({ implicitTypes: [rico.Event] })
    eventRelationHasSource: Rico.Event | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    eventRelationHasTarget: Rico.Thing | undefined;
  }
  return EventRelationClass
}

class EventRelationImpl extends EventRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EventRelation>) {
    super(arg, init)
    this.types.add(rico.EventRelation)
  }

  static readonly __mixins: Mixin[] = [EventRelationMixin, RelationMixin];
}
EventRelationMixin.appliesTo = rico.EventRelation
EventRelationMixin.Class = EventRelationImpl

export const fromPointer = createFactory<EventRelation>([RelationMixin, EventRelationMixin], { types: [rico.EventRelation] });
