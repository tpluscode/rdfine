import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { MoveActionMixin } from './MoveAction';

export interface ArriveAction extends Schema.MoveAction, RdfResource {
}

export function ArriveActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ArriveActionClass extends MoveActionMixin(Resource) implements ArriveAction {
  }
  return ArriveActionClass
}

class ArriveActionImpl extends ArriveActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ArriveAction>) {
    super(arg, init)
    this.types.add(schema.ArriveAction)
  }

  static readonly __mixins: Mixin[] = [ArriveActionMixin, MoveActionMixin];
}
ArriveActionMixin.appliesTo = schema.ArriveAction
ArriveActionMixin.Class = ArriveActionImpl
