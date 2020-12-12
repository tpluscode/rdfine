import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface Cemetery<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function CemeteryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Cemetery> & RdfResourceCore> & Base {
  @namespace(schema)
  class CemeteryClass extends CivicStructureMixin(Resource) implements Partial<Cemetery> {
  }
  return CemeteryClass
}

class CemeteryImpl extends CemeteryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Cemetery>) {
    super(arg, init)
    this.types.add(schema.Cemetery)
  }

  static readonly __mixins: Mixin[] = [CemeteryMixin, CivicStructureMixin];
}
CemeteryMixin.appliesTo = schema.Cemetery
CemeteryMixin.Class = CemeteryImpl
