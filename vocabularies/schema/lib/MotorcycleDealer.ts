import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness';

export interface MotorcycleDealer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AutomotiveBusiness<D>, RdfResource<D> {
}

export function MotorcycleDealerMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MotorcycleDealer> & RdfResourceCore> & Base {
  @namespace(schema)
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
