import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import * as Rdfs from '@rdfine/rdfs';

export interface PrefixDeclaration extends Rdfs.Resource, RdfResource {
  namespace: string;
  prefix: string;
}

export function PrefixDeclarationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class PrefixDeclarationClass extends Rdfs.ResourceMixin(Resource) implements PrefixDeclaration {
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

  static readonly __mixins: Mixin[] = [PrefixDeclarationMixin, Rdfs.ResourceMixin];
}
PrefixDeclarationMixin.appliesTo = sh.PrefixDeclaration
PrefixDeclarationMixin.Class = PrefixDeclarationImpl
