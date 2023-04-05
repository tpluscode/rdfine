import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OrganizeActionMixin } from './OrganizeAction.js';

export interface ApplyAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.OrganizeAction<D>, RdfResource<D> {
}

export function ApplyActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ApplyAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class ApplyActionClass extends OrganizeActionMixin(Resource) implements Partial<ApplyAction> {
  }
  return ApplyActionClass
}

class ApplyActionImpl extends ApplyActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ApplyAction>) {
    super(arg, init)
    this.types.add(schema.ApplyAction)
  }

  static readonly __mixins: Mixin[] = [ApplyActionMixin, OrganizeActionMixin];
}
ApplyActionMixin.appliesTo = schema.ApplyAction
ApplyActionMixin.Class = ApplyActionImpl

export const fromPointer = createFactory<ApplyAction>([OrganizeActionMixin, ApplyActionMixin], { types: [schema.ApplyAction] });
