import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface ProfessionalService<ID extends ResourceNode = ResourceNode> extends Schema.LocalBusiness<ID>, RdfResource<ID> {
}

export function ProfessionalServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ProfessionalServiceClass extends LocalBusinessMixin(Resource) implements ProfessionalService {
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
