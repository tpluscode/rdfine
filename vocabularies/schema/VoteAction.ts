import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ChooseActionMixin } from './ChooseAction';

export interface VoteAction extends Schema.ChooseAction, RdfResource {
  candidate: Schema.Person;
}

export function VoteActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VoteActionClass extends ChooseActionMixin(Resource) implements VoteAction {
    @property.resource()
    candidate!: Schema.Person;
  }
  return VoteActionClass
}

class VoteActionImpl extends VoteActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<VoteAction>) {
    super(arg, init)
    this.types.add(schema.VoteAction)
  }

  static readonly __mixins: Mixin[] = [VoteActionMixin, ChooseActionMixin];
}
VoteActionMixin.appliesTo = schema.VoteAction
VoteActionMixin.Class = VoteActionImpl
