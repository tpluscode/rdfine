import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ActionMixin } from './Action.js';

export interface MoveAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, rdfine.RdfResource<D> {
  fromLocation: Schema.Place<D> | undefined;
  toLocation: Schema.Place<D> | undefined;
}

export function MoveActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MoveAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MoveActionClass extends ActionMixin(Resource) implements Partial<MoveAction> {
    @rdfine.property.resource()
    fromLocation: Schema.Place | undefined;
    @rdfine.property.resource()
    toLocation: Schema.Place | undefined;
  }
  return MoveActionClass
}

class MoveActionImpl extends MoveActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MoveAction>) {
    super(arg, init)
    this.types.add(schema.MoveAction)
  }

  static readonly __mixins: Mixin[] = [MoveActionMixin, ActionMixin];
}
MoveActionMixin.appliesTo = schema.MoveAction
MoveActionMixin.Class = MoveActionImpl

export const fromPointer = createFactory<MoveAction>([ActionMixin, MoveActionMixin], { types: [schema.MoveAction] });
