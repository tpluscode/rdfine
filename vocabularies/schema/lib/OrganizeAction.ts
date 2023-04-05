import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ActionMixin } from './Action';

export interface OrganizeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, RdfResource<D> {
}

export function OrganizeActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<OrganizeAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class OrganizeActionClass extends ActionMixin(Resource) implements Partial<OrganizeAction> {
  }
  return OrganizeActionClass
}

class OrganizeActionImpl extends OrganizeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OrganizeAction>) {
    super(arg, init)
    this.types.add(schema.OrganizeAction)
  }

  static readonly __mixins: Mixin[] = [OrganizeActionMixin, ActionMixin];
}
OrganizeActionMixin.appliesTo = schema.OrganizeAction
OrganizeActionMixin.Class = OrganizeActionImpl

export const fromPointer = createFactory<OrganizeAction>([ActionMixin, OrganizeActionMixin], { types: [schema.OrganizeAction] });
