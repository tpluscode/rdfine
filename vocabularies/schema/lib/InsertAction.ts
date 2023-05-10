import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AddActionMixin } from './AddAction.js';

export interface InsertAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AddAction<D>, rdfine.RdfResource<D> {
  toLocation: Schema.Place<D> | undefined;
}

export function InsertActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<InsertAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class InsertActionClass extends AddActionMixin(Resource) implements Partial<InsertAction> {
    @rdfine.property.resource()
    toLocation: Schema.Place | undefined;
  }
  return InsertActionClass
}

class InsertActionImpl extends InsertActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InsertAction>) {
    super(arg, init)
    this.types.add(schema.InsertAction)
  }

  static readonly __mixins: Mixin[] = [InsertActionMixin, AddActionMixin];
}
InsertActionMixin.appliesTo = schema.InsertAction
InsertActionMixin.Class = InsertActionImpl

export const fromPointer = createFactory<InsertAction>([AddActionMixin, InsertActionMixin], { types: [schema.InsertAction] });
