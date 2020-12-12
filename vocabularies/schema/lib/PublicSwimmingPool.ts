import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { SportsActivityLocationMixin } from './SportsActivityLocation';

export interface PublicSwimmingPool<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SportsActivityLocation<D>, RdfResource<D> {
}

export function PublicSwimmingPoolMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PublicSwimmingPool> & RdfResourceCore> & Base {
  @namespace(schema)
  class PublicSwimmingPoolClass extends SportsActivityLocationMixin(Resource) implements Partial<PublicSwimmingPool> {
  }
  return PublicSwimmingPoolClass
}

class PublicSwimmingPoolImpl extends PublicSwimmingPoolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PublicSwimmingPool>) {
    super(arg, init)
    this.types.add(schema.PublicSwimmingPool)
  }

  static readonly __mixins: Mixin[] = [PublicSwimmingPoolMixin, SportsActivityLocationMixin];
}
PublicSwimmingPoolMixin.appliesTo = schema.PublicSwimmingPool
PublicSwimmingPoolMixin.Class = PublicSwimmingPoolImpl

export const fromPointer = createFactory<PublicSwimmingPool>([SportsActivityLocationMixin, PublicSwimmingPoolMixin], { types: [schema.PublicSwimmingPool] });
