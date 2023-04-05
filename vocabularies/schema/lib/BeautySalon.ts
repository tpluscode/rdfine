import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { HealthAndBeautyBusinessMixin } from './HealthAndBeautyBusiness';

export interface BeautySalon<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HealthAndBeautyBusiness<D>, RdfResource<D> {
}

export function BeautySalonMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BeautySalon> & RdfResourceCore> & Base {
  @namespace(schema)
  class BeautySalonClass extends HealthAndBeautyBusinessMixin(Resource) implements Partial<BeautySalon> {
  }
  return BeautySalonClass
}

class BeautySalonImpl extends BeautySalonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BeautySalon>) {
    super(arg, init)
    this.types.add(schema.BeautySalon)
  }

  static readonly __mixins: Mixin[] = [BeautySalonMixin, HealthAndBeautyBusinessMixin];
}
BeautySalonMixin.appliesTo = schema.BeautySalon
BeautySalonMixin.Class = BeautySalonImpl

export const fromPointer = createFactory<BeautySalon>([HealthAndBeautyBusinessMixin, BeautySalonMixin], { types: [schema.BeautySalon] });
