import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { AssessActionMixin } from './AssessAction';

export interface ChooseAction extends Schema.AssessAction, RdfResource {
  actionOption: Schema.Thing | undefined;
  actionOptionLiteral: string | undefined;
  option: Schema.Thing | undefined;
  optionLiteral: string | undefined;
}

export function ChooseActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ChooseActionClass extends AssessActionMixin(Resource) implements ChooseAction {
    @property.resource()
    actionOption: Schema.Thing | undefined;
    @property.literal({ path: schema.actionOption })
    actionOptionLiteral: string | undefined;
    @property.resource()
    option: Schema.Thing | undefined;
    @property.literal({ path: schema.option })
    optionLiteral: string | undefined;
  }
  return ChooseActionClass
}

class ChooseActionImpl extends ChooseActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ChooseAction>) {
    super(arg, init)
    this.types.add(schema.ChooseAction)
  }

  static readonly __mixins: Mixin[] = [ChooseActionMixin, AssessActionMixin];
}
ChooseActionMixin.appliesTo = schema.ChooseAction
ChooseActionMixin.Class = ChooseActionImpl
