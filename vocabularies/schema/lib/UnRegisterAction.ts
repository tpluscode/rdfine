import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InteractActionMixin } from './InteractAction.js';

export interface UnRegisterAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InteractAction<D>, rdfine.RdfResource<D> {
}

export function UnRegisterActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<UnRegisterAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class UnRegisterActionClass extends InteractActionMixin(Resource) implements Partial<UnRegisterAction> {
  }
  return UnRegisterActionClass
}

class UnRegisterActionImpl extends UnRegisterActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UnRegisterAction>) {
    super(arg, init)
    this.types.add(schema.UnRegisterAction)
  }

  static readonly __mixins: Mixin[] = [UnRegisterActionMixin, InteractActionMixin];
}
UnRegisterActionMixin.appliesTo = schema.UnRegisterAction
UnRegisterActionMixin.Class = UnRegisterActionImpl

export const fromPointer = createFactory<UnRegisterAction>([InteractActionMixin, UnRegisterActionMixin], { types: [schema.UnRegisterAction] });
