import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface Zoo<ID extends ResourceNode = ResourceNode> extends Schema.CivicStructure<ID>, RdfResource<ID> {
}

export function ZooMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ZooClass extends CivicStructureMixin(Resource) implements Zoo {
  }
  return ZooClass
}

class ZooImpl extends ZooMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Zoo>) {
    super(arg, init)
    this.types.add(schema.Zoo)
  }

  static readonly __mixins: Mixin[] = [ZooMixin, CivicStructureMixin];
}
ZooMixin.appliesTo = schema.Zoo
ZooMixin.Class = ZooImpl
