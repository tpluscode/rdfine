import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FindActionMixin } from './FindAction.js';

export interface CheckAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FindAction<D>, rdfine.RdfResource<D> {
}

export function CheckActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<CheckAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CheckActionClass extends FindActionMixin(Resource) {
  }
  return CheckActionClass as any
}

class CheckActionImpl extends CheckActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CheckAction>) {
    super(arg, init)
    this.types.add(schema.CheckAction)
  }

  static readonly __mixins: Mixin[] = [CheckActionMixin, FindActionMixin];
}
CheckActionMixin.appliesTo = schema.CheckAction
CheckActionMixin.Class = CheckActionImpl

export const fromPointer = createFactory<CheckAction>([FindActionMixin, CheckActionMixin], { types: [schema.CheckAction] });
