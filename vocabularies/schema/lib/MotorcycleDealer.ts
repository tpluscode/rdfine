import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness.js';

export interface MotorcycleDealer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AutomotiveBusiness<D>, rdfine.RdfResource<D> {
}

export function MotorcycleDealerMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MotorcycleDealer> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MotorcycleDealerClass extends AutomotiveBusinessMixin(Resource) implements Partial<MotorcycleDealer> {
  }
  return MotorcycleDealerClass
}

class MotorcycleDealerImpl extends MotorcycleDealerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MotorcycleDealer>) {
    super(arg, init)
    this.types.add(schema.MotorcycleDealer)
  }

  static readonly __mixins: Mixin[] = [MotorcycleDealerMixin, AutomotiveBusinessMixin];
}
MotorcycleDealerMixin.appliesTo = schema.MotorcycleDealer
MotorcycleDealerMixin.Class = MotorcycleDealerImpl

export const fromPointer = createFactory<MotorcycleDealer>([AutomotiveBusinessMixin, MotorcycleDealerMixin], { types: [schema.MotorcycleDealer] });
