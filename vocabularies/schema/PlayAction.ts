import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ActionMixin } from './Action';

export interface PlayAction extends Schema.Action, RdfResource {
  audience: Schema.Audience | undefined;
  event: Schema.Event | undefined;
}

export function PlayActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PlayActionClass extends ActionMixin(Resource) implements PlayAction {
    @property.resource()
    audience: Schema.Audience | undefined;
    @property.resource()
    event: Schema.Event | undefined;
  }
  return PlayActionClass
}

class PlayActionImpl extends PlayActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PlayAction>) {
    super(arg, init)
    this.types.add(schema.PlayAction)
  }

  static readonly __mixins: Mixin[] = [PlayActionMixin, ActionMixin];
}
PlayActionMixin.appliesTo = schema.PlayAction
PlayActionMixin.Class = PlayActionImpl
