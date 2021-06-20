import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReactActionMixin } from './ReactAction';

export interface WantAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ReactAction<D>, RdfResource<D> {
}

export function WantActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<WantAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class WantActionClass extends ReactActionMixin(Resource) implements Partial<WantAction> {
  }
  return WantActionClass
}

class WantActionImpl extends WantActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WantAction>) {
    super(arg, init)
    this.types.add(schema.WantAction)
  }

  static readonly __mixins: Mixin[] = [WantActionMixin, ReactActionMixin];
}
WantActionMixin.appliesTo = schema.WantAction
WantActionMixin.Class = WantActionImpl

export const fromPointer = createFactory<WantAction>([ReactActionMixin, WantActionMixin], { types: [schema.WantAction] });
