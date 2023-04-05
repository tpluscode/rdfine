import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OrganizeActionMixin } from './OrganizeAction';

export interface AllocateAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.OrganizeAction<D>, RdfResource<D> {
}

export function AllocateActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AllocateAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class AllocateActionClass extends OrganizeActionMixin(Resource) implements Partial<AllocateAction> {
  }
  return AllocateActionClass
}

class AllocateActionImpl extends AllocateActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AllocateAction>) {
    super(arg, init)
    this.types.add(schema.AllocateAction)
  }

  static readonly __mixins: Mixin[] = [AllocateActionMixin, OrganizeActionMixin];
}
AllocateActionMixin.appliesTo = schema.AllocateAction
AllocateActionMixin.Class = AllocateActionImpl

export const fromPointer = createFactory<AllocateAction>([OrganizeActionMixin, AllocateActionMixin], { types: [schema.AllocateAction] });
