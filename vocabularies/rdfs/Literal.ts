import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { rdfs } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Rdfs from '.';
import ResourceMixin from './Resource';

export interface Literal extends Rdfs.Resource, RdfResource {
}

export default function LiteralMixin<Base extends Constructor>(Resource: Base) {
  @namespace(rdfs)
  class LiteralClass extends ResourceMixin(Resource) implements Literal {
  }
  return LiteralClass
}

class LiteralImpl extends LiteralMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Literal>) {
    super(arg, init)
    this.types.add(rdfs.Literal)
  }
}
LiteralMixin.shouldApply = (r: RdfResource) => r.types.has(rdfs.Literal)
LiteralMixin.Class = LiteralImpl
