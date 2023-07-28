import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { SoftwareApplicationMixin } from './SoftwareApplication.js';

export interface MobileApplication<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SoftwareApplication<D>, rdfine.RdfResource<D> {
  carrierRequirements: string | undefined;
}

export function MobileApplicationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MobileApplication & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MobileApplicationClass extends SoftwareApplicationMixin(Resource) {
    @rdfine.property.literal()
    carrierRequirements: string | undefined;
  }
  return MobileApplicationClass as any
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
