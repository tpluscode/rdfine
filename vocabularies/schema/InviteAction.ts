import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CommunicateActionMixin } from './CommunicateAction';

export interface InviteAction extends Schema.CommunicateAction, RdfResource {
  event: Schema.Event;
}

export function InviteActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InviteActionClass extends CommunicateActionMixin(Resource) implements InviteAction {
    @property.resource()
    event!: Schema.Event;
  }
  return InviteActionClass
}

class InviteActionImpl extends InviteActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InviteAction>) {
    super(arg, init)
    this.types.add(schema.InviteAction)
  }

  static readonly __mixins: Mixin[] = [InviteActionMixin, CommunicateActionMixin];
}
InviteActionMixin.appliesTo = schema.InviteAction
InviteActionMixin.Class = InviteActionImpl
