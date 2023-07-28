import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CommunicateActionMixin } from './CommunicateAction.js';

export interface CheckInAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CommunicateAction<D>, rdfine.RdfResource<D> {
}

export function CheckInActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<CheckInAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CheckInActionClass extends CommunicateActionMixin(Resource) {
  }
  return CheckInActionClass as any
}

class CheckInActionImpl extends CheckInActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CheckInAction>) {
    super(arg, init)
    this.types.add(schema.CheckInAction)
  }

  static readonly __mixins: Mixin[] = [CheckInActionMixin, CommunicateActionMixin];
}
CheckInActionMixin.appliesTo = schema.CheckInAction
CheckInActionMixin.Class = CheckInActionImpl

export const fromPointer = createFactory<CheckInAction>([CommunicateActionMixin, CheckInActionMixin], { types: [schema.CheckInAction] });
