import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface Beach<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function BeachMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Beach> & RdfResourceCore> & Base {
  @namespace(schema)
  class BeachClass extends CivicStructureMixin(Resource) implements Partial<Beach> {
  }
  return BeachClass
}

class BeachImpl extends BeachMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Beach>) {
    super(arg, init)
    this.types.add(schema.Beach)
  }

  static readonly __mixins: Mixin[] = [BeachMixin, CivicStructureMixin];
}
BeachMixin.appliesTo = schema.Beach
BeachMixin.Class = BeachImpl

export const fromPointer = createFactory<Beach>([CivicStructureMixin, BeachMixin], { types: [schema.Beach] });
