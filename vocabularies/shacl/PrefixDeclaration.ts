import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import * as Rdfs from '@rdfine/rdfs';

export interface PrefixDeclaration<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  namespace: string | undefined;
  prefix: string | undefined;
}

export function PrefixDeclarationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class PrefixDeclarationClass extends Rdfs.ResourceMixin(Resource) implements PrefixDeclaration {
    @property.literal()
    namespace: string | undefined;
    @property.literal()
    prefix: string | undefined;
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
