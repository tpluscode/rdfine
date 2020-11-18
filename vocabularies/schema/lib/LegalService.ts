import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface LegalService<ID extends ResourceNode = ResourceNode> extends Schema.LocalBusiness<ID>, RdfResource<ID> {
}

export function LegalServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LegalServiceClass extends LocalBusinessMixin(Resource) implements LegalService {
  }
  return LegalServiceClass
}

class LegalServiceImpl extends LegalServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LegalService>) {
    super(arg, init)
    this.types.add(schema.LegalService)
  }

  static readonly __mixins: Mixin[] = [LegalServiceMixin, LocalBusinessMixin];
}
LegalServiceMixin.appliesTo = schema.LegalService
LegalServiceMixin.Class = LegalServiceImpl
