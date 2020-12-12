import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReactActionMixin } from './ReactAction';

export interface AgreeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ReactAction<D>, RdfResource<D> {
}

export function AgreeActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AgreeAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class AgreeActionClass extends ReactActionMixin(Resource) implements Partial<AgreeAction> {
  }
  return AgreeActionClass
}

class AgreeActionImpl extends AgreeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AgreeAction>) {
    super(arg, init)
    this.types.add(schema.AgreeAction)
  }

  static readonly __mixins: Mixin[] = [AgreeActionMixin, ReactActionMixin];
}
AgreeActionMixin.appliesTo = schema.AgreeAction
AgreeActionMixin.Class = AgreeActionImpl

export const fromPointer = createFactory<AgreeAction>([ReactActionMixin, AgreeActionMixin], { types: [schema.AgreeAction] });
