import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FindActionMixin } from './FindAction';

export interface DiscoverAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FindAction<D>, RdfResource<D> {
}

export function DiscoverActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DiscoverAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class DiscoverActionClass extends FindActionMixin(Resource) implements Partial<DiscoverAction> {
  }
  return DiscoverActionClass
}

class DiscoverActionImpl extends DiscoverActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DiscoverAction>) {
    super(arg, init)
    this.types.add(schema.DiscoverAction)
  }

  static readonly __mixins: Mixin[] = [DiscoverActionMixin, FindActionMixin];
}
DiscoverActionMixin.appliesTo = schema.DiscoverAction
DiscoverActionMixin.Class = DiscoverActionImpl

export const fromPointer = createFactory<DiscoverAction>([FindActionMixin, DiscoverActionMixin], { types: [schema.DiscoverAction] });
