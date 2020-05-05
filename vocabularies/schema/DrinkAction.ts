import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ConsumeActionMixin } from './ConsumeAction';

export interface DrinkAction extends Schema.ConsumeAction, RdfResource {
}

export function DrinkActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DrinkActionClass extends ConsumeActionMixin(Resource) implements DrinkAction {
  }
  return DrinkActionClass
}

class DrinkActionImpl extends DrinkActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DrinkAction>) {
    super(arg, init)
    this.types.add(schema.DrinkAction)
  }

  static readonly __mixins: Mixin[] = [DrinkActionMixin, ConsumeActionMixin];
}
DrinkActionMixin.appliesTo = schema.DrinkAction
DrinkActionMixin.Class = DrinkActionImpl
