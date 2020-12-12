import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { SoftwareApplicationMixin } from './SoftwareApplication';

export interface MobileApplication<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SoftwareApplication<D>, RdfResource<D> {
  carrierRequirements: string | undefined;
}

export function MobileApplicationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MobileApplication> & RdfResourceCore> & Base {
  @namespace(schema)
  class MobileApplicationClass extends SoftwareApplicationMixin(Resource) implements Partial<MobileApplication> {
    @property.literal()
    carrierRequirements: string | undefined;
  }
  return MobileApplicationClass
}

class MobileApplicationImpl extends MobileApplicationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MobileApplication>) {
    super(arg, init)
    this.types.add(schema.MobileApplication)
  }

  static readonly __mixins: Mixin[] = [MobileApplicationMixin, SoftwareApplicationMixin];
}
MobileApplicationMixin.appliesTo = schema.MobileApplication
MobileApplicationMixin.Class = MobileApplicationImpl

export const fromPointer = createFactory<MobileApplication>([SoftwareApplicationMixin, MobileApplicationMixin], { types: [schema.MobileApplication] });
