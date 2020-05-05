import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { InteractActionMixin } from './InteractAction';

export interface SubscribeAction extends Schema.InteractAction, RdfResource {
}

export function SubscribeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SubscribeActionClass extends InteractActionMixin(Resource) implements SubscribeAction {
  }
  return SubscribeActionClass
}

class SubscribeActionImpl extends SubscribeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SubscribeAction>) {
    super(arg, init)
    this.types.add(schema.SubscribeAction)
  }

  static readonly __mixins: Mixin[] = [SubscribeActionMixin, InteractActionMixin];
}
SubscribeActionMixin.appliesTo = schema.SubscribeAction
SubscribeActionMixin.Class = SubscribeActionImpl
