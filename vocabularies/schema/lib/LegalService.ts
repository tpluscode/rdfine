import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface LegalService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function LegalServiceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<LegalService> & RdfResourceCore> & Base {
  @namespace(schema)
  class LegalServiceClass extends LocalBusinessMixin(Resource) implements Partial<LegalService> {
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

export const fromPointer = createFactory<LegalService>([LocalBusinessMixin, LegalServiceMixin], { types: [schema.LegalService] });
