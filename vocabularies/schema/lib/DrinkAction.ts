import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ConsumeActionMixin } from './ConsumeAction.js';

export interface DrinkAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ConsumeAction<D>, rdfine.RdfResource<D> {
}

export function DrinkActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DrinkAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DrinkActionClass extends ConsumeActionMixin(Resource) {
  }
  return DrinkActionClass as any
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

export const fromPointer = createFactory<DrinkAction>([ConsumeActionMixin, DrinkActionMixin], { types: [schema.DrinkAction] });
