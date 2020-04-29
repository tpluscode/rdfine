import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { ActionMixin } from './Action';

export interface PlayAction extends Schema.Action, RdfResource {
  audience: Schema.Audience;
  event: Schema.Event;
}

export function PlayActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PlayActionClass extends ActionMixin(Resource) implements PlayAction {
    @property.resource()
    audience!: Schema.Audience;
    @property.resource()
    event!: Schema.Event;
  }
  return PlayActionClass
}

class PlayActionImpl extends PlayActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PlayAction>) {
    super(arg, init)
    this.types.add(schema.PlayAction)
  }
}
PlayActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PlayAction)
PlayActionMixin.Class = PlayActionImpl
