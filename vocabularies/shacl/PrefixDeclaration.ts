import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/Resource';

export interface PrefixDeclaration extends Rdfs.Resource, RdfResource {
  namespace: string;
  prefix: string;
}

export function PrefixDeclarationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class PrefixDeclarationClass extends RdfsResourceMixin(Resource) implements PrefixDeclaration {
    @property.literal()
    namespace!: string;
    @property.literal()
    prefix!: string;
  }
  return PrefixDeclarationClass
}

class PrefixDeclarationImpl extends PrefixDeclarationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PrefixDeclaration>) {
    super(arg, init)
    this.types.add(sh.PrefixDeclaration)
  }
}
PrefixDeclarationMixin.shouldApply = (r: RdfResource) => r.types.has(sh.PrefixDeclaration)
PrefixDeclarationMixin.Class = PrefixDeclarationImpl
