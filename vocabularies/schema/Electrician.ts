import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { HomeAndConstructionBusinessMixin } from './HomeAndConstructionBusiness';

export interface Electrician<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HomeAndConstructionBusiness<D>, RdfResource<D> {
}

export function ElectricianMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ElectricianClass extends HomeAndConstructionBusinessMixin(Resource) implements Electrician {
  }
  return ElectricianClass
}

class ElectricianImpl extends ElectricianMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Electrician>) {
    super(arg, init)
    this.types.add(schema.Electrician)
  }

  static readonly __mixins: Mixin[] = [ElectricianMixin, HomeAndConstructionBusinessMixin];
}
ElectricianMixin.appliesTo = schema.Electrician
ElectricianMixin.Class = ElectricianImpl
