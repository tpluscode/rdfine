import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OrganizationMixin } from './Organization.js';

export interface NGO<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, RdfResource<D> {
}

export function NGOMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<NGO> & RdfResourceCore> & Base {
  @namespace(schema)
  class NGOClass extends OrganizationMixin(Resource) implements Partial<NGO> {
  }
  return NGOClass
}

class NGOImpl extends NGOMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<NGO>) {
    super(arg, init)
    this.types.add(schema.NGO)
  }

  static readonly __mixins: Mixin[] = [NGOMixin, OrganizationMixin];
}
NGOMixin.appliesTo = schema.NGO
NGOMixin.Class = NGOImpl

export const fromPointer = createFactory<NGO>([OrganizationMixin, NGOMixin], { types: [schema.NGO] });
