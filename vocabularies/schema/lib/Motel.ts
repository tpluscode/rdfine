import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LodgingBusinessMixin } from './LodgingBusiness.js';

export interface Motel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LodgingBusiness<D>, rdfine.RdfResource<D> {
}

export function MotelMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Motel & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MotelClass extends LodgingBusinessMixin(Resource) {
  }
  return MotelClass as any
}

class MotelImpl extends MotelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Motel>) {
    super(arg, init)
    this.types.add(schema.Motel)
  }

  static readonly __mixins: Mixin[] = [MotelMixin, LodgingBusinessMixin];
}
MotelMixin.appliesTo = schema.Motel
MotelMixin.Class = MotelImpl

export const fromPointer = createFactory<Motel>([LodgingBusinessMixin, MotelMixin], { types: [schema.Motel] });
