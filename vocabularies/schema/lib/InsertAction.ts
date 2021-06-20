import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AddActionMixin } from './AddAction';

export interface InsertAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AddAction<D>, RdfResource<D> {
  toLocation: Schema.Place<D> | undefined;
}

export function InsertActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<InsertAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class InsertActionClass extends AddActionMixin(Resource) implements Partial<InsertAction> {
    @property.resource()
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
