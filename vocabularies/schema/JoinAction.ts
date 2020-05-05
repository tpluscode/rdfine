import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { InteractActionMixin } from './InteractAction';

export interface JoinAction extends Schema.InteractAction, RdfResource {
  event: Schema.Event;
}

export function JoinActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class JoinActionClass extends InteractActionMixin(Resource) implements JoinAction {
    @property.resource()
    event!: Schema.Event;
  }
  return JoinActionClass
}

class JoinActionImpl extends JoinActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JoinAction>) {
    super(arg, init)
    this.types.add(schema.JoinAction)
  }

  static readonly __mixins: Mixin[] = [JoinActionMixin, InteractActionMixin];
}
JoinActionMixin.appliesTo = schema.JoinAction
JoinActionMixin.Class = JoinActionImpl
