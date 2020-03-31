import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import AssessActionMixin from './AssessAction';

export interface ChooseAction extends Schema.AssessAction, RdfResource {
  actionOption: Schema.Thing;
  actionOptionLiteral: string;
  option: Schema.Thing;
  optionLiteral: string;
}

export default function ChooseActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ChooseActionClass extends AssessActionMixin(Resource) implements ChooseAction {
    @property.resource()
    actionOption!: Schema.Thing;
    @property.literal({ path: schema.actionOption })
    actionOptionLiteral!: string;
    @property.resource()
    option!: Schema.Thing;
    @property.literal({ path: schema.option })
    optionLiteral!: string;
  }
  return ChooseActionClass
}

class ChooseActionImpl extends ChooseActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ChooseAction>) {
    super(arg, init)
    this.types.add(schema.ChooseAction)
  }
}
ChooseActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ChooseAction)
ChooseActionMixin.Class = ChooseActionImpl
