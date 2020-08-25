import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CivicStructureMixin } from './CivicStructure';

export interface Beach extends Schema.CivicStructure, RdfResource {
}

export function BeachMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BeachClass extends CivicStructureMixin(Resource) implements Beach {
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
