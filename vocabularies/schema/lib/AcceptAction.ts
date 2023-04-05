import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AllocateActionMixin } from './AllocateAction';

export interface AcceptAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AllocateAction<D>, RdfResource<D> {
}

export function AcceptActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AcceptAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class AcceptActionClass extends AllocateActionMixin(Resource) implements Partial<AcceptAction> {
  }
  return AcceptActionClass
}

class AcceptActionImpl extends AcceptActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AcceptAction>) {
    super(arg, init)
    this.types.add(schema.AcceptAction)
  }

  static readonly __mixins: Mixin[] = [AcceptActionMixin, AllocateActionMixin];
}
AcceptActionMixin.appliesTo = schema.AcceptAction
AcceptActionMixin.Class = AcceptActionImpl

export const fromPointer = createFactory<AcceptAction>([AllocateActionMixin, AcceptActionMixin], { types: [schema.AcceptAction] });
