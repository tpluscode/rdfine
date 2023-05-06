import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface ProfessionalService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function ProfessionalServiceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ProfessionalService> & RdfResourceCore> & Base {
  @namespace(schema)
  class ProfessionalServiceClass extends LocalBusinessMixin(Resource) implements Partial<ProfessionalService> {
  }
  return ProfessionalServiceClass
}

class ProfessionalServiceImpl extends ProfessionalServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ProfessionalService>) {
    super(arg, init)
    this.types.add(schema.ProfessionalService)
  }

  static readonly __mixins: Mixin[] = [ProfessionalServiceMixin, LocalBusinessMixin];
}
ProfessionalServiceMixin.appliesTo = schema.ProfessionalService
ProfessionalServiceMixin.Class = ProfessionalServiceImpl

export const fromPointer = createFactory<ProfessionalService>([LocalBusinessMixin, ProfessionalServiceMixin], { types: [schema.ProfessionalService] });
