import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ActionMixin } from './Action.js';

export interface PlayAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, rdfine.RdfResource<D> {
  audience: Schema.Audience<D> | undefined;
  event: Schema.Event<D> | undefined;
}

export function PlayActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<PlayAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PlayActionClass extends ActionMixin(Resource) implements Partial<PlayAction> {
    @rdfine.property.resource()
    audience: Schema.Audience | undefined;
    @rdfine.property.resource()
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

export const fromPointer = createFactory<PlayAction>([ActionMixin, PlayActionMixin], { types: [schema.PlayAction] });
