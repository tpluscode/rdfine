import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ActionMixin } from './Action';

export interface MoveAction extends Schema.Action, RdfResource {
  fromLocation: Schema.Place | undefined;
  toLocation: Schema.Place | undefined;
}

export function MoveActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MoveActionClass extends ActionMixin(Resource) implements MoveAction {
    @property.resource()
    fromLocation: Schema.Place | undefined;
    @property.resource()
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
