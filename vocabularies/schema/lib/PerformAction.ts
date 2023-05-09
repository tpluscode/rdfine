import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PlayActionMixin } from './PlayAction.js';

export interface PerformAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PlayAction<D>, rdfine.RdfResource<D> {
  entertainmentBusiness: Schema.EntertainmentBusiness<D> | undefined;
}

export function PerformActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<PerformAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PerformActionClass extends PlayActionMixin(Resource) implements Partial<PerformAction> {
    @rdfine.property.resource()
    entertainmentBusiness: Schema.EntertainmentBusiness | undefined;
  }
  return PerformActionClass
}

class PerformActionImpl extends PerformActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PerformAction>) {
    super(arg, init)
    this.types.add(schema.PerformAction)
  }

  static readonly __mixins: Mixin[] = [PerformActionMixin, PlayActionMixin];
}
PerformActionMixin.appliesTo = schema.PerformAction
PerformActionMixin.Class = PerformActionImpl

export const fromPointer = createFactory<PerformAction>([PlayActionMixin, PerformActionMixin], { types: [schema.PerformAction] });
