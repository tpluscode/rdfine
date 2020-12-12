import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CommunicateActionMixin } from './CommunicateAction';

export interface CheckInAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CommunicateAction<D>, RdfResource<D> {
}

export function CheckInActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CheckInAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class CheckInActionClass extends CommunicateActionMixin(Resource) implements Partial<CheckInAction> {
  }
  return CheckInActionClass
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
