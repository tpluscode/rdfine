import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { rdfs } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Rdfs from '.';
import LiteralMixin from './Literal';

export interface Resource extends RdfResource {
  comment: Rdfs.Literal;
  isDefinedBy: Rdfs.Resource;
  label: Rdfs.Literal;
  member: Rdfs.Resource;
  seeAlso: Rdfs.Resource;
}

export default function ResourceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(rdfs)
  class ResourceClass extends Resource implements Resource {
    @property.resource({ as: [LiteralMixin] })
    comment!: Rdfs.Literal;
    @property.resource({ as: [ResourceMixin] })
    isDefinedBy!: Rdfs.Resource;
    @property.resource({ as: [LiteralMixin] })
    label!: Rdfs.Literal;
    @property.resource({ as: [ResourceMixin] })
    member!: Rdfs.Resource;
    @property.resource({ as: [ResourceMixin] })
    seeAlso!: Rdfs.Resource;
  }
  return ResourceClass
}

class ResourceImpl extends ResourceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Resource>) {
    super(arg, init)
    this.types.add(rdfs.Resource)
  }
}
ResourceMixin.shouldApply = (r: RdfResource) => r.types.has(rdfs.Resource)
ResourceMixin.Class = ResourceImpl
