import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TradeActionMixin } from './TradeAction.js';

export interface SellAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TradeAction<D>, rdfine.RdfResource<D> {
  buyer: Schema.Organization<D> | Schema.Person<D> | undefined;
  warrantyPromise: Schema.WarrantyPromise<D> | undefined;
}

export function SellActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SellAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SellActionClass extends TradeActionMixin(Resource) {
    @rdfine.property.resource()
    buyer: Schema.Organization | Schema.Person | undefined;
    @rdfine.property.resource()
    warrantyPromise: Schema.WarrantyPromise | undefined;
  }
  return SellActionClass as any
}

class SellActionImpl extends SellActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SellAction>) {
    super(arg, init)
    this.types.add(schema.SellAction)
  }

  static readonly __mixins: Mixin[] = [SellActionMixin, TradeActionMixin];
}
SellActionMixin.appliesTo = schema.SellAction
SellActionMixin.Class = SellActionImpl

export const fromPointer = createFactory<SellAction>([TradeActionMixin, SellActionMixin], { types: [schema.SellAction] });
