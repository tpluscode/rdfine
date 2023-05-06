import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface EmergencyService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function EmergencyServiceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<EmergencyService> & RdfResourceCore> & Base {
  @namespace(schema)
  class EmergencyServiceClass extends LocalBusinessMixin(Resource) implements Partial<EmergencyService> {
  }
  return EmergencyServiceClass
}

class EmergencyServiceImpl extends EmergencyServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EmergencyService>) {
    super(arg, init)
    this.types.add(schema.EmergencyService)
  }

  static readonly __mixins: Mixin[] = [EmergencyServiceMixin, LocalBusinessMixin];
}
EmergencyServiceMixin.appliesTo = schema.EmergencyService
EmergencyServiceMixin.Class = EmergencyServiceImpl

export const fromPointer = createFactory<EmergencyService>([LocalBusinessMixin, EmergencyServiceMixin], { types: [schema.EmergencyService] });
