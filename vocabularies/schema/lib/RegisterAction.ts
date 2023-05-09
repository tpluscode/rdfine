import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InteractActionMixin } from './InteractAction.js';

export interface RegisterAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InteractAction<D>, rdfine.RdfResource<D> {
}

export function RegisterActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<RegisterAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class RegisterActionClass extends InteractActionMixin(Resource) implements Partial<RegisterAction> {
  }
  return RegisterActionClass
}

class RegisterActionImpl extends RegisterActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RegisterAction>) {
    super(arg, init)
    this.types.add(schema.RegisterAction)
  }

  static readonly __mixins: Mixin[] = [RegisterActionMixin, InteractActionMixin];
}
RegisterActionMixin.appliesTo = schema.RegisterAction
RegisterActionMixin.Class = RegisterActionImpl

export const fromPointer = createFactory<RegisterAction>([InteractActionMixin, RegisterActionMixin], { types: [schema.RegisterAction] });
