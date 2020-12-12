import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AllocateActionMixin } from './AllocateAction';

export interface RejectAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AllocateAction<D>, RdfResource<D> {
}

export function RejectActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RejectAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class RejectActionClass extends AllocateActionMixin(Resource) implements Partial<RejectAction> {
  }
  return RejectActionClass
}

class RejectActionImpl extends RejectActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RejectAction>) {
    super(arg, init)
    this.types.add(schema.RejectAction)
  }

  static readonly __mixins: Mixin[] = [RejectActionMixin, AllocateActionMixin];
}
RejectActionMixin.appliesTo = schema.RejectAction
RejectActionMixin.Class = RejectActionImpl
