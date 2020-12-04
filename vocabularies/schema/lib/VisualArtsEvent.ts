import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface VisualArtsEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
}

export function VisualArtsEventMixin<Base extends Constructor>(Resource: Base): Constructor<VisualArtsEvent> & Base {
  @namespace(schema)
  class VisualArtsEventClass extends EventMixin(Resource) implements VisualArtsEvent {
  }
  return VisualArtsEventClass
}

class VisualArtsEventImpl extends VisualArtsEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<VisualArtsEvent>) {
    super(arg, init)
    this.types.add(schema.VisualArtsEvent)
  }

  static readonly __mixins: Mixin[] = [VisualArtsEventMixin, EventMixin];
}
VisualArtsEventMixin.appliesTo = schema.VisualArtsEvent
VisualArtsEventMixin.Class = VisualArtsEventImpl
