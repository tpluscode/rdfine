import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface PrefixDeclaration<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  namespace: string | undefined;
  prefix: string | undefined;
}

export function PrefixDeclarationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PrefixDeclaration> & RdfResourceCore> & Base {
  @namespace(sh)
  class PrefixDeclarationClass extends RdfsResourceMixin(Resource) implements Partial<PrefixDeclaration> {
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

  static readonly __mixins: Mixin[] = [PrefixDeclarationMixin, RdfsResourceMixin];
}
PrefixDeclarationMixin.appliesTo = sh.PrefixDeclaration
PrefixDeclarationMixin.Class = PrefixDeclarationImpl
